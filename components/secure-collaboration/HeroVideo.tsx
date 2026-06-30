import { hero } from "@/content/secure-collaboration";

import { PlayButton } from "./parts";

const mono = "font-mono uppercase tracking-[0.08em] text-offwhite/55";

/**
 * Hero video poster — rebuilt in CSS (no poster asset). A dark frame with mono
 * overlay chrome (slate left, brand/kicker center, section marker right, a
 * copyright block, and a "Play Video" control bottom-left).
 */
export function HeroVideo() {
  const p = hero.poster;
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[radial-gradient(ellipse_at_30%_40%,#33373c_0%,#1b1e21_60%,#141618_100%)] text-offwhite tablet:aspect-[5/3]">
      {/* Top chrome */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-l p-l text-[0.5556rem] tablet:p-xl">
        <span className={mono}>{p.topLeft}</span>
        <div className={`hidden max-w-[26ch] text-center leading-[1.5] tablet:block ${mono}`}>
          <span className="text-offwhite/80">{p.brand}</span> {p.kicker}
          <br />
          {p.sub}
        </div>
        <span className={mono}>{p.topRight}</span>
      </div>

      {/* Right copyright block */}
      <div className="absolute right-[5%] top-1/2 hidden max-w-[22ch] -translate-y-1/2 flex-col gap-m desktop:flex">
        <span aria-hidden className="inline-flex size-[34px] items-center justify-center rounded-full border border-offwhite/40 text-offwhite/70">
          ◍
        </span>
        <p className={`text-[0.5rem] leading-[1.6] ${mono}`}>{p.copyright}</p>
        <span className={`text-[0.5556rem] ${mono}`}>{p.site}</span>
      </div>

      {/* Play control */}
      <div className="absolute bottom-0 left-0 flex items-center gap-m p-l tablet:p-xl">
        <PlayButton />
        <span aria-hidden className="h-px w-[60px] bg-offwhite/40" />
        <span className="text-body text-offwhite">{p.play}</span>
      </div>
    </div>
  );
}

export default HeroVideo;
