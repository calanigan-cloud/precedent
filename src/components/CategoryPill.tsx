import { CategoryId, getCategoryLabel } from "@/lib/segments";

const COLORS: Record<CategoryId, string> = {
  "ai-law": "bg-navy/10 text-navy",
  ma: "bg-accent/10 text-accent",
  regulatory: "bg-muted/15 text-muted",
  ethics: "bg-accent/10 text-accent",
};

export default function CategoryPill({ category }: { category: CategoryId }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide ${COLORS[category]}`}
    >
      {getCategoryLabel(category)}
    </span>
  );
}
