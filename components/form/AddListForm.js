import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
} from "react-native-simple-radio-button";

import { useDispatch, useSelector } from "react-redux";
import { addDrawerAction, addList } from "../../store/actions/user";
import { Buttons } from "./Buttons";
import { Inputs } from "./Inputs";

const newListMock = {
  list: "",
};

var radio_props = [
  { value: "#008000", index: 0 },
  { value: "#ff0000", index: 1 },
  { value: "#0000ff", index: 2 },
  { value: "#892be2", index: 3 },
  { value: "#ff69b4", index: 4 },
  { value: "#faebd7", index: 5 },
];

export const AddListForm = () => {
  const [newListData, setListData] = useState({ ...newListMock });
  const [checkData, setCheckData] = useState({ value: "#008000", index: 0 });
  const { isLoading } = useSelector((state) => state.user);
  const { name } = useSelector((state) => state.auth.authData.user);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(
      addList({
        listName: newListData.list,
        selectedColor: checkData.value,
        userName: name,
      })
    );
    dispatch(addDrawerAction());
  };

  return (
    <>
      <Inputs
        onChange={setListData}
        data={newListData}
        name="list"
        placeholder="New list"
        value={newListData.list}
      />
      <View style={styles.checkBoxContainer}>
        <RadioForm formHorizontal={true} animation={true}>
          {radio_props.map((obj, i) => {
            return (
              <RadioButton labelHorizontal={true} key={i}>
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={checkData.index === i}
                  onPress={() => setCheckData(obj)}
                  borderWidth={3}
                  buttonInnerColor={obj.value}
                  buttonOuterColor={obj.value}
                  buttonSize={15}
                  buttonOuterSize={30}
                  buttonStyle={{}}
                  buttonWrapStyle={{ marginHorizontal: 10 }}
                />
              </RadioButton>
            );
          })}
        </RadioForm>
      </View>
      <Buttons title={"Create list"} onPress={onSubmit} isLoading={isLoading} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
  },
  mainContainer: {
    flex: 1,
    width: 300,
    backgroundColor: "pink",
    alignItems: "center",
  },
  checkBoxContainer: {
    marginBottom: 25,
  },
});
