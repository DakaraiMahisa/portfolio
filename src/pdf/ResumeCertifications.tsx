import { View, Text } from "@react-pdf/renderer";
import { RESUME } from "../data/resume";
import { styles } from "./styles";

export default function ResumeCertifications() {
  const items = Object.values(RESUME.certifications).flatMap(
    (section) => section.items,
  );

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Certifications</Text>

      {items.map((cert) => (
        <Text key={cert.title} style={styles.text}>
          <Text style={styles.bold}>{cert.title}</Text>
          {" • "}
          {cert.issuer}
          {" • "}
          {cert.year}
        </Text>
      ))}
    </View>
  );
}
