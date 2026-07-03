import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { posts } from "@/content/jicate-explained";

/**
 * The "Jicate Explained" issue list (light). Each post is a row with a top
 * hairline: a large title, then a two-column split of the cover image (left)
 * and a lead description with a "Read …" drill-in link (right).
 */
export function PostList() {
  return (
    <section className="bg-canvas pb-[80px] desktop:pb-[120px]">
      <Container>
        {posts.map((post) => (
          <Reveal as="article" key={post.n} className="border-t border-ink/15 py-[56px] desktop:py-[72px]">
            <h2 className="max-w-[18ch] font-display text-[clamp(1.9rem,3.9vw,3.125rem)]/[1.0] font-normal tracking-[-0.02em] text-ink">
              {post.title}
            </h2>

            <div className="mt-[48px] grid gap-l desktop:grid-cols-2 desktop:gap-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.imageAlt}
                className="h-auto w-full object-cover"
                loading="lazy"
              />

              <div className="flex flex-col justify-between gap-2xl">
                <p className="max-w-[22ch] font-display text-[clamp(1.6rem,2.65vw,2.125rem)]/[1.176] font-normal tracking-[-0.01em] text-ink">
                  {post.desc}
                </p>

                <a
                  href={post.href}
                  className="group inline-flex items-start justify-between gap-l self-start border-b border-ink pb-[8px] text-[18px]/[25px] text-ink transition-colors duration-200 hover:text-ink-light desktop:max-w-[280px]"
                >
                  <span>{post.read}</span>
                  <span
                    aria-hidden
                    className="shrink-0 transition-transform duration-200 group-hover:translate-x-[0.22em] motion-reduce:transform-none"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

export default PostList;
