import { Container } from "@/components/ui";
import { subNav } from "@/content/energy";

/**
 * Sticky in-page sub-navigation — a left-aligned row of anchor links that pins
 * just beneath the fixed site header (106px). Light, muted text.
 */
export function SubNav() {
  return (
    <div className="sticky top-[106px] z-30 border-b border-ink/10 bg-canvas/90 backdrop-blur-sm">
      <Container>
        <nav aria-label="On this page" className="flex flex-wrap gap-x-2xl gap-y-xs py-m">
          {subNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-body text-ink-light transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </div>
  );
}

export default SubNav;
