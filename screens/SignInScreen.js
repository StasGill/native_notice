import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Buttons } from "../components/form/Buttons";
import { Heading } from "../components/form/Heading";
import { useDispatch } from "react-redux";
import { signin } from "../actions/auth";

const registrationObject = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export function SignInScreen() {
  const [registerData, setRegisterData] = useState({ ...registrationObject });
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e);
    // setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const submit = () => {
    alert("work");
  };

  const handleLogIn = (e) => {
    // e.preventDefault();
    dispatch(signin(registerData, navigation));
    // setRegisterData({ ...registrationObject });
  };

  return (
    <View style={styles.container}>
      <Heading title={"Sign In"} />
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(e) => setRegisterData({ ...registerData, email: e })}
          value={registerData.email}
          placeholder="Email"
          style={styles.input}
          name="email"
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
          autoCapitalize="none"
        />
      </View>
      <Buttons title={"Sign In"} onPress={handleLogIn} />
      <Text>If you don't have an account please </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.link}>Sign Up</Text>
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
  button: {
    // marginBottom: -3,
  },
  link: {
    color: "#00A3FF",
  },
});
