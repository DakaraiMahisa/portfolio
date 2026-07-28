import { View, Text } from "@react-pdf/renderer";
import { RESUME } from "../data/resume";
import { styles } from "./styles";

export default function ResumeEducation() {
  const { education } = RESUME;

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Education</Text>

      <Text style={styles.bold}>{education.institution}</Text>

      <Text style={styles.text}>
        {education.degree} in {education.field}
      </Text>

      <Text style={styles.small}>
        {education.duration} • {education.location}
      </Text>

      <Text style={styles.small}>CGPA: {education.cgpa}</Text>
    </View>
  );
}
