import { useState } from "react";
import { BLOG_POSTS, BLOG_FILTERS } from "../data/blog";

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPosts =
    activeFilter === "all"
      ? BLOG_POSTS.posts
      : BLOG_POSTS.posts.filter((p) => p.category === activeFilter);

  return (
    <main className="pt-24 min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-16 max-w-6xl mx-auto">
        <div className="absolute -top-20 right-0 w-100 h-100 bg-indigo-500/10 blur-[100px] rounded-full" />

        <p className="text-xs uppercase tracking-widest text-indigo-500 mb-4">
          — Dev Notes
        </p>

        <h1 className="text-4xl md:text-6xl font-black mb-6">
          Thoughts on <em className="not-italic text-amber-500">backend</em>
        </h1>

        <p className="text-slate-500 dark:text-slate-400 max-w-xl mb-6">
          Writing about Java, distributed systems, database design, and the
          lessons learned in production.
        </p>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-2">
          {BLOG_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-[10px] px-4 py-1 rounded-full border uppercase tracking-widest font-mono transition
                ${
                  activeFilter === f
                    ? "bg-indigo-500/10 border-indigo-400 text-indigo-500"
                    : "border-slate-300 dark:border-slate-700 text-slate-500 hover:border-indigo-400"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        {/* FEATURED */}
        <div className="mb-10">
          <div className="p-8 rounded-2xl border border-indigo-300 dark:border-indigo-500/30 bg-linear-to-br from-white to-indigo-50 dark:from-slate-900 dark:to-slate-800">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 uppercase">
                Featured
              </span>

              <span className="text-xs text-slate-500 ml-auto">
                {BLOG_POSTS.featured.readTime} · {BLOG_POSTS.featured.date}
              </span>
            </div>

            <h2 className="text-2xl font-bold mb-3">
              {BLOG_POSTS.featured.title}
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mb-4 max-w-2xl">
              {BLOG_POSTS.featured.excerpt}
            </p>

            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex gap-2 flex-wrap">
                {BLOG_POSTS.featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-1 rounded bg-slate-100 dark:bg-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a className="text-xs uppercase text-indigo-500 hover:text-amber-500">
                Read →
              </a>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 hover:-translate-y-1 hover:border-indigo-400 transition"
            >
              <div className="flex items-center mb-3">
                <span className="text-[10px] uppercase text-indigo-500">
                  {post.tag}
                </span>
                <span className="ml-auto text-xs text-slate-400">
                  {post.meta}
                </span>
              </div>

              <h3 className="font-bold mb-2">{post.title}</h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                {post.excerpt}
              </p>

              <a className="text-xs uppercase text-indigo-500 hover:text-amber-500">
                Read →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
