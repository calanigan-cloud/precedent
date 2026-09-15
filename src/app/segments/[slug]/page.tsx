import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSegments, getSegmentBySlug } from "@/lib/segments";
import CategoryPill from "@/components/CategoryPill";

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return getAllSegments().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const segment = getSegmentBySlug(slug);
  if (!segment) return {};
  return { title: `${segment.title} — Precedent`, description: segment.dek };
}

export default async function SegmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const segment = getSegmentBySlug(slug);
  if (!segment) notFound();

  return (
    <article className="mx-auto max-w-2xl px-5 py-10">
      <Link href="/" className="text-sm text-muted hover:text-foreground">
        ← All segments
      </Link>

      <div className="mt-6 flex items-center gap-3">
        <CategoryPill category={segment.category} />
        <time className="text-xs text-muted">{formatDate(segment.date)}</time>
      </div>

      <h1 className="font-serif text-3xl sm:text-4xl leading-tight mt-4">
        {segment.title}
      </h1>
      <p className="mt-3 text-lg text-muted leading-relaxed">{segment.dek}</p>

      <section className="mt-8">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
          What happened
        </h2>
        {segment.whatHappened.map((p, i) => (
          <p key={i} className="mb-4 leading-relaxed">
            {p}
          </p>
        ))}
      </section>

      <section className="mt-8 border-t border-border pt-8">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
          Why it happened — and why it matters
        </h2>
        {segment.whyItMatters.map((p, i) => (
          <p key={i} className="mb-4 leading-relaxed">
            {p}
          </p>
        ))}
      </section>

      <section className="mt-8 rounded-lg border border-border bg-surface p-5">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
          Takeaway
        </h2>
        <p className="leading-relaxed">{segment.takeaway}</p>
      </section>

      <p className="mt-8 text-sm text-muted">
        Source:{" "}
        <a
          href={segment.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground"
        >
          {segment.sourceName}
        </a>
      </p>
    </article>
  );
}
