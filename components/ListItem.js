import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Vibration,
} from "react-native";
import { useDispatch } from "react-redux";
import {
  deleteList,
  editDrawerAction,
  setCurrentList,
} from "../store/actions/user";
import { Icons } from "./tabs/Icons";

export const ListItem = ({ title, color, id, item }) => {
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleChange = () => {
    Vibration.vibrate();
    setShow(!show);
  };

  const handleDelete = () => {
    Vibration.vibrate();
    dispatch(deleteList({ id }));
  };

  const openEditDrawer = () => {
    handleChange();
    dispatch(editDrawerAction(id));
  };

  const handleRedirect = () => {
    dispatch(setCurrentList(item));
    navigation.navigate("Tasks", item);
  };

  return (
    <TouchableOpacity onPress={handleRedirect} onLongPress={handleChange}>
      <View style={{ ...styles.container, backgroundColor: `${color}40` }}>
        <Text style={styles.text}>{title}</Text>
        {show && (
          <TouchableOpacity onPress={handleDelete} style={styles.iconButton}>
            <TouchableOpacity style={styles.icon} onPress={openEditDrawer}>
              <Icons color={"#5a5a5a"} type="Edit" />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "2%",
    marginVertical: 7,
    padding: 15,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5a5a5a",
    width: 200,
  },
  test: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    height: 20,
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 4,
    height: 20,
  },
  iconButton: {
    width: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
