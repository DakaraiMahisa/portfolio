import { View, Text } from "@react-pdf/renderer";
import { RESUME } from "../data/resume";
import { styles } from "./styles";

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
    <View style={styles.section}>
      <Text style={styles.heading}>Technical Skills</Text>
      {sections.map(({ title, items }) => (
        <Text key={title} style={styles.text}>
          <Text style={styles.bold}>{title}: </Text>
          {items.join(" • ")}
        </Text>
      ))}
    </View>
  );
}
