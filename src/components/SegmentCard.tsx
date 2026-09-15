import Link from "next/link";
import { Segment } from "@/lib/segments";
import CategoryPill from "./CategoryPill";

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function SegmentCard({ segment }: { segment: Segment }) {
  return (
    <Link
      href={`/segments/${segment.slug}`}
      className="block py-6 border-b border-border group"
    >
      <div className="flex items-center gap-3 mb-2">
        <CategoryPill category={segment.category} />
        <time className="text-xs text-muted">{formatDate(segment.date)}</time>
      </div>
      <h2 className="font-serif text-xl sm:text-2xl leading-snug group-hover:text-accent transition-colors">
        {segment.title}
      </h2>
      <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
        {segment.dek}
      </p>
    </Link>
  );
}
