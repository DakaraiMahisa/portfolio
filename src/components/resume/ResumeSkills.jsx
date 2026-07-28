import { RESUME } from "../../data/resume";

export default function ResumeSkills() {
  const { skills } = RESUME;
  const sections = [
    { title: "Backend", items: skills.backend },
    { title: "Frontend", items: skills.frontend },
    { title: "Databases", items: skills.databases },
    { title: "DevOps", items: skills.devopsCloud },
    { title: "Languages", items: skills.languages },
    { title: "Tools", items: skills.tools },
  ];

  return (
    <section>
      <h2 className="mb-1 border-b border-slate-300 pb-0.5 text-base font-bold">
        Technical Skills
      </h2>

      <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[13px] leading-5">
        {sections.map(({ title, items }) => (
          <div key={title}>
            <span className="font-semibold">{title}</span>
            <div className="text-slate-700">{items.join(", ")}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
