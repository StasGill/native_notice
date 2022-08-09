import { TextInput, View, StyleSheet } from "react-native";

export const Inputs = ({
  onChange,
  data,
  name,
  placeholder,
  value,
  autoFocus,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={(e) => onChange({ ...data, [name]: e })}
        value={value}
        placeholder={placeholder}
        style={styles.input}
        name={name}
        autoCapitalize="none"
        autoFocus={autoFocus}
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
    marginBottom: 15,
  },
  input: {
    fontSize: 20,
  },
});
