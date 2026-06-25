import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";
import { subNav } from "@/content/edge-ai";

/**
 * Sticky product sub-nav. Brand link, section links, right-aligned CTA. Light
 * band that rides under the site header. Server Component.
 */
export function SubNav() {
  return (
    <nav
      aria-label="Foundry"
      className="sticky top-nav z-30 border-b border-ink/10 bg-canvas/90 backdrop-blur-sm"
    >
      <Container>
        <div className="flex flex-wrap items-center gap-x-l gap-y-xs py-s">
          <a
            href={subNav.brand.href}
            className="text-body-sm font-medium text-ink transition-colors hover:text-ink-light"
          >
            {subNav.brand.label}
          </a>
          <ul className="flex flex-wrap items-center gap-x-l gap-y-xs">
            {subNav.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    "text-body-sm text-ink-light transition-colors duration-200 hover:text-ink",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={subNav.cta.href}
            className="ml-auto text-body-sm font-medium text-ink transition-colors hover:text-ink-light"
          >
            {subNav.cta.label}
          </a>
        </div>
      </Container>
    </nav>
  );
}

export default SubNav;
