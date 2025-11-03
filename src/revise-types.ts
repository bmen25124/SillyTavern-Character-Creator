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

export const GlobalResponseOpChangeSchema = z.object({
  op: z.literal('change'),
  field: z
    .string()
    .describe('The unique ID of the field to change (e.g., "description", "personality", or a draft field ID).'),
  value: z.string().describe('The new content for the field.'),
});

export const GlobalResponseOpRemoveSchema = z.object({
  op: z.literal('remove'),
  field: z.string().describe('The unique ID of the draft field to remove.'),
});

// New Greeting Operations
export const GlobalResponseOpAddGreetingSchema = z.object({
  op: z.literal('add_greeting'),
  value: z.string().describe('The content for the new alternate greeting to be added to the end of the list.'),
});

export const GlobalResponseOpRemoveGreetingSchema = z.object({
  op: z.literal('remove_greeting'),
  index: z.number().int().positive().describe('The 1-based index of the alternate greeting to remove.'),
});

export const GlobalResponseOpChangeGreetingSchema = z.object({
  op: z.literal('change_greeting'),
  index: z.number().int().positive().describe('The 1-based index of the alternate greeting to change.'),
  value: z.string().describe('The new content for the alternate greeting.'),
});

export const GlobalResponseOperationSchema = z.union([
  GlobalResponseOpChangeSchema,
  GlobalResponseOpRemoveSchema,
  GlobalResponseOpAddGreetingSchema,
  GlobalResponseOpRemoveGreetingSchema,
  GlobalResponseOpChangeGreetingSchema,
]);

export const GlobalResponseSchema = z.object({
  justification: z
    .string()
    .describe(
      'A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant.',
    ),
  operations: z.array(GlobalResponseOperationSchema).describe('A list of operations to modify the character card.'),
});
export type GlobalResponse = z.infer<typeof GlobalResponseSchema>;

// Types for session management
export type CharacterState = Pick<Session, 'fields' | 'draftFields'>;

export interface ReviseMessage extends Message {
  id: string; // Unique ID for the message
  isInitial?: boolean; // Was this part of the initial prompt?
  stateSnapshot?: CharacterState; // Snapshot of the character state *after* this message was generated
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
