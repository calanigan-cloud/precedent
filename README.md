# Ratio

Short briefings on commercial law and legal-AI developments for aspiring
commercial lawyers — each one explains what happened *and why it happened*,
not just the headline.

## Running it

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How content works

There's no database or CMS. Every segment is a plain object in
[`src/lib/segments.ts`](src/lib/segments.ts) with this shape:

```ts
{
  slug: string;          // used in the URL: /segments/<slug>
  title: string;
  dek: string;            // one-line sub-headline
  category: "ai-law" | "ma" | "regulatory" | "ethics";
  date: string;            // ISO date, YYYY-MM-DD
  sourceName: string;
  sourceUrl: string;
  whatHappened: string[];  // 1-2 paragraphs, plain facts
  whyItMatters: string[];  // 2-4 paragraphs of causal analysis
  takeaway: string;        // one practical paragraph for the reader
}
```

To add a new segment, append an object to the `segments` array — the
homepage, category filter and `/segments/<slug>` page all pick it up
automatically.

### Drafting a segment from a source article

`scripts/generate-segment.mjs` fetches an article and asks Claude to draft
the fields above in the right shape, as a starting point for you to fact-check
and edit — it does not publish automatically.

```bash
export ANTHROPIC_API_KEY=sk-...
node scripts/generate-segment.mjs "https://example.com/some-article" ai-law
```

Read the output against the source before pasting it into `segments.ts` —
treat it as a first draft, not a finished, verifiable segment.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS. No database — content is
static and version-controlled, which keeps every claim traceable to a
source link and a git commit.

## Deploying

Push this to a GitHub repo and import it on [Vercel](https://vercel.com/new)
— zero config needed.
