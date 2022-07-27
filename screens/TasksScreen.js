import { Text, View, StyleSheet, FlatList } from "react-native";
import { TaskItem } from "../components/TaskItem";

export function TasksScreen({ route }) {
  const { color, title, tasks } = route.params;

  return (
    <View style={{ ...styles.container, backgroundColor: `${color}30` }}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.header}>+</Text>
      </View>
      <View style={styles.divider} />
      <View>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskItem
              title={item.title}
              isValid={item.isValid}
              onChange={() => {}}
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
    width: "95%",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#5a5a5a",
    marginBottom: 10,
    textAlign: "left",
  },
  divider: {
    borderBottomColor: "#9A9A9A75",
    borderBottomWidth: 2,
    width: "95%",
  },
});
