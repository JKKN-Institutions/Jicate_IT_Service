import { Container } from "@/components/ui";
import { subNav } from "@/content/utilities";

/**
 * Sticky in-page sub-nav — anchor links to each major section, pinned below the
 * site header (reference parity). Desktop only.
 */
export function SubNav() {
  return (
    <div className="sticky top-0 z-30 hidden border-b border-ink/10 bg-canvas/90 backdrop-blur-sm desktop:block">
      <Container>
        <nav aria-label="On this page" className="flex flex-wrap gap-x-[28px] gap-y-[8px] py-[14px]">
          {subNav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[14px] text-ink-light transition-colors hover:text-ink"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </Container>
    </div>
  );
}

export default SubNav;
