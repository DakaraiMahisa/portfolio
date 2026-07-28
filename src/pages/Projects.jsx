import { useState } from "react";
import { PROJECTS, getFeaturedProject, STATUS_CONFIG } from "../data/projects";

// ── VIDEO MODAL ────
function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  return match
    ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`
    : null;
}

function VideoModal({ videoUrl, title, onClose }) {
  const embedUrl = getYouTubeEmbedUrl(videoUrl);
  if (!embedUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-slate-950 rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
          aria-label="Close video"
        >
          ✕
        </button>

        {/* Video title */}
        <div className="px-6 pt-5 pb-3">
          <p className="text-xs uppercase tracking-widest font-bold text-indigo-400 mb-1">
            Demo Video
          </p>
          <h3 className="text-white font-black text-lg">{title}</h3>
        </div>

        {/* YouTube embed */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={embedUrl}
            title={`${title} demo`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG["planned"];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${config.classes}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {config.label}
    </span>
  );
}

function ProjectImage({ imageUrl, title, className = "" }) {
  const [errored, setErrored] = useState(false);

  if (!imageUrl || errored) {
    return (
      <div
        className={`flex items-center justify-center bg-linear-to-br from-indigo-500/10 to-amber-500/10 ${className}`}
      >
        <div className="text-center p-8">
          <div className="text-5xl mb-3">🖥️</div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            {title}
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={`${title} screenshot`}
      className={`w-full h-full object-contain object-between ${className}`}
      onError={() => setErrored(true)}
    />
  );
}

// ── FEATURED PROJECT CARD (big card at top) ──────────────────
function FeaturedCard({ project, onWatchVideo }) {
  return (
    <article className="group relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
      {/* Featured label */}
      <div className="absolute top-6 left-6 z-10">
        <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
          ★ Featured
        </span>
      </div>

      <div className="grid lg:grid-cols-2">
        {/* Left — image */}
        <div className="relative h-64 lg:h-auto min-h-70 overflow-hidden">
          <ProjectImage
            imageUrl={project.imageUrl}
            title={project.title}
            className="w-full h-full group-hover:scale-105 transition-transform duration-700"
          />

          {/* Video play button overlay */}
          {project.videoUrl && (
            <button
              onClick={() => onWatchVideo(project)}
              className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Watch demo video"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 shadow-xl hover:scale-110 transition-transform">
                <span className="text-2xl ml-1">▶</span>
              </div>
            </button>
          )}

          {/* No video placeholder */}
          {!project.videoUrl && (
            <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
              📹 Demo Coming Soon
            </div>
          )}
        </div>

        {/* Right — content */}
        <div className="p-8 lg:p-10 flex flex-col justify-between">
          <div>
            {/* Number + status */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-5xl font-black text-slate-100 dark:text-slate-800 leading-none">
                {project.num}
              </span>
              <StatusBadge status={project.status} />
            </div>

            {/* Title + tagline */}
            <h2 className="text-3xl font-black tracking-tighter mb-2 group-hover:text-indigo-500 transition-colors">
              {project.title}
            </h2>
            <p className="text-sm font-semibold text-indigo-500 mb-4">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-6">
              {project.highlights.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                >
                  <span className="text-indigo-500 mt-0.5 shrink-0">→</span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              <span>🐙</span> GitHub
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-200"
              >
                <span>🚀</span> Live Demo
              </a>
            )}

            {project.videoUrl ? (
              <button
                onClick={() => onWatchVideo(project)}
                className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-slate-900 rounded-xl font-bold text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-200"
              >
                <span>▶</span> Watch Demo
              </button>
            ) : (
              <span className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-sm text-slate-400 cursor-not-allowed">
                <span>📹</span> Demo Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

// ── REGULAR PROJECT CARD ─────────────────────────────────────
function ProjectCard({ project, onWatchVideo }) {
  return (
    <article className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <ProjectImage
          imageUrl={project.imageUrl}
          title={project.title}
          className="w-full h-full group-hover:scale-105 transition-transform duration-700"
        />

        {/* Video overlay */}
        {project.videoUrl && (
          <button
            onClick={() => onWatchVideo(project)}
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Watch demo"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/90 shadow-xl hover:scale-110 transition-transform">
              <span className="text-lg ml-0.5">▶</span>
            </div>
          </button>
        )}

        {/* Status badge on image */}
        <div className="absolute top-3 right-3">
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between mb-3">
          <span className="text-3xl font-black text-slate-100 dark:text-slate-800 leading-none">
            {project.num}
          </span>
          <span className="text-xs font-bold text-slate-400 dark:text-slate-600">
            {project.year}
          </span>
        </div>

        <h3 className="text-xl font-black mb-1 group-hover:text-indigo-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-semibold text-indigo-500 mb-3">
          {project.tagline}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2 flex-wrap mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-xs hover:-translate-y-0.5 transition-all"
          >
            🐙 GitHub
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold text-xs hover:-translate-y-0.5 transition-all"
            >
              🚀 Live
            </a>
          )}

          {project.videoUrl ? (
            <button
              onClick={() => onWatchVideo(project)}
              className="flex items-center gap-1.5 px-4 py-2 bg-amber-500 text-slate-900 rounded-xl font-bold text-xs hover:-translate-y-0.5 transition-all"
            >
              ▶ Demo
            </button>
          ) : (
            <span className="flex items-center gap-1.5 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-xs text-slate-400 cursor-not-allowed">
              📹 Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

// ── MAIN PROJECTS PAGE ────────────
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeVideo, setActiveVideo] = useState(null);

  const featured = getFeaturedProject();

  const otherProjects = PROJECTS.filter((p) => !p.featured);
  const filtered =
    activeCategory === "all"
      ? otherProjects
      : otherProjects.filter((p) => p.category === activeCategory);

  const usedCategories = ["all", ...new Set(PROJECTS.map((p) => p.category))];

  const categoryLabels = {
    all: "All Projects",
    backend: "Backend",
    devops: "DevOps",
    fullstack: "Full Stack",
    tools: "Tools",
  };

  return (
    <main className="pt-20 min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* Video modal */}
      {activeVideo && (
        <VideoModal
          videoUrl={activeVideo.videoUrl}
          title={activeVideo.title}
          onClose={() => setActiveVideo(null)}
        />
      )}

      {/* ── PAGE HERO ──────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 py-20 max-w-7xl mx-auto">
        <div className="absolute -top-20 -right-20 w-100 h-100 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-500 mb-4">
            — My Work
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-6">
            Things I've{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-amber-500">
              built.
            </span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
            Real projects built with real technologies. Each one taught me
            something new about backend systems, DevOps and writing software
            that works in production — not just on my machine.
          </p>
        </div>
      </section>

      {/* ── FEATURED PROJECT ───────────────────────────── */}
      {featured && (
        <section className="px-6 pb-16 max-w-7xl mx-auto">
          <FeaturedCard project={featured} onWatchVideo={setActiveVideo} />
        </section>
      )}

      {/* ── FILTER PILLS ───────────────────────────────── */}
      {otherProjects.length > 0 && (
        <section className="px-6 pb-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h2 className="text-2xl font-black tracking-tighter">
              More Projects
            </h2>
            <div className="flex flex-wrap gap-2">
              {usedCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                      : "border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-indigo-400 hover:text-indigo-500"
                  }`}
                >
                  {categoryLabels[cat] || cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards grid */}
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onWatchVideo={setActiveVideo}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-400">
              <p className="text-4xl mb-4">🔨</p>
              <p className="font-bold text-lg mb-2">
                More projects coming soon
              </p>
              <p className="text-sm">Currently building in this category.</p>
            </div>
          )}
        </section>
      )}

      {/* ── BOTTOM CTA ───────────── */}
      <section className="px-6 py-24 text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 mb-4">
          — Always Building
        </p>
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
          More projects on the{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-amber-500">
            way.
          </span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          I'm always working on something new. Follow my GitHub to see what I'm
          building in real time.
        </p>
        <a
          href="https://github.com/DakaraiMahisa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
        >
          🐙 Follow on GitHub
        </a>
      </section>
    </main>
  );
}
