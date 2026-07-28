import { View, Text, Link } from "@react-pdf/renderer";
import { RESUME } from "../data/resume";
import { styles } from "./styles";

export default function ResumeProjects() {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Projects</Text>

      {RESUME.projects.map((project) => (
        <View key={project.title} style={{ marginBottom: 12 }}>
          <Text style={styles.bold}>{project.title}</Text>

          <Link
            src={project.github}
            style={{
              fontSize: 9,
              color: "#2563EB",
              marginTop: 2,
            }}
          >
            GitHub Repository
          </Link>

          <Text style={styles.text}>{project.description}</Text>

          <Text style={styles.small}>
            Tech: {project.technologies.join(" • ")}
          </Text>

          {project.highlights.map((item) => (
            <Text
              key={item}
              style={{
                marginLeft: 8,
                fontSize: 9,
                marginTop: 2,
              }}
            >
              • {item}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}
