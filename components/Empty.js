import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Empty({ message }) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="briefcase"
        size={60}
        color="#8B4513"
        style={styles.icon}
      />
      <Text style={styles.message}>{message || "No data available."}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  icon: {
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
});
