import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function OnboardingFocusScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Odaklan</Text>
      <Text style={styles.subtitle}>
        Dikkatini dağıtan alışkanlıklardan uzaklaş.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("OnboardingFinish")}
      >
        <Text style={styles.buttonText}>Devam Et</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F26B6B",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.9,
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 24,
  },
  buttonText: {
    color: "#F26B6B",
    fontWeight: "600",
    fontSize: 16,
  },
});
