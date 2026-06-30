import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { videoFeatures } from "@/content/fedstart";

import { MediaPlaceholder } from "./parts";

/**
 * Video features — two stacked talks, each a 2-column band: a 50px heading and
 * caption on the left, a video-thumbnail placeholder on the right.
 */
export function VideoFeatures() {
  return (
    <Section className="bg-canvas" aria-label="Video features">
      <Container>
        <div className="flex flex-col gap-3xl">
          {videoFeatures.map((v, i) => (
            <div key={v.title} className="grid grid-cols-1 items-center gap-x-2xl gap-y-l desktop:grid-cols-2">
              <Reveal className="flex flex-col gap-l">
                <h2 className="font-display text-[clamp(1.75rem,1rem+2vw,2.7778rem)] font-normal leading-[1.08] tracking-[-0.02em] text-ink">
                  {v.title}
                </h2>
                <p className="max-w-[44ch] text-body-lg leading-[1.4] text-ink-light">{v.body}</p>
              </Reveal>
              <Reveal index={1} className={i % 2 === 1 ? "desktop:order-first" : undefined}>
                <MediaPlaceholder label={v.imageAlt} play className="aspect-video" />
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default VideoFeatures;
