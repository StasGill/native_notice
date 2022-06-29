import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Buttons } from "../components/form/Buttons";
import { Heading } from "../components/form/Heading";
import { signup } from "../actions/auth";
import { useDispatch } from "react-redux";

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
    <View style={styles.container}>
      <Heading title={"Sign Up"} />
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(e) => setRegisterData({ ...registerData, name: e })}
          value={registerData.name}
          placeholder="Name"
          style={styles.input}
          onBlur={() => console.log("blur")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(e) => setRegisterData({ ...registerData, email: e })}
          value={registerData.email}
          placeholder="Email"
          style={styles.input}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(e) =>
            setRegisterData({ ...registerData, password: e })
          }
          value={registerData.password}
          placeholder="Password"
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(e) =>
            setRegisterData({ ...registerData, confirmPassword: e })
          }
          value={registerData.confirmPassword}
          placeholder="Repeat Password"
          style={styles.input}
        />
      </View>
      <Buttons title={"Sign Up"} onPress={handleSignUp} />
      <Text>If you already have an account please </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.link}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
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
  button: {},
  link: {
    color: "#00A3FF",
  },
});
