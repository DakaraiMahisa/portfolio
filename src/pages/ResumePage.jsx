import ResumeHeader from "../components/resume/ResumeHeader";
import ResumeSummary from "../components/resume/ResumeSummary";
import ResumeSkills from "../components/resume/ResumeSkills";
import ResumeProjects from "../components/resume/ResumeProjects";
import ResumeExperience from "../components/resume/ResumeExperience";
import ResumeEducation from "../components/resume/ResumeEducation";
import ResumeCertifications from "../components/resume/ResumeCertifications";
import ResumeLanguages from "../components/resume/ResumeLanguages";
export default function ResumePage() {
  return (
    <main className="bg-slate-100 dark:bg-slate-950 py-8 px-4 print:bg-white print:p-0">
      <div className="mx-auto max-w-[210mm] bg-white shadow-2xl print:shadow-none">
        <ResumeHeader />

        <div className="grid grid-cols-12 gap-6 p-6">
          {/* Sidebar */}
          <aside className="col-span-4 space-y-4">
            <ResumeSkills />
            <ResumeEducation />
            <ResumeCertifications />
          </aside>

          {/* Main */}
          <section className="col-span-8 space-y-4">
            <ResumeSummary />
            <ResumeProjects />
            <ResumeExperience />
            <ResumeLanguages />
          </section>
        </div>
      </div>
    </main>
  );
}
