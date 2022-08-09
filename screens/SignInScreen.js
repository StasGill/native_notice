import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Buttons } from "../components/form/Buttons";
import { Heading } from "../components/form/Heading";
import { useDispatch, useSelector } from "react-redux";
import { signInValidation } from "../helpers/signInValidation";
import { signIn } from "../store/actions/auth";
import { Icons } from "../components/tabs/Icons";
import { Inputs } from "../components/form/Inputs";

const signInMock = {
  email: "stan@mail.com",
  password: "1234",
};

export function SignInScreen() {
  const [signInData, setRegisterData] = useState({ ...signInMock });
  const { isLoading } = useSelector((state) => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogIn = (e) => {
    const isValid = signInValidation(signInData);
    isValid && dispatch(signIn(signInData, navigation));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainContainer}
    >
      <StatusBar animated={true} backgroundColor="#00A3FF" hidden={false} />
      {/* <View style={styles.mainContainer}> */}
      <View style={styles.header}>
        <Text style={styles.logo}>Notice</Text>
        <Icons color="white" type="Logo" />
      </View>
      <SafeAreaView style={styles.container}>
        <View>
          <Heading title={"Sign In"} />
        </View>
        <Inputs
          onChange={setRegisterData}
          data={signInData}
          name="email"
          placeholder="Email"
          value={signInData.email}
        />
        <Inputs
          onChange={setRegisterData}
          data={signInData}
          name="password"
          placeholder="Password"
          value={signInData.password}
        />
        <Buttons
          title={"Sign In"}
          onPress={handleLogIn}
          isLoading={isLoading}
        />
        <Text>If you don't have an account please </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </SafeAreaView>
      {/* </View> */}
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
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
  },
  margin: { marginTop: 100 },
  header: {
    height: 150,
    width: 147,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    // paddingTop: 10,
  },
  logo: { color: "white", fontSize: 35, fontWeight: "bold" },
  inputContainer: {
    width: "80%",
    padding: 5,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginBottom: 30,
  },
  input: {
    fontSize: 20,
  },
  link: {
    color: "#00A3FF",
  },
});
