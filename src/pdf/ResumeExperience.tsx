import { View, Text } from "@react-pdf/renderer";
import { RESUME } from "../data/resume";
import { styles } from "./styles";

export default function ResumeExperience() {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Experience</Text>

      {RESUME.experience.map((job) => (
        <View key={job.company} style={{ marginBottom: 12 }}>
          <Text style={styles.bold}>{job.role}</Text>

          <Text style={styles.small}>{job.company}</Text>

          <Text style={styles.small}>{job.duration}</Text>

          {job.achievements.map((achievement) => (
            <Text
              key={achievement}
              style={{
                marginLeft: 8,
                marginTop: 2,
                fontSize: 9,
              }}
            >
              • {achievement}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}
