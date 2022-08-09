import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
} from "react-native-simple-radio-button";

import { useDispatch, useSelector } from "react-redux";
import {
  addDrawerAction,
  addList,
  deleteList,
  editDrawerAction,
  getList,
  updateList,
} from "../../store/actions/user";
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

export const EditListForm = ({ id }) => {
  const [newListData, setListData] = useState("");
  const [checkData, setCheckData] = useState({ value: "#008000", index: 0 });
  const { isLoading, currentListId, lists } = useSelector(
    (state) => state.user
  );
  const { name } = useSelector((state) => state.auth.authData.user);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setListData(e.list);
  };

  const handleDelete = () => {
    dispatch(
      deleteList({
        id: currentListId,
        listName: newListData,
        selectedColor: checkData.value,
        userName: name,
      })
    );
    dispatch(editDrawerAction());
  };

  const onSubmit = () => {
    dispatch(
      updateList(
        {
          id: currentListId,
          listName: newListData,
          selectedColor: checkData.value,
          userName: name,
        },
        currentListId
      )
    );
    dispatch(editDrawerAction());
  };

  useEffect(() => {
    const list = lists.find((item) => item._id === currentListId);
    const color = radio_props.find((item) => item.value === list.color);
    setCheckData(color);

    setListData(list.title);
  }, []);

  return (
    <>
      <Inputs
        onChange={onChange}
        data={newListData}
        name="list"
        placeholder="New list"
        value={newListData}
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
      <Buttons title={"Update list"} onPress={onSubmit} isLoading={isLoading} />
      <Buttons
        title={"Delete list"}
        onPress={handleDelete}
        isLoading={isLoading}
        type="delete"
      />
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
