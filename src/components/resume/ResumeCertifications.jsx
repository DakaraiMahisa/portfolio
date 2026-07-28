import { RESUME } from "../../data/resume";
export default function ResumeCertifications() {
  const { certifications } = RESUME;

  const items = Object.values(certifications).flatMap(
    (section) => section.items,
  );

  return (
    <section>
      <h2 className="mb-2 border-b border-slate-300 pb-1 text-lg font-bold">
        Certifications
      </h2>

      <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[13px]">
        {items.map((cert) => (
          <div key={cert.title}>
            <p className="font-semibold leading-tight">{cert.title}</p>
            <p className="text-slate-600 leading-tight">
              {cert.issuer} • {cert.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
