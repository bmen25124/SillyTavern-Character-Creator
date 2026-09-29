import * as Handlebars from 'handlebars';
import './handlebars-helpers.js';

/**
 * Renders prompt templates while keeping user-authored content (card fields, instructions, reference characters,
 * lorebook entries) verbatim. Such content is not a template: its macros (`{{char}}`, `{{random::a::b}}`, ...) must
 * reach the model as written, so they are not rendered by Handlebars and not substituted by SillyTavern.
 *
 * Usage: wrap user content with `protectMacros` when building the template data, then render with `renderPrompt`.
 */

// Unicode noncharacters are reserved for internal use and survive Handlebars, the `json` and `xmlEscape` helpers,
// and SillyTavern's macro substitution. ESCAPE keeps pre-existing sentinel characters round-trippable.
const ESCAPE = '\uFDD0';
const OPEN = '\uFDD1';
const CLOSE = '\uFDD2';

const USER_PLACEHOLDER = '[[[crec_veryUniqueUserPlaceHolder]]]';
const CHAR_PLACEHOLDER = '[[[crec_veryUniqueCharPlaceHolder]]]';

function protectText(text: string): string {
  return text.replace(/\{\{|\}\}|[\uFDD0-\uFDD2]/g, (match) =>
    match === '{{' ? OPEN : match === '}}' ? CLOSE : ESCAPE + match,
  );
}

function restoreText(text: string): string {
  return text.replace(/\uFDD0([\uFDD0-\uFDD2])|[\uFDD1\uFDD2]/g, (match, escaped?: string) =>
    escaped ? escaped : match === OPEN ? '{{' : '}}',
  );
}

/**
 * Returns a deep copy of `value` in which every string (including object keys) has its macro braces replaced by
 * sentinels. `renderPrompt` restores them after rendering.
 */
export function protectMacros<T>(value: T): T {
  if (typeof value === 'string') {
    return protectText(value) as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => protectMacros(item)) as T;
  }
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [protectText(key), protectMacros(item)])) as T;
  }
  return value;
}

/**
 * Renders a prompt template with Handlebars, then substitutes SillyTavern macros that come from the template itself.
 * Literal `{{char}}` and `{{user}}` in the output (e.g. from `\{{char}}`) are kept, and content wrapped with
 * `protectMacros` is restored verbatim.
 */
export function renderPrompt(
  template: string,
  data: Record<string, any>,
  substituteParams: (content: string) => string,
): string {
  let content = Handlebars.compile(template, { noEscape: true })(data);
  content = content.replaceAll('{{user}}', USER_PLACEHOLDER);
  content = content.replaceAll('{{char}}', CHAR_PLACEHOLDER);
  content = substituteParams(content);
  content = content.replaceAll(USER_PLACEHOLDER, '{{user}}');
  content = content.replaceAll(CHAR_PLACEHOLDER, '{{char}}');
  return restoreText(content);
}
