import { View, Text, Link, Image } from "@react-pdf/renderer";
import { RESUME } from "../data/resume";
import dakarai from "../assets/dakarai.jpg";

export default function ResumeHeader() {
  const { personal } = RESUME;

  const contacts = [
    {
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      label: "Phone",
      value: personal.phone,
    },
    {
      label: "GitHub",
      value: "DakaraiMahisa",
      href: personal.github,
    },
    {
      label: "Portfolio",
      value: "dakaraimahisa.github.io",
      href: personal.portfolio,
    },
    {
      label: "LeetCode",
      value: "DakaraiMahisa",
      href: personal.leetcode,
    },
    {
      label: "HackerRank",
      value: "DakaraiMahisa",
      href: personal.hackerrank,
    },
  ];

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "#CBD5E1",
        paddingBottom: 12,
        marginBottom: 16,
      }}
    >
      {/* Top */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* Left */}
        <View
          style={{
            flex: 1,
            paddingRight: 18,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              lineHeight: 0.8,
              fontWeight: "bold",
              color: "#0F172A",
              marginBottom: 6,
            }}
          >
            {personal.name}
          </Text>

          <Text
            style={{
              fontSize: 13,
              color: "#4F46E5",
              fontWeight: "bold",
            }}
          >
            {personal.title}
          </Text>
          <Text
            style={{
              marginTop: 6,
              fontSize: 10,
              color: "#475569",
              lineHeight: 1.4,
            }}
          >
            Java Backend Developer specializing in Spring Boot, React,
            PostgreSQL and enterprise application development.
          </Text>

          {/* Contact Grid */}

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {contacts.map((item) => (
              <View
                key={item.label}
                style={{
                  width: "32%",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 9,
                    fontWeight: "bold",
                    color: "#111827",
                    marginRight: 3,
                  }}
                >
                  {item.label}:
                </Text>

                {item.href ? (
                  <Link
                    src={item.href}
                    style={{
                      fontSize: 9,
                      color: "#2563EB",
                      textDecoration: "none",
                    }}
                  >
                    {item.value}
                  </Link>
                ) : (
                  <Text
                    style={{
                      fontSize: 9,
                      color: "#475569",
                    }}
                  >
                    {item.value}
                  </Text>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Profile */}
        <Image
          src={dakarai}
          style={{
            width: 72,
            height: 72,
            borderRadius: 36,
            borderWidth: 1,
            borderColor: "#CBD5E1",
          }}
        />
      </View>
    </View>
  );
}
