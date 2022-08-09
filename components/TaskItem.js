import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Vibration,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { deleteTask } from "../store/actions/user";
import { Icons } from "./tabs/Icons";

export const TaskItem = ({
  title,
  isValid,
  onChange,
  id,
  currentList,
  task,
}) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleChange = () => {
    Vibration.vibrate();
    setShow(!show);
  };

  const handleDelete = () => {
    dispatch(deleteTask(id, currentList._id));
  };

  return (
    <TouchableOpacity onLongPress={handleChange} style={styles.container}>
      <View>
        <View style={styles.textContainer}>
          <BouncyCheckbox
            isChecked={isValid}
            textStyle={styles.text}
            size={30}
            fillColor="#00a3ff"
            unfillColor="#FFFFFF75"
            text={title}
            iconStyle={{ borderColor: "#00a3ff" }}
            onPress={() => onChange(id, task)}
          />
          {show && (
            <TouchableOpacity style={styles.icon} onPress={handleDelete}>
              <Icons color={"#5a5a5a"} type="Delete" />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.divider} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    color: "#2b2b2b",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 14,
    height: 20,
  },
});
