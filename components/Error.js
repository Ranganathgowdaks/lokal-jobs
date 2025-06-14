import React from "react";
import { View, Text } from "react-native";

export default function Error({ message }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ color: "red", textAlign: "center" }}>
        {message || "Something went wrong."}
      </Text>
    </View>
  );
}
