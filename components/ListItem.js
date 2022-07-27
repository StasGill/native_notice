import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export const ListItem = ({ title, color, id, item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Tasks", item)}>
      <View style={{ ...styles.container, backgroundColor: `${color}40` }}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "96%",
    marginHorizontal: "2%",
    marginVertical: 7,
    padding: 15,
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5a5a5a",
  },
});
