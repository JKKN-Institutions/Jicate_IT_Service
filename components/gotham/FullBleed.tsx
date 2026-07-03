import { Container } from "@/components/ui";
import { bandLabel, systemLabel } from "@/content/gotham";

import { LoopVideo } from "./media";
import { BandLabels, DisplayTitle, MicroLabel, DARK } from "./parts";

/**
 * FullBleed — one of the four scroll sections: a dark stage with a skewed
 * (clip-path) looping video behind a 120px title, framed by the
 * SOFTWARE · { GOTHAM } · GET STARTED label row. DARK.
 */
export function FullBleed({
  title,
  video,
  clip,
  index,
}: {
  title: string;
  video: string;
  clip: string;
  index: number;
}) {
  return (
    <section
      aria-label={title}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden py-[40px] text-white"
      style={{ backgroundColor: DARK }}
    >
      {/* Skewed video reveal */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[70%] w-full" style={{ clipPath: clip }}>
          <LoopVideo src={video} className="h-full w-full object-cover opacity-90" />
        </div>
      </div>

      {/* Top label row */}
      <Container className="relative z-10">
        <BandLabels items={bandLabel} />
      </Container>

      {/* Centered title */}
      <Container className="relative z-10">
        <DisplayTitle as="h2" size="bleed" className="max-w-[14ch] text-white">
          {title}
        </DisplayTitle>
      </Container>

      {/* Bottom label */}
      <Container className="relative z-10">
        <div className="flex items-end justify-between">
          <MicroLabel>{String(index).padStart(2, "0")}</MicroLabel>
          <MicroLabel className="text-right">{systemLabel}</MicroLabel>
        </div>
      </Container>
    </section>
  );
}

export default FullBleed;
