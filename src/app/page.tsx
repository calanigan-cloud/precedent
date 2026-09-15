import { CategoryId, getSegmentsByCategory, CATEGORIES } from "@/lib/segments";
import SegmentCard from "@/components/SegmentCard";
import CategoryFilter from "@/components/CategoryFilter";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = CATEGORIES.find((c) => c.id === category)?.id as
    | CategoryId
    | undefined;
  const segments = getSegmentsByCategory(activeCategory);

  return (
    <div className="mx-auto max-w-3xl px-5">
      <div className="pt-10 pb-2">
        <h1 className="font-serif text-3xl sm:text-4xl leading-tight max-w-xl">
          Commercial law and legal AI, explained — not just reported.
        </h1>
        <p className="mt-3 text-muted max-w-xl leading-relaxed">
          Short briefings for aspiring commercial lawyers on the deals,
          rulings and firm moves that matter — with the causal chain behind
          each one, not just the headline.
        </p>
      </div>

      <CategoryFilter active={activeCategory} />

      <div>
        {segments.map((segment) => (
          <SegmentCard key={segment.slug} segment={segment} />
        ))}
        {segments.length === 0 && (
          <p className="py-12 text-muted text-sm">
            No segments in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
