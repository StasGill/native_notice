import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import { Buttons } from "../components/form/Buttons";
import { Heading } from "../components/form/Heading";
import { signup } from "../store/actions/auth";
import { useDispatch } from "react-redux";
import { Inputs } from "../components/form/Inputs";
import { Icons } from "../components/tabs/Icons";

const registrationObject = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export function SignUpScreen() {
  const [registerData, setRegisterData] = useState({ ...registrationObject });
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(signup(registerData, navigation));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainContainer}
    >
      <StatusBar animated={true} backgroundColor="#00A3FF" hidden={false} />
      <View style={styles.header}>
        <Text style={styles.logo}>Notice</Text>
        <Icons color="white" type="Logo" />
      </View>
      <View style={styles.container}>
        <Heading title={"Sign Up"} />
        <Inputs
          onChange={setRegisterData}
          data={registerData}
          name="firstName"
          placeholder="Name"
          value={registerData.firstName}
        />
        <Inputs
          onChange={setRegisterData}
          data={registerData}
          name="email"
          placeholder="Email"
          value={registerData.email}
        />
        <Inputs
          onChange={setRegisterData}
          data={registerData}
          name="password"
          placeholder="Password"
          value={registerData.password}
        />
        <Inputs
          onChange={setRegisterData}
          data={registerData}
          name="confirmPassword"
          placeholder="Repeat Password"
          value={registerData.confirmPassword}
        />
        <Buttons title={"Sign Up"} onPress={handleSignUp} />
        <Text>If you already have an account please </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.link}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#00A3FF",
  },
  container: {
    flex: 1,
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    // paddingTop: 40,
    justifyContent: "center",
  },
  margin: { marginTop: 100 },
  header: {
    height: 150,
    width: 147,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    // paddingTop: 40,
  },
  logo: { color: "white", fontSize: 35, fontWeight: "bold" },
  link: {
    color: "#00A3FF",
  },
});
