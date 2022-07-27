import { TextInput, View, StyleSheet } from "react-native";

export const Inputs = ({ onChange, data, name, placeholder, value }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={(e) => onChange({ ...data, [name]: e })}
        value={value}
        placeholder={placeholder}
        style={styles.input}
        name={name}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});
