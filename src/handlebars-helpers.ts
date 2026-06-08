import * as Handlebars from 'handlebars';

function registerHelper(name: string, helper: (...args: any[]) => any) {
  if (!Handlebars.helpers[name]) {
    Handlebars.registerHelper(name, helper);
  }
}

registerHelper('add', (a: any, b: any) => Number(a) + Number(b));

registerHelper('join', (array: any, separator: any) => {
  if (Array.isArray(array)) {
    return array.join(typeof separator === 'string' ? separator : ', ');
  }
  return '';
});

registerHelper('is_not_empty', function (this: any, value: any, options: any) {
  if (!value) {
    return options.inverse(this);
  }
  if (Array.isArray(value)) {
    return value.length > 0 ? options.fn(this) : options.inverse(this);
  }
  if (typeof value === 'object' && Object.keys(value).length > 0) {
    return options.fn(this);
  }
  if (typeof value !== 'object' && !Array.isArray(value)) {
    return options.fn(this);
  }
  return options.inverse(this);
});

registerHelper('indent', (level: any, text: any) => {
  const spaces = ' '.repeat(Math.max(0, Number(level) || 0));
  return String(text ?? '').split('\n').join(`\n${spaces}`);
});

registerHelper('json', (value: any) => JSON.stringify(value));

registerHelper('xmlEscape', (value: any) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;'),
);
