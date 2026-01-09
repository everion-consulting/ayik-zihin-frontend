import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function OnboardingWelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayık Zihin</Text>
      <Text style={styles.subtitle}>Kendinle yeniden bağlantı kur.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("OnboardingFocus")}
      >
        <Text style={styles.buttonText}>Başla</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F26B6B",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.9,
  },
});
