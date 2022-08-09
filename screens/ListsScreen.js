import React, { useEffect } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { editDrawerAction, getList } from "../store/actions/user";
import { ListItem } from "../components/ListItem";
import { Modals } from "../components/Modals";
import { EditListForm } from "../components/form/EditListForm";
import { StatusBar } from "expo-status-bar";

export function ListsScreen() {
  const { lists, addDrawer, editDrawer } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  const openEditDrawer = () => {
    dispatch(editDrawerAction());
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, height: "100%", backgroundColor: "#e5e5e5" }}
    >
      <StatusBar style="light" />
      <SafeAreaView
        style={{ flex: 1, height: "100%", backgroundColor: "#e5e5e5" }}
      >
        <View>
          <FlatList
            data={lists}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                color={item.color}
                id={item._id}
                item={item}
              />
            )}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <Modals
          openDrawer={openEditDrawer}
          isOpen={editDrawer}
          title="Update list"
        >
          <EditListForm />
        </Modals>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
