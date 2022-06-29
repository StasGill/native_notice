import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const Buttons = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: "#00A3FF",
    padding: 15,
    borderRadius: 13,
    textAlign: "center",
    marginBottom: 30,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
