import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { statementIntro } from "@/content/ai-ml";

/**
 * Big centered statement band (light).
 *
 * An oversized two-line statement on the canvas, centered, in the display face
 * with tight tracking — the editorial beat between the hero and the dark
 * product band. Reveals on scroll. Placeholder copy only.
 */
export function StatementIntro() {
  return (
    <section className="bg-canvas py-[120px] desktop:py-[150px]">
      <Container>
        <Reveal>
          <h2 className="mx-auto max-w-[14ch] whitespace-pre-line text-center font-display text-[clamp(2.75rem,7vw,5.3333rem)] font-normal leading-[1] tracking-[-0.04em] text-ink">
            {statementIntro.text}
          </h2>
        </Reveal>
      </Container>
    </section>
  );
}

export default StatementIntro;
