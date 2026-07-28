import { View, Text } from "@react-pdf/renderer";
import { RESUME } from "../data/resume";
import { styles } from "./styles";

export default function ResumeLanguages() {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Languages</Text>

      {RESUME.languages.map((language) => (
        <Text key={language.name} style={styles.text}>
          <Text style={styles.bold}>{language.name}</Text>
          {" • "}
          {language.level}
        </Text>
      ))}
    </View>
  );
}
