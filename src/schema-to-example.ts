function escapeXml(text: any): string {
  const s = String(text);
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Convert any JSON value to XML *fragments* (no outer <root/>) with indentation.
// Objects -> <key>...</key>
// Arrays  -> <item>...</item>
// Primitives -> <value>...</value>
function jsonToXmlFragment(value: any, indent = 0): string {
  const indentation = '  '.repeat(indent);

  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (item !== null && typeof item === 'object') {
          return `${indentation}<item>\n${jsonToXmlFragment(item, indent + 1)}${indentation}</item>\n`;
        }
        return `${indentation}<item>${escapeXml(item)}</item>\n`;
      })
      .join('');
  }

  if (value !== null && typeof value === 'object') {
    let xml = '';
    for (const key of Object.keys(value)) {
      const v = value[key];
      if (v !== null && typeof v === 'object') {
        xml += `${indentation}<${key}>\n${jsonToXmlFragment(v, indent + 1)}${indentation}</${key}>\n`;
      } else {
        xml += `${indentation}<${key}>${escapeXml(v)}</${key}>\n`;
      }
    }
    return xml;
  }

  // Primitive at top level
  return `${indentation}<value>${escapeXml(value)}</value>\n`;
}

export function schemaToExample(schema: any, format: 'json' | 'xml'): string {
  const example = generateExample(schema);
  if (format === 'xml') {
    // The prompt template should wrap this with a root element.
    return jsonToXmlFragment(example).trim();
  }
  return JSON.stringify(example, null, 2);
}

function pickFirstDefined<T>(...vals: T[]): T | undefined {
  for (const v of vals) if (v !== undefined) return v;
  return undefined;
}

function nonNullType(t: any): any {
  // JSON Schema may specify ["string","null"]
  if (Array.isArray(t)) return t.find((x) => x !== 'null') ?? t[0];
  return t;
}

function generateExample(schema: any): any {
  if (!schema || typeof schema !== 'object') return null;

  // Prefer explicit example(s) or default first.
  const fromExamples = Array.isArray(schema.examples) ? schema.examples[0] : undefined;
  const preferred = pickFirstDefined(schema.example, fromExamples, schema.default);
  if (preferred !== undefined) return preferred;

  // Handle enum / const
  if (schema.const !== undefined) return schema.const;
  if (Array.isArray(schema.enum) && schema.enum.length) return schema.enum[0];

  // Handle anyOf/oneOf by taking the first option.
  const firstAlt = Array.isArray(schema.anyOf)
    ? schema.anyOf[0]
    : Array.isArray(schema.oneOf)
      ? schema.oneOf[0]
      : undefined;
  if (firstAlt) return generateExample(firstAlt);

  // Unwrap nullable type arrays like ["string","null"]
  const t = nonNullType(schema.type);

  switch (t) {
    case 'object': {
      const obj: Record<string, any> = {};
      const props = schema.properties || {};
      for (const key of Object.keys(props)) {
        obj[key] = generateExample(props[key]);
      }
      // additionalProperties
      if (schema.additionalProperties && typeof schema.additionalProperties === 'object') {
        obj.additionalProperty = generateExample(schema.additionalProperties);
      }
      return obj;
    }

    case 'array': {
      const itemSchema = schema.items ?? {};
      return [generateExample(itemSchema)];
    }

    case 'string': {
      // Try format-based sensible samples
      switch (schema.format) {
        case 'date-time':
          return new Date(0).toISOString();
        case 'date':
          return '1970-01-01';
        case 'time':
          return '00:00:00';
        case 'email':
          return 'user@example.com';
        case 'uri':
        case 'url':
          return 'https://example.com';
        case 'uuid':
          return '00000000-0000-0000-0000-000000000000';
        default:
          return schema.title || schema.description || 'string';
      }
    }

    case 'integer':
      return 0;

    case 'number':
      return 0;

    case 'boolean':
      return false;

    case 'null':
      return null;

    default: {
      // If no explicit type, infer from sub-keys
      if (schema.properties || schema.additionalProperties) return generateExample({ ...schema, type: 'object' });
      if (schema.items) return generateExample({ ...schema, type: 'array' });
      return null;
    }
  }
}
