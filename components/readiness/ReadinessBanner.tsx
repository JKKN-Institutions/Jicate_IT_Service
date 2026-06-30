import type { ReadyBanner } from "@/content/readiness";

import { PlayButton } from "./parts";

/**
 * A dark "video poster" banner, rebuilt in CSS (no poster asset). A wordmark and
 * marker sit at the top, a big two-tone title in the middle, and a copyright note
 * plus a dotted spec grid and a play button along the bottom.
 */
export function ReadinessBanner({ banner }: { banner: ReadyBanner }) {
  return (
    <div className="relative w-full overflow-hidden bg-[#191919] px-l py-xl text-offwhite tablet:px-2xl desktop:aspect-[16/9] desktop:px-3xl">
      <div className="flex h-full flex-col justify-between gap-2xl">
        {/* Top: wordmark + marker */}
        <div className="flex items-start justify-between gap-l">
          <span className="font-display text-[1.25rem] font-semibold tracking-[-0.01em]">Jicate</span>
          <span className="max-w-[20ch] text-right font-mono text-[0.6111rem] uppercase leading-[1.3] tracking-[0.08em] text-offwhite/55">
            ◌ {banner.marker}
          </span>
        </div>

        {/* Middle: two-tone title */}
        <div className="flex flex-1 items-center">
          <h3 className="font-display text-[clamp(2.5rem,1rem+6vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-[0.02em]">
            <span className="block text-offwhite">{banner.word1}</span>
            <span className="block" style={{ color: banner.color }}>
              {banner.word2}
            </span>
          </h3>
        </div>

        {/* Bottom: copyright + spec grid + play */}
        <div className="flex flex-col gap-l desktop:flex-row desktop:items-end desktop:justify-between">
          <div className="flex flex-col gap-s">
            <span aria-hidden className="text-[1rem] text-offwhite/70">◍</span>
            <p className="font-mono text-[0.6111rem] leading-[1.5] tracking-[0.04em] text-offwhite/45">
              © Jicate Solutions. Any data contained herein is notional.
              <br />
              Actual results and experiences may vary.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-2xl gap-y-xs rounded-[2px] border border-offwhite/15 bg-[length:18px_18px] p-l font-mono text-[0.6111rem] uppercase leading-[1.5] tracking-[0.06em] text-offwhite/80 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]">
            <div className="flex flex-col">
              {banner.labels.map((l, i) => (
                <span key={l} className={i === 0 ? "text-offwhite" : undefined}>
                  {i === 0 ? "✓ " : ""}
                  {l}
                </span>
              ))}
            </div>
            <div className="flex flex-col">
              {banner.steps.map((s, i) => (
                <span key={s}>
                  <span className="mr-s inline-flex size-[14px] items-center justify-center rounded-full bg-offwhite text-[0.5rem] text-[#191919]">
                    {i + 1}
                  </span>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Play button — bottom-left */}
        <PlayButton className="self-start" />
      </div>
    </div>
  );
}

export default ReadinessBanner;
