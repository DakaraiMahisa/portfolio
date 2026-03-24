import React from "react";
import { SKILLS_DATA } from "../data/skills";
import { Link } from "react-router-dom";

// 🎨 Skill Card
const SkillCard = ({ skill, variant }) => {
  const levelColor = {
    expert: "bg-green-500",
    proficient: "bg-indigo-500",
    familiar: "bg-amber-500",
  };

  // 🎨 Light mode color themes (soft tinted like Home page)
  const variants = {
    indigo: "bg-indigo-50/70 border-indigo-200 hover:border-indigo-400",
    amber: "bg-amber-50/70 border-amber-200 hover:border-amber-400",
    green: "bg-green-50/70 border-green-200 hover:border-green-400",
    blue: "bg-blue-50/70 border-blue-200 hover:border-blue-400",
    red: "bg-red-50/70 border-red-200 hover:border-red-400",
  };

  return (
    <div
      className={`
        p-4 rounded-xl flex items-center justify-between 
        transition-all duration-300 group hover:-translate-y-1

        ${variants[variant] || "bg-slate-50 border-slate-200"}
        backdrop-blur-sm

        dark:bg-slate-800/50 
        dark:border-slate-800 
        dark:hover:border-indigo-500/50
      `}
    >
      <div className="flex items-center gap-4">
        <span className="text-2xl group-hover:scale-110 transition-transform">
          {skill.icon}
        </span>

        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            {skill.name}
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
            {skill.desc}
          </p>
        </div>
      </div>

      <span
        className={`w-2 h-2 rounded-full ${
          levelColor[skill.level] || "bg-slate-400 dark:bg-slate-600"
        }`}
      />
    </div>
  );
};

// 🎯 Main Page
const Skills = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-16 relative">
          <div className="absolute -top-20 -left-10 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>

          <p className="text-indigo-500 font-mono text-xs tracking-widest uppercase mb-4">
            — Technical Stack
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Tools of the <em className="text-amber-500 not-italic">trade.</em>
          </h1>

          {/* Legend */}
          <div className="flex gap-6 mt-8">
            {["expert", "proficient", "familiar"].map((lvl) => (
              <div
                key={lvl}
                className="flex items-center gap-2 text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400"
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    lvl === "expert"
                      ? "bg-green-500"
                      : lvl === "proficient"
                        ? "bg-indigo-500"
                        : "bg-amber-500"
                  }`}
                ></span>
                {lvl}
              </div>
            ))}
          </div>
        </header>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(SKILLS_DATA).map(([key, section]) => (
            <div key={key}>
              <h3
                className={`text-xs font-mono tracking-[0.3em] uppercase mb-6 border-b border-slate-200 dark:border-slate-800 pb-2 ${
                  section.color === "amber"
                    ? "text-amber-500"
                    : section.color === "green"
                      ? "text-green-500"
                      : section.color === "blue"
                        ? "text-blue-500"
                        : section.color === "red"
                          ? "text-red-500"
                          : "text-indigo-500"
                }`}
              >
                {section.title}
              </h3>

              <div className="grid gap-3">
                {section.items.map((skill, index) => (
                  <SkillCard
                    key={index}
                    skill={skill}
                    variant={section.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quiz CTA */}
        <section className="mt-24 text-center p-12 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">Validate my expertise</h2>

          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">
            Take a quick interactive quiz on the backend and DevOps concepts I
            use daily.
          </p>

          <Link
            to="/quiz"
            className="inline-block bg-amber-500 px-8 py-4 rounded-xl font-bold text-slate-900 hover:bg-amber-400 transition-all hover:scale-105"
          >
            ⚡ Take the Quiz
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Skills;
