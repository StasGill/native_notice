import React from "react";
import { Text, StyleSheet } from "react-native";

export const Heading = ({ title }) => {
  return <Text style={styles.heading}>{title}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#5C5C5C",
  },
});
