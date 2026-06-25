import { Container } from "@/components/ui";

/**
 * Full-width neutral divider band (reference "Page Break Blank Image"). The
 * reference ships a blank spacer image here; this renders the equivalent quiet
 * surface band so the rhythm between sections matches.
 */
export function PageBreak() {
  return (
    <div aria-hidden className="py-[20px]">
      <Container>
        <div className="h-[1px] w-full bg-ink/12" />
      </Container>
    </div>
  );
}

export default PageBreak;
