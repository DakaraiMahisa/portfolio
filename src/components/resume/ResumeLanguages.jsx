import { RESUME } from "../../data/resume";

export default function ResumeLanguages() {
  const { languages } = RESUME;

  return (
    <section>
      <h2 className="mb-2 border-b border-slate-300 pb-1 text-lg font-bold">
        Languages
      </h2>

      <p className="text-sm text-slate-700">
        {languages
          .map((language) => `${language.name} (${language.level})`)
          .join(" • ")}
      </p>
    </section>
  );
}
