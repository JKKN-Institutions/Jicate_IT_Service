"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/ui";
import { popularSearches, runSearch } from "@/content/search";

/**
 * Site-wide search — a dark full-page search view (mirrors the reference
 * /search design): a wide input, a row of popular searches, then a
 * "Displaying N results" count beside a list of matching pages. Client-side
 * substring search over the site's own pages.
 */
export default function SearchPage() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => runSearch(query), [query]);
  const hasQuery = query.trim().length > 0;

  return (
    <main className="min-h-screen flex-1 bg-near-black text-offwhite">
      <Container className="pt-[130px] pb-3xl">
        {/* Search input */}
        <div className="relative flex items-center border border-offwhite/30 px-l py-m transition-colors focus-within:border-offwhite">
          <input
            type="search"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Start typing to search"
            aria-label="Search"
            className="w-full bg-transparent text-[clamp(1.125rem,1rem+0.5vw,1.333rem)] text-offwhite outline-none placeholder:text-offwhite/45 [&::-webkit-search-cancel-button]:appearance-none"
          />
          {hasQuery && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="ml-m shrink-0 whitespace-nowrap font-mono text-body-sm text-offwhite/70 transition-colors hover:text-offwhite"
            >
              ✕ Clear
            </button>
          )}
        </div>

        {/* Popular searches */}
        <div className="mt-l flex flex-wrap items-center gap-x-2xl gap-y-s">
          <span className="font-mono text-caption uppercase tracking-[0.08em] text-offwhite/50">
            Popular Searches
          </span>
          {popularSearches.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => setQuery(p.query)}
              className="text-[clamp(1.125rem,1rem+0.5vw,1.333rem)] text-offwhite underline decoration-offwhite/40 underline-offset-[6px] transition-colors hover:decoration-offwhite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Results */}
        {hasQuery && (
          <div className="mt-3xl grid grid-cols-1 gap-x-2xl gap-y-2xl desktop:grid-cols-12">
            <h1 className="font-display text-[clamp(2.5rem,1rem+5vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.02em] desktop:col-span-5">
              Displaying {results.length} result{results.length === 1 ? "" : "s"}
            </h1>

            <ul className="flex flex-col gap-2xl desktop:col-span-6 desktop:col-start-7">
              {results.map((item) => (
                <li key={item.href + item.title}>
                  <a
                    href={item.href}
                    className="group flex flex-col gap-s focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <span className="inline-flex items-center gap-s text-[clamp(1.25rem,1rem+0.8vw,1.556rem)] leading-[1.2] text-offwhite">
                      {item.title}
                      <span
                        aria-hidden
                        className="text-offwhite/60 transition-transform duration-[var(--duration-micro)] group-hover:translate-x-[0.15em] group-hover:-translate-y-[0.15em]"
                      >
                        ↗
                      </span>
                    </span>
                    <span className="text-[clamp(1rem,1rem+0.2vw,1.125rem)] leading-[1.45] text-offwhite/55">
                      {item.description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </main>
  );
}
