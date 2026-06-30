import { LoopingVideo } from "@/components/ai-ml/LoopingVideo";
import { hero } from "@/content/defense";

/**
 * Hero — a full-bleed, full-viewport looping video on the dark surface
 * (reference parity). No text overlay; the video carries the brand animation.
 */
export function Hero() {
  return (
    <section aria-label="Jicate Defense" className="relative w-full">
      <div className="h-[clamp(420px,72vh,820px)] w-full overflow-hidden">
        <LoopingVideo src={hero.video} />
      </div>
    </section>
  );
}

export default Hero;
