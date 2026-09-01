/**
 * JsonLd.tsx — Generic JSON-LD script injector component
 * Accepts any schema object and renders it as application/ld+json
 */

interface JsonLdProps {
  schema: unknown;
}

/**
 * Renders a <script type="application/ld+json"> tag for structured data.
 * Must be used in a Server Component (no "use client").
 */
export default function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}
