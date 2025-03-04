import React, { useEffect, useState } from "react";
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  ActivityIndicator, 
  StyleSheet 
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // ✅ Import useNavigation
import { useTodoStore } from "../store/todoStore";
import { useAuth } from "../store/authStore"; // Auth state
import TodoCard from "../components/TodoCard";

const TodoScreen = () => {
  const { todos, fetchTodos, loading } = useTodoStore();
  const { user } = useAuth(); // Get authenticated user
  const navigation = useNavigation(); // ✅ Get navigation instance
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    if (user?.uid) {
      const unsubscribe = fetchTodos(user.uid);
      return () => unsubscribe && unsubscribe();
    }
  }, [user]);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.warningText}>Please log in to see your tasks.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todos</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoCard
              todo={item}
              onEdit={() => navigation.navigate("addTask", { todo: item })} // ✅ Navigate for editing
            />
          )}
        />
      )}

      {/* Floating Button - Navigate to Add Task */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("addTask", { todo: null })} // ✅ Navigate for adding a new task
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  warningText: { fontSize: 18, color: "red", textAlign: "center", marginTop: 20 },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 30,
    width: 60,
    height: 60,
    backgroundColor: "blue",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  fabText: { color: "white", fontSize: 30 },
});

export default TodoScreen;
