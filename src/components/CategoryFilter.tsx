import Link from "next/link";
import { CATEGORIES, CategoryId } from "@/lib/segments";

export default function CategoryFilter({
  active,
}: {
  active?: CategoryId;
}) {
  return (
    <nav className="flex flex-wrap gap-2 py-4">
      <Link
        href="/"
        className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
          !active
            ? "border-foreground bg-foreground text-background"
            : "border-border text-muted hover:border-foreground"
        }`}
      >
        All
      </Link>
      {CATEGORIES.map((c) => (
        <Link
          key={c.id}
          href={`/?category=${c.id}`}
          className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
            active === c.id
              ? "border-foreground bg-foreground text-background"
              : "border-border text-muted hover:border-foreground"
          }`}
        >
          {c.label}
        </Link>
      ))}
    </nav>
  );
}
