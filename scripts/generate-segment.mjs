#!/usr/bin/env node
// Drafts a new Precedent segment from a source URL using the Anthropic API.
// Usage: ANTHROPIC_API_KEY=sk-... node scripts/generate-segment.mjs "<source url>" "[category: ai-law|ma|regulatory|ethics]"
//
// Fetches the article text, asks Claude to draft the segment fields in the
// same shape used by src/lib/segments.ts, and prints a ready-to-paste object.
// This is a starting point for review, not an auto-publish pipeline — read
// and verify every fact and source link before adding it to segments.ts.

import Anthropic from "@anthropic-ai/sdk";

const [sourceUrl, category = "ai-law"] = process.argv.slice(2);

if (!sourceUrl) {
  console.error(
    'Usage: node scripts/generate-segment.mjs "<source url>" "[category]"'
  );
  process.exit(1);
}

if (!process.env.ANTHROPIC_API_KEY) {
  console.error("Set ANTHROPIC_API_KEY in your environment first.");
  process.exit(1);
}

const client = new Anthropic();

const res = await fetch(sourceUrl, {
  headers: { "User-Agent": "Mozilla/5.0 (Precedent segment generator)" },
});
if (!res.ok) {
  console.error(`Failed to fetch ${sourceUrl}: ${res.status}`);
  process.exit(1);
}
const html = await res.text();
const text = html
  .replace(/<script[\s\S]*?<\/script>/gi, "")
  .replace(/<style[\s\S]*?<\/style>/gi, "")
  .replace(/<[^>]+>/g, " ")
  .replace(/\s+/g, " ")
  .trim()
  .slice(0, 20000);

const prompt = `You are drafting a segment for Precedent, a briefing site for aspiring commercial lawyers. Each segment explains not just what happened in a commercial law or legal-AI story, but *why* it happened and why it matters to someone training to become a commercial lawyer.

Source URL: ${sourceUrl}
Category: ${category}

Article text (extracted, may include navigation noise — ignore that):
"""
${text}
"""

Return ONLY a JSON object with these fields, matching this TypeScript shape exactly:
{
  "slug": string, // kebab-case, derived from the headline
  "title": string, // punchy, specific, under ~12 words
  "dek": string, // one sentence sub-headline
  "date": string, // ISO date the underlying event/story occurred, YYYY-MM-DD
  "sourceName": string, // publication name
  "whatHappened": string[], // 1-2 paragraphs, plain factual account
  "whyItMatters": string[], // 2-4 paragraphs of causal analysis: WHY this happened (market, legal, regulatory drivers) and its second-order implications for commercial legal practice
  "takeaway": string // one paragraph of concrete, practical advice for an aspiring commercial lawyer
}

Be specific and causal in "whyItMatters" — name the actual mechanism (a statute, a market incentive, a precedent, a cost pressure), not vague commentary. Do not invent facts not supported by the source text.`;

const message = await client.messages.create({
  model: "claude-sonnet-5",
  max_tokens: 2048,
  messages: [{ role: "user", content: prompt }],
});

const textBlock = message.content.find((b) => b.type === "text");
console.log(textBlock ? textBlock.text : JSON.stringify(message, null, 2));
console.error(
  "\nReview every fact and the source link above, then merge the fields into src/lib/segments.ts by hand."
);
