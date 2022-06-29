import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export const TaskItem = ({ title, isValid, onChange }) => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <View style={styles.textContainer}>
        <BouncyCheckbox
          isChecked={isValid}
          textStyle={styles.text}
          size={30}
          fillColor="#00a3ff"
          unfillColor="#FFFFFF75"
          text={title}
          iconStyle={{ borderColor: "#00a3ff" }}
          onPress={onChange}
        />
        <Text style={styles.header}>+</Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 15,
  },
  divider: {
    borderBottomColor: "#9A9A9A75",
    borderBottomWidth: 2,
    width: "100%",
  },
  text: {
    fontSize: 20,
  },
});
