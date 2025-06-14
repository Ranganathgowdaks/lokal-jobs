import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 12,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
    marginRight: 4,
  },
  value: {
    fontSize: 16,
    color: "#333",
    flexShrink: 1,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#444",
    marginTop: 16,
    marginBottom: 6,
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#444",
  },
  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginVertical: 10,
  },
  badge: {
    backgroundColor: "#E7F3FE",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    color: "#0E56A8",
    fontSize: 13,
    fontWeight: "500",
  },
  scrollTopButton: {
    position: "absolute",
    right: 16,
    bottom: 24,
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 30,
    elevation: 5,
    zIndex: 100,
  },
});
