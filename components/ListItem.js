import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export const ListItem = ({ title, color, id, item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Tasks", item)}>
      <View style={{ ...styles.container, backgroundColor: `${color}70` }}>
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
    // shadowColor: "grey",
    // shadowOffset: {
    //   width: 0,
    //   height: 7,
    // },
    // shadowOpacity: 0.41,
    // shadowRadius: 9.11,
    // elevation: 14,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5a5a5a",
  },
});
