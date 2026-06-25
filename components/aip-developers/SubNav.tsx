import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";
import { subNav } from "@/content/aip-developers";

/**
 * Sticky in-page sub-navigation that rides under the site header on the dark
 * hero. Anchor links jump to each major section; the final "View Docs ↗" is an
 * outbound-style link. Server Component — purely anchors, no state.
 */
export function SubNav() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-nav z-30 bg-near-black/90 backdrop-blur-sm"
    >
      <Container>
        <ul className="flex flex-wrap items-center gap-x-l gap-y-xs py-s">
          {subNav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={cn(
                  "text-body-sm text-offwhite/60 transition-colors duration-200 hover:text-offwhite",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite",
                )}
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
