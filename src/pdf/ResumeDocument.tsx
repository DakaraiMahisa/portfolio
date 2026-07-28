import { Document, Page, View } from "@react-pdf/renderer";

import { styles } from "./styles";

import ResumeHeader from "./ResumeHeader";
import ResumeSummary from "./ResumeSummary";

import ResumeSkills from "./ResumeSkills";
import ResumeEducation from "./ResumeEducation";
import ResumeCertifications from "./ResumeCertifications";
import ResumeLanguages from "./ResumeLanguages";

import ResumeProjects from "./ResumeProjects";
import ResumeExperience from "./ResumeExperience";

export default function ResumeDocument() {
  return (
    <Document
      title="Dakarai Mahisa Resume"
      author="Dakarai Mahisa"
      subject="Software Engineer Resume"
    >
      <Page size="A4" style={styles.page}>
        <ResumeHeader />

        <View style={styles.content}>
          {/* Sidebar */}
          <View style={styles.sidebar}>
            <ResumeSkills />
            <ResumeEducation />
            <ResumeCertifications />
            <ResumeLanguages />
          </View>

          {/* Main */}
          <View style={styles.main}>
            <ResumeSummary />
            <ResumeProjects />
            <ResumeExperience />
          </View>
        </View>
      </Page>
    </Document>
  );
}
