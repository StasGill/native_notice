import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Animated,
  Easing,
} from "react-native";
import { Icons } from "../tabs/Icons";

export const Buttons = ({ title, onPress, isLoading, isDisabled }) => {
  const [rotateValueHolder] = useState(new Animated.Value(0));

  const disableCheck = isDisabled && { backgroundColor: "grey" };

  const startImageRotateFunction = () => {
    Animated.loop(
      Animated.timing(rotateValueHolder, {
        toValue: 30,
        duration: 6000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  };

  useEffect(() => {
    startImageRotateFunction();
  }, []);

  return (
    <TouchableOpacity
      style={{ ...styles.container, ...disableCheck }}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
      {isLoading && (
        <Animated.View
          style={{
            ...styles.loadingIcon,
            transform: [{ rotate: rotateValueHolder }],
          }}
        >
          <Icons color="white" type="Loading" />
        </Animated.View>
      )}
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
  loadingIcon: {
    width: 28,
    height: 28,
    position: "absolute",
    right: 20,
    top: 14,
  },
});
