import { FolderGit2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { RESUME } from "../../data/resume";

export default function ResumeProjects() {
  const { projects } = RESUME;

  return (
    <section>
      <h2 className="mb-3 border-b border-slate-300 pb-1 text-lg font-bold">
        Projects
      </h2>

      <div className="space-y-4">
        {projects.map((project) => (
          <article key={project.title}>
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <FolderGit2 size={15} className="text-indigo-600" />

                  <h3 className="font-semibold text-sm">{project.title}</h3>

                  <span className="text-xs text-slate-500">
                    ({project.duration})
                  </span>
                </div>

                <p className="mt-1 text-xs italic text-slate-500">
                  {project.technologies.join(" • ")}
                </p>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-indigo-600"
              >
                <SiGithub size={15} />
              </a>
            </div>

            {/* Highlights */}
            <ul className="mt-2 ml-5 list-disc text-sm text-slate-700 space-y-0.5">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
