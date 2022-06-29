import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../constants/constants";
import { getList } from "../actions/user";
import { ListItem } from "../components/ListItem";

export function ListsScreen() {
  const { lists } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlePress = async () => {
    dispatch({ type: LOGOUT });
  };

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  return (
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
    </SafeAreaView>
  );

  // return (
  //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //     <Text>Task!</Text>
  //     <Button
  //       title="To desc!!!"
  //       onPress={() => navigation.navigate("Detail")}
  //     />
  //     <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
  //       <Text>To desc!</Text>
  //     </TouchableOpacity>
  //   </View>
  // );
}
