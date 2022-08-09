import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { TaskItem } from "../components/TaskItem";
import { Inputs } from "../components/form/Inputs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask, getList } from "../store/actions/user";
import { useEffect } from "react";

export function TasksScreen({ route }) {
  const [isAdd, setAdd] = useState(false);
  const [task, setTask] = useState({ title: "" });
  const { currentList } = useSelector((state) => state.user);
  const { authData } = useSelector((state) => state.auth);
  const { color, title, tasks, _id } = route.params;
  const dispatch = useDispatch();

  const addNewTask = () => {
    if (!task.title) {
      setAdd(!isAdd);
      return;
    }
    dispatch(addTask({ ...task, listId: _id }, _id));
    setAdd(!isAdd);
    setTask({ title: "" });
  };

  const handleUpdate = (id, task) => {
    let updatedTask = {};

    if (task.isValid) {
      updatedTask = { ...task, isValid: "" };
    } else {
      updatedTask = { ...task, isValid: authData?.user?.name };
    }

    dispatch(updateTask(id, currentList?._id, updatedTask));
  };

  useEffect(() => {
    return () => {
      dispatch(getList());
    };
  }, []);

  return (
    <View style={{ ...styles.container, backgroundColor: `${color}30` }}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>{title}</Text>
        {!isAdd && (
          <TouchableOpacity onPress={() => setAdd(!isAdd)}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        )}
      </View>
      {isAdd && (
        <View style={styles.addContainer}>
          <Inputs
            onChange={setTask}
            data={task}
            name="title"
            placeholder="New task"
            value={task.title}
          />
          <TouchableOpacity onPress={addNewTask}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.divider} />
      <View style={styles.textContainer}>
        <FlatList
          data={currentList?.tasks}
          renderItem={({ item }) => (
            <TaskItem
              title={item.title}
              isValid={item.isValid}
              id={item._id}
              task={item}
              currentList={currentList}
              onChange={handleUpdate}
            />
          )}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    marginBottom: 10,
  },
  addContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    marginVertical: 10,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#5a5a5a",
    textAlign: "left",
  },
  divider: {
    borderBottomColor: "#9A9A9A75",
    borderBottomWidth: 2,
    width: "95%",
  },
  plus: {
    fontSize: 50,
    color: "#5a5a5a",
  },
});
