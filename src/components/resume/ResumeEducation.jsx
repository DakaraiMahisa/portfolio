import { RESUME } from "../../data/resume";

export default function ResumeEducation() {
  const { education } = RESUME;

  return (
    <section>
      <h2 className="mb-2 border-b border-slate-300 pb-1 text-lg font-bold">
        Education
      </h2>

      <div>
        <h3 className="font-semibold text-sm">{education.institution}</h3>

        <p className="text-sm text-slate-700">
          {education.degree} in {education.field}
        </p>

        <p className="mt-1 text-xs text-slate-600">
          {education.duration} • {education.location}
        </p>
        <p className="text-xs text-slate-600">
          CGPA: <strong>{education.cgpa}</strong>
        </p>
      </div>
    </section>
  );
}
