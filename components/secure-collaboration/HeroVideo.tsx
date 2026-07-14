import { hero } from "@/content/secure-collaboration";

/**
 * Hero media band — a full-width dark network-graph image in the same aspect
 * frame the CSS video poster used (video box removed per request).
 */
export function HeroVideo() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#141618] tablet:aspect-[5/3]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={hero.image}
        alt={hero.imageAlt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

export default HeroVideo;
