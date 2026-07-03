import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { capabilities } from "@/content/gotham";

import { LoopVideo } from "./media";
import { DisplayTitle, LIGHT } from "./parts";
import { cn } from "@/lib/utils";

/**
 * Capabilities — the 0.1 / 0.2 / 0.3 stepper. Each item is a row: a stepper
 * indicator + 72px title + body + Overview link on the left, and a looping
 * card video on the right. LIGHT (#f9f9f9).
 */
export function Capabilities() {
  return (
    <Section
      id="capabilities"
      className="!py-[clamp(60px,7vw,100px)] text-ink"
      style={{ backgroundColor: LIGHT }}
      aria-label="Capabilities"
    >
      <Container>
        <div className="flex flex-col gap-[clamp(80px,10vw,140px)]">
          {capabilities.items.map((item) => (
            <Reveal
              key={item.step}
              className="grid grid-cols-1 items-center gap-[40px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]"
            >
              {/* Left: stepper + title + body + link */}
              <div className="flex flex-col gap-[28px]">
                <div className="flex items-center gap-[20px] text-[20px]">
                  {capabilities.steps.map((s) => (
                    <span
                      key={s}
                      className={cn(s === item.step ? "text-ink" : "text-ink/30")}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <DisplayTitle as="h3" size="card" className="max-w-[12ch] text-ink">
                  {item.title}
                </DisplayTitle>

                <p className="max-w-[46ch] text-[18px] leading-[1.45] text-ink/80">{item.body}</p>

                <a
                  href={item.link.href}
                  className="text-[12px] uppercase tracking-[0.08em] text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
                >
                  {item.link.label}
                </a>
              </div>

              {/* Right: card video */}
              <div className="aspect-[717/404] w-full overflow-hidden rounded-[2px] bg-ink/[0.06]">
                <LoopVideo src={item.video} className="h-full w-full object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Capabilities;
