import { Container } from "@/components/ui";
import { subnav } from "@/content/ontology";

/**
 * Sticky in-page sub-nav — four anchors that jump to the page's major sections.
 * Sits directly under the shared site header.
 */
export function SubNav() {
  return (
    <nav
      aria-label="Ontology sections"
      className="sticky top-[var(--nav-height)] z-30 border-b border-ink/10 bg-canvas/85 backdrop-blur-md"
    >
      <Container>
        <ul className="flex flex-wrap gap-x-2xl gap-y-xs py-m text-body-sm text-ink-light">
          {subnav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}

export default SubNav;
