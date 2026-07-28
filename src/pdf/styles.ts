import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 24,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#334155",
    lineHeight: 1.5,
  },

  content: {
    flexDirection: "row",
    marginTop: 18,
    gap: 20,
  },

  sidebar: {
    width: "32%",
    paddingRight: 10,
  },

  main: {
    width: "68%",
  },

  section: {
    marginBottom: 16,
  },

  heading: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#CBD5E1",
  },

  text: {
    fontSize: 10,
    color: "#475569",
  },

  small: {
    fontSize: 9,
    color: "#64748B",
  },

  bold: {
    fontWeight: "bold",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
