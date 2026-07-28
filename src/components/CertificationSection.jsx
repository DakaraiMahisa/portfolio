import { CERTIFICATIONS } from "../data/certifications";

const CATEGORIES = [
  {
    title: "Software Engineering",
    icon: "💻",
    certifications: CERTIFICATIONS.softwareEngineering,
  },
  {
    title: "Electronics & Embedded Systems",
    icon: "⚡",
    certifications: CERTIFICATIONS.electronicsEmbeddedSystems,
  },
];

export default function CertificationSection() {
  return (
    <section className="px-6 py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-500 mb-3">
            — Certifications
          </p>

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
            Continuous{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-amber-500">
              Learning.
            </span>
          </h2>

          <p className="max-w-3xl text-slate-500 dark:text-slate-400 leading-relaxed">
            Continuous learning has been fundamental to my growth as an
            engineer. These certifications represent my commitment to expanding
            my expertise across software engineering and electronics, enabling
            me to approach complex problems with a broader technical perspective
          </p>
        </div>

        {/* Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{category.icon}</span>

                <h3 className="text-2xl font-black">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="rounded-2xl border border-slate-100 dark:border-slate-800 p-5 hover:border-indigo-300 dark:hover:border-indigo-500 transition-colors"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-slate-100">
                          {cert.title}
                        </h4>

                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                          {cert.issuer}
                        </p>
                      </div>

                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        {cert.year}
                      </span>
                    </div>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-4 text-sm font-bold text-indigo-500 hover:text-indigo-400 transition-colors"
                      >
                        View Credential →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
