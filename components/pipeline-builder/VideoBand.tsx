import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { videoBand } from "@/content/pipeline-builder";

/**
 * Full-width media band under the hero (reference parity). Renders the Pipeline
 * Builder stage diagram as a single full-width image. The earlier video-card
 * chrome (brand breadcrumb, product tag, speaker caption, play affordance) was
 * removed per request so only the image shows.
 */
export function VideoBand() {
  return (
    <section aria-label="Product walkthrough" className="pb-[80px]">
      <Container>
        <Reveal>
          <div className="w-full overflow-hidden rounded-[4px] bg-near-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={videoBand.image}
              alt={videoBand.alt}
              className="block w-full"
              draggable={false}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default VideoBand;
