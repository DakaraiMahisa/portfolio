import { Mail, Globe } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { RESUME } from "../../data/resume";

export default function ResumeFooter() {
  const { personal } = RESUME;

  return (
    <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-linear-to-r from-indigo-50 via-white to-amber-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-8 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        {/* Left */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500">
            Let's Build Something Great
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            Available for Software Engineering Opportunities
          </h2>

          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
            I'm passionate about building enterprise software, scalable backend
            systems, full-stack web applications, and AI-powered business
            solutions. I'm always excited to collaborate on impactful products
            that solve real-world problems.
          </p>
        </div>

        {/* Right */}
        <div className="space-y-3 text-sm">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors"
          >
            <Mail size={18} />
            {personal.email}
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors"
          >
            <SiGithub size={18} />
            {personal.github.replace("https://", "")}
          </a>

          <a
            href={personal.portfolio}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors"
          >
            <SiGithub size={18} />
            {personal.portfolio.replace("https://", "")}
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-slate-500 dark:text-slate-500">
        <span>
          © {new Date().getFullYear()} Dakarai Mahisa. All rights reserved.
        </span>

        <span>Last Updated: July 2026</span>
      </div>
    </section>
  );
}
