import { Briefcase, CalendarDays, MapPin } from "lucide-react";
import { RESUME } from "../../data/resume";

export default function ResumeExperience() {
  const { experience } = RESUME;

  return (
    <section>
      <h2 className="mb-3 border-b border-slate-300 pb-1 text-lg font-bold">
        Professional Experience
      </h2>

      <div className="space-y-4">
        {experience.map((job) => (
          <article key={`${job.company}-${job.role}`}>
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-base">{job.role}</h3>

                <p className="flex items-center gap-2 text-sm text-indigo-600">
                  <Briefcase size={14} />
                  {job.company}
                </p>
              </div>

              <div className="text-xs text-slate-500 text-right">
                <div className="flex items-center justify-end gap-1">
                  <CalendarDays size={12} />
                  {job.duration}
                </div>

                <div className="flex items-center justify-end gap-1 mt-1">
                  <MapPin size={12} />
                  {job.location}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <ul className="mt-2 ml-5 list-disc space-y-1 text-sm text-slate-700">
              {job.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
