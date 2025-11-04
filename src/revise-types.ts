import { z } from 'zod';
import { Session } from './generate.js';
import { PromptEngineeringMode } from './settings.js';
import { Message } from 'sillytavern-utils-lib';

export const REVISE_SCHEMA_NAME = {
  FIELD: 'FieldRevision',
  GLOBAL: 'GlobalRevision',
} as const;

export const CHAT_HISTORY_PLACEHOLDER_ID = 'placeholder-chatHistory';

// Zod schemas for AI responses
export const FieldSpecificResponseSchema = z.object({
  justification: z
    .string()
    .describe(
      'A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant.',
    ),
  response: z.string().describe('The new, full content for the character field.'),
});
export type FieldSpecificResponse = z.infer<typeof FieldSpecificResponseSchema>;

// --- Dynamic Global Response Schema ---

// Base schemas for static type inference throughout the app, ensuring other parts of the code don't break.
const FieldChangeSchemaForTyping = z.object({
  field: z.string(),
  value: z.string(),
});
const GreetingChangeSchemaForTyping = z.object({
  index: z.number().int().positive(),
  value: z.string(),
});
export const GlobalResponseSchemaForTyping = z.object({
  justification: z.string(),
  fields_to_change: z.array(FieldChangeSchemaForTyping).optional(),
  draft_fields_to_remove: z.array(z.string()).optional(),
  greetings_to_add: z.array(z.string()).optional(),
  greetings_to_remove: z.array(z.number().int().positive()).optional(),
  greetings_to_change: z.array(GreetingChangeSchemaForTyping).optional(),
});
export type GlobalResponse = z.infer<typeof GlobalResponseSchemaForTyping>;

/**
 * Creates a dynamic Zod schema for global character revisions.
 * @param allFieldIds - An array of all valid core and draft field IDs.
 * @param draftFieldIds - An array of only the valid draft field IDs.
 * @returns A Zod schema object tailored to the current character state.
 */
export const createGlobalResponseSchema = (allFieldIds: string[], draftFieldIds: string[]) => {
  const GreetingChangeSchema = z.object({
    index: z.number().int().positive().describe('The 1-based index of the alternate greeting to change.'),
    value: z.string().describe('The new content for the alternate greeting.'),
  });

  const schemaDefinition: { [key: string]: z.ZodTypeAny } = {
    justification: z
      .string()
      .describe(
        'A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant.',
      ),
    greetings_to_add: z.array(z.string()).optional().describe('A list of new alternate greetings to add to the end.'),
    greetings_to_remove: z
      .array(z.number().int().positive())
      .optional()
      .describe('A list of 1-based indices of alternate greetings to remove.'),
    greetings_to_change: z
      .array(GreetingChangeSchema)
      .optional()
      .describe('A list of alternate greetings to update with new content.'),
  };

  // Only include `fields_to_change` in the schema if there are fields that can be changed.
  if (allFieldIds.length > 0) {
    const FieldChangeSchema = z.object({
      field: z
        .enum(allFieldIds as [string, ...string[]])
        .describe('The unique ID of the field to change (core or draft).'),
      value: z.string().describe('The new content for the field.'),
    });
    schemaDefinition.fields_to_change = z
      .array(FieldChangeSchema)
      .optional()
      .describe('A list of character fields to update with new content.');
  }

  // Only include `draft_fields_to_remove` if there are draft fields that can be removed.
  if (draftFieldIds.length > 0) {
    schemaDefinition.draft_fields_to_remove = z
      .array(z.enum(draftFieldIds as [string, ...string[]]).describe('The unique ID of the draft field to remove.'))
      .optional()
      .describe('A list of draft field IDs to remove.');
  }

  return z.object(schemaDefinition);
};

// Types for session management
export type CharacterState = Pick<Session, 'fields' | 'draftFields'>;

export interface ReviseMessage extends Message {
  id: string; // Unique ID for the message
  isInitial?: boolean; // Was this part of the initial prompt?
  stateSnapshot?: CharacterState; // Snapshot of the character state *after* this message was generated
  isStateUpdate?: boolean; // Is this a hidden message that just contains the state?
}

export type ReviseSessionType = 'global' | 'field';

export interface ReviseSession {
  id: string;
  name: string;
  type: ReviseSessionType;
  targetFieldId?: string; // Only for 'field' type sessions
  createdAt: string; // ISO string
  messages: ReviseMessage[];
  context: {
    mainContextTemplatePreset: string;
    // Future context settings could be stored here
  };
  profileId: string;
  promptEngineeringMode: PromptEngineeringMode;
}
