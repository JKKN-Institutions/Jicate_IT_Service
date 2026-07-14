import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { videoBand } from "@/content/data-integration";

/**
 * Full-width media card (reference parity). Renders the Data Integration Journey
 * title image inside the same rounded 16:7 card frame. The earlier video-poster
 * chrome (play affordance, speaker caption, product tags) was removed per request
 * so only the image shows.
 */
export function VideoBand() {
  return (
    <section aria-label="Data Integration Journey" className="pb-[60px]">
      <Container>
        <Reveal>
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-[4px] bg-near-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={videoBand.image}
              alt={videoBand.alt}
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default VideoBand;
