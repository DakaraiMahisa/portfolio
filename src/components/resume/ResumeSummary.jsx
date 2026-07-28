import { RESUME } from "../../data/resume";

export default function ResumeSummary() {
  const { summary } = RESUME;

  return (
    <section>
      <h2 className="mb-3 border-b border-slate-300 pb-1 text-lg font-bold">
        {summary.title}
      </h2>

      <p className="text-sm leading-6 text-slate-700 text-justify">
        {summary.content}
      </p>
    </section>
  );
}
