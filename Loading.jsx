import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Получение погоды...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 30,
    backgroundColor: "#FDF6AA",
  },
  text: {
    fontSize: 24,
    color: "#2c2c2c",
  },
});
