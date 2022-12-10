import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
// condition[`${weather}`]?.colors.split(", ")
export default function Weather({
  temp,
  weather,
  description,
  wind,
  city,
  colors,
}) {
  return (
    <>
      <LinearGradient colors={colors} style={styles.container}>
        <View style={styles.weatherContainer}>
          <Ionicons name={weather} size={200} color="black" />
          <Text style={{ textAlign: "center", fontSize: 25 }}>
            {description}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text style={{ fontSize: 30, paddingBottom: 50 }}>{city}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 270,
            }}
          >
            <Text style={styles.text}>{temp}°C</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>{wind}</Text>
              <Feather name="wind" size={40} color="black" />
            </View>
          </View>
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
  weatherContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
