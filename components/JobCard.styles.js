import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    marginHorizontal: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  imageTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 10,
    marginRight: 10,
    resizeMode: "cover",
    backgroundColor: "#eee",
  },
  logoFallback: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    marginBottom: 4,
    flexShrink: 1,
  },
  salary: {
    color: "#007bff",
    fontWeight: "500",
    fontSize: 14,
  },
  company: {
    color: "#666",
    fontSize: 14,
    marginTop: 6,
    fontStyle: "italic",
  },
  location: {
    color: "#555",
    fontSize: 14,
    marginTop: 2,
  },
  badges: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  badge: {
    backgroundColor: "#E7F3FE",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 6,
  },
  badgeText: {
    color: "#0E56A8",
    fontSize: 12,
    fontWeight: "500",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },
  chatBtn: {
    flexDirection: "row",
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    flex: 0.48,
    alignItems: "center",
    justifyContent: "center",
  },
  callBtn: {
    flexDirection: "row",
    backgroundColor: "#ffc107",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    flex: 0.48,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    marginLeft: 6,
    fontWeight: "bold",
    fontSize: 14,
  },
});
