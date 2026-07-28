import { Download, FileText } from "lucide-react";

export default function ResumeSection() {
  const resumeUrl = `${import.meta.env.BASE_URL}/resume/dakaraiR.pdf`;

  return (
    <section className="px-6 py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-10 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-500 mb-3">
            — Resume
          </p>

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
            My Professional{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-amber-500">
              Resume.
            </span>
          </h2>

          <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mb-10">
            Download my latest resume to learn more about my education,
            technical skills, enterprise software projects, internship
            experience, certifications, and career journey.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition-all"
            >
              <FileText size={18} />
              View Resume
            </a>

            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            Last Updated • July 2026
          </p>
        </div>
      </div>
    </section>
  );
}
