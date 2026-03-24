import { Link } from "react-router-dom";

// 🔧 UPDATE: Change these to your real project previews
const FEATURED_PROJECTS = [
  {
    id: 1,
    num: "01",
    title: "Task Reminder App",
    description:
      "A Spring Boot application that schedules and delivers smart task reminders via email and push notifications. Built with PostgreSQL and Redis for persistence and caching.",
    tags: ["Spring Boot", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/yourusername/task-reminder",
    color: "indigo",
  },
  {
    id: 2,
    num: "02",
    title: "DevOps Pilot",
    description:
      "A CI/CD pipeline automation toolkit that provisions infrastructure, runs tests, and deploys Spring Boot microservices to AWS using GitHub Actions and Docker.",
    tags: ["Docker", "GitHub Actions", "AWS", "Spring Boot"],
    github: "https://github.com/yourusername/devops-pilot",
    color: "amber",
  },
];

// 🔧 UPDATE: Change numbers to reflect your real experience
const STATS = [
  { value: "2+", label: "Years Learning" },
  { value: "2+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
  { value: "100%", label: "Committed" },
];

// Tech tags shown in hero
const TECH_TAGS = [
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Docker",
  "REST APIs",
];

export default function Home() {
  return (
    <main className="pt-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-x-hidden">
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center px-6 max-w-7xl mx-auto">
        {/* Background glow orbs */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-indigo-500/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-[350px] h-[350px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
          {/* LEFT — Text content */}
          <div>
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[11px] uppercase tracking-widest font-bold text-emerald-600 dark:text-emerald-400">
                Open to opportunities
              </span>
            </div>

            {/* Name & headline */}
            {/* 🔧 UPDATE: This is your name — change if needed */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-6">
              Dakarai
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500">
                Mahisa.
              </span>
            </h1>

            {/* Role */}
            <p className="text-lg md:text-xl font-semibold text-slate-600 dark:text-slate-300 mb-4">
              Backend Developer &nbsp;·&nbsp; ECE Student &nbsp;·&nbsp; Future
              Full-Stack Engineer
            </p>

            {/* Bio */}
            {/* 🔧 UPDATE: Tweak this bio to sound like you */}
            <p className="text-base text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed mb-8">
              Pursuing Electronics & Communication Engineering at{" "}
              <span className="text-slate-700 dark:text-slate-300 font-medium">
                KPR Institute of Engineering and Technology
              </span>
              , while building a serious foundation in Java, Spring Boot and
              cloud-native backend systems. Driven by one goal — becoming a
              world-class full-stack engineer.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {TECH_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects
              </Link>
              <Link
                to="/quiz"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                ⚡ Test My Knowledge
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* RIGHT — Profile photo */}
          <div className="flex items-center justify-center relative">
            {/* Decorative ring */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-dashed border-indigo-500/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-amber-500/10" />

            {/* Photo frame */}
            <div className="relative z-10 w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl shadow-indigo-500/20 ring-4 ring-indigo-500/30">
              {/*
                🔧 UPDATE: Add your photo as public/dakarai.jpg
                The src="/dakarai.jpg" will work because Vite serves
                everything in /public at the root URL.
              */}
              <img
                src="/dakarai.jpg"
                alt="Dakarai Mahisa"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback avatar if photo not found
                  e.currentTarget.src =
                    "https://ui-avatars.com/api/?name=Dakarai+Mahisa&background=6366f1&color=fff&size=288&font-size=0.35&bold=true";
                }}
              />
            </div>

            {/* Floating card — current focus */}
            <div className="absolute -bottom-4 -right-4 md:right-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 shadow-xl z-20">
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">
                Current Focus
              </p>
              <p className="font-bold text-indigo-500 text-sm">
                Spring Boot + DevOps
              </p>
            </div>

            {/* Floating card — college */}
            <div className="absolute -top-4 -left-4 md:left-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 shadow-xl z-20 max-w-[160px]">
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">
                Studying at
              </p>
              <p className="font-bold text-slate-700 dark:text-slate-200 text-xs leading-snug">
                KPR Institute of Engineering
              </p>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-10 bg-gradient-to-b from-indigo-500 to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Scroll
          </span>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────── */}
      <section className="px-6 py-8 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white dark:bg-slate-950 px-6 py-8 text-center"
            >
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-amber-500 leading-none mb-2">
                {value}
              </p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SNAPSHOT ────────────────────────────── */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-500 mb-4">
              — About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] mb-6">
              Engineer by study.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-amber-500">
                Developer by passion.
              </span>
            </h2>
            {/* 🔧 UPDATE: Edit these paragraphs to tell your real story */}
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              I'm an ECE student who discovered a deep passion for software
              engineering — specifically the backend systems that make
              applications fast, reliable and secure. While my degree covers
              circuits and signals, my evenings are spent writing Java,
              designing APIs and learning how real-world systems are built.
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              My north star is becoming a full-stack developer, but I'm building
              the right foundation first — solid backend skills, clean code
              habits, and an understanding of DevOps that most developers skip.
            </p>
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-500 hover:text-indigo-400 transition-colors"
            >
              See my full tech stack
              <span className="text-base">→</span>
            </Link>
          </div>

          {/* Skill highlights */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "☕",
                title: "Java 21",
                sub: "Core language",
                bg: "bg-orange-500/10 border-orange-500/20",
              },
              {
                icon: "🍃",
                title: "Spring Boot 3",
                sub: "Web framework",
                bg: "bg-green-500/10 border-green-500/20",
              },
              {
                icon: "🐘",
                title: "PostgreSQL",
                sub: "Primary database",
                bg: "bg-blue-500/10 border-blue-500/20",
              },
              {
                icon: "🐳",
                title: "Docker",
                sub: "Containerisation",
                bg: "bg-sky-500/10 border-sky-500/20",
              },
              {
                icon: "🔐",
                title: "Spring Security",
                sub: "Auth & JWT",
                bg: "bg-red-500/10 border-red-500/20",
              },
              {
                icon: "🍃",
                title: "MongoDB",
                sub: "Document store",
                bg: "bg-emerald-500/10 border-emerald-500/20",
              },
            ].map(({ icon, title, sub, bg }) => (
              <div
                key={title}
                className={`flex items-center gap-3 p-4 rounded-2xl border ${bg} transition-transform hover:-translate-y-1 duration-200`}
              >
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="font-bold text-sm text-slate-800 dark:text-slate-100">
                    {title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ─────────────────────────── */}
      <section className="px-6 py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-500 mb-3">
                — Featured Work
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                Projects I've{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-amber-500">
                  built.
                </span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-sm font-bold text-indigo-500 hover:text-indigo-400 transition-colors"
            >
              All Projects →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {FEATURED_PROJECTS.map((project) => (
              <article
                key={project.id}
                className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-black text-slate-100 dark:text-slate-800 leading-none">
                    {project.num}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-indigo-500 text-xl transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    ↗
                  </a>
                </div>
                <h3 className="text-xl font-black mb-3 group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUIZ CTA ──────────────────────────────────── */}
      <section className="px-6 py-24 max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.2em] font-bold text-amber-500 mb-4">
          — Interactive
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
          Think you know{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-amber-500">
            backend?
          </span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
          Test your knowledge of Spring Boot, Java, Docker, PostgreSQL and
          System Design. 5 topics · 10 questions each · instant scoring.
        </p>
        <Link
          to="/quiz"
          className="inline-block px-12 py-5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-1 transition-all duration-200"
        >
          ⚡ Start the Quiz
        </Link>
      </section>
    </main>
  );
}
