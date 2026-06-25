import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import type { FeatureCard, MediaStep } from "@/content/aip-developers";

/** Looping, muted, inline video frame used throughout the page. */
export function MediaFrame({ src, className }: { src: string; className?: string }) {
  return (
    <video
      className={cn("w-full rounded-[6px] border border-offwhite/10", className)}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

/**
 * Grid of feature cards. `variant="mono"` renders ALL-CAPS mono eyebrows (the
 * "INCREDIBLE SPEED TO VALUE" style); `variant="title"` renders sentence-case
 * display headings (the "The IDE for LLMs" style).
 */
export function FeatureCards({
  cards,
  variant = "mono",
  cols = 3,
}: {
  cards: FeatureCard[];
  variant?: "mono" | "title";
  cols?: 2 | 3 | 4;
}) {
  const span =
    cols === 4
      ? "tablet:col-span-6 desktop:col-span-3"
      : cols === 2
        ? "tablet:col-span-6"
        : "tablet:col-span-6 desktop:col-span-4";

  return (
    <div className="grid-12 gap-y-xl">
      {cards.map((c, i) => (
        <Reveal
          index={i}
          key={c.title}
          className={cn("col-span-12 flex flex-col gap-xs", span)}
        >
          {variant === "mono" ? (
            <h3 className="font-mono text-caption uppercase tracking-[0.05em] text-offwhite">
              {c.title}
            </h3>
          ) : (
            <h3 className="font-display text-headline font-normal leading-[1.1] text-offwhite">
              {c.title}
            </h3>
          )}
          <p className="text-body-sm text-offwhite/60">{c.body}</p>
        </Reveal>
      ))}
    </div>
  );
}

/** A numbered "scrollytelling" step: index ticker + caption beside a clip. */
export function StepRow({ step }: { step: MediaStep }) {
  return (
    <Reveal className="grid-12 items-center gap-y-l border-t border-offwhite/10 py-2xl">
      <div className="col-span-12 flex flex-col gap-s desktop:col-span-4">
        <div className="flex gap-xs font-mono text-caption tracking-[0.05em] text-offwhite/35">
          {["01", "02", "03"].map((n) => (
            <span key={n} className={n === step.index ? "text-offwhite" : undefined}>
              {n === step.index ? `[${n}]` : n}
            </span>
          ))}
        </div>
        <h3 className="font-display text-headline font-normal leading-[1.12] text-offwhite">
          {step.title}
        </h3>
        <p className="text-body-sm text-offwhite/60">{step.body}</p>
      </div>
      <div className="col-span-12 desktop:col-span-7 desktop:col-start-6">
        {step.video ? <MediaFrame src={step.video} /> : null}
      </div>
    </Reveal>
  );
}
