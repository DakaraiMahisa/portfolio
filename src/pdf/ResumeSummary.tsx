import { View, Text } from "@react-pdf/renderer";
import { RESUME } from "../data/resume";
import { styles } from "./styles";

export default function ResumeSummary() {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Professional Summary</Text>

      <Text style={styles.text}>{RESUME.summary.content}</Text>
    </View>
  );
}
