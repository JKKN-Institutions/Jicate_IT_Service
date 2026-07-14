import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { spotlightBand } from "@/content/marketplace";

/**
 * Full-width media band under the hero (reference parity). Renders a single
 * full-width image; the earlier "Play Video" affordance and gradient placeholder
 * were removed per request so only the image shows.
 */
export function SpotlightVideo() {
  return (
    <section aria-label="Product spotlight" className="pb-[100px]">
      <Container>
        <Reveal>
          <div className="relative isolate w-full overflow-hidden rounded-[2px] border border-ink/10 bg-surface-light">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={spotlightBand.image}
              alt={spotlightBand.alt}
              className="block w-full"
              draggable={false}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default SpotlightVideo;
