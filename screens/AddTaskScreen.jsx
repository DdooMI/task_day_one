import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "../store/authStore"; // ✅ Import user authentication state
import { useTodoStore } from "../store/todoStore";

const AddTaskScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { addTodo, updateTodo } = useTodoStore();
    const { user } = useAuth(); // ✅ Get authenticated user
    const { todo } = route.params || {}; // Check if we are editing an existing task

    const [task, setTask] = useState({
        name: todo?.name || "",
        description: todo?.description || "",
        time: todo?.time ? new Date(todo.time) : new Date(),
    });

    const [showPicker, setShowPicker] = useState(false);

    const handleSubmit = async () => {
        if (!task.name || !task.description) {
            Alert.alert("Error", "Please fill in all fields!");
            return;
        }

        if (!user?.uid) {
            Alert.alert("Error", "User not authenticated!");
            return;
        }

        try {
            if (todo) {
                await updateTodo(user.uid, todo.id, { ...task, time: task.time.toISOString() });
            } else {
                await addTodo(user.uid, { ...task, time: task.time.toISOString() });
            }
            navigation.goBack(); // ✅ Navigate back after adding/updating
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Task Name"
                placeholderTextColor="#888"
                value={task.name}
                onChangeText={(text) => setTask({ ...task, name: text })}
            />

            <TextInput
                style={styles.input}
                placeholder="Description"
                placeholderTextColor="#888"
                value={task.description}
                onChangeText={(text) => setTask({ ...task, description: text })}
            />


            <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.datePicker}>
                <Text style={styles.dateText}>{task.time.toDateString()}</Text>
            </TouchableOpacity>

            {showPicker && (
                <DateTimePicker
                    value={task.time}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                        setShowPicker(false);
                        if (selectedDate) setTask({ ...task, time: selectedDate });
                    }}
                />
            )}

            <Button title="Save Task" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    input: { height: 50, borderColor: "gray", borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 },
    datePicker: { padding: 10, backgroundColor: "#f0f0f0", alignItems: "center", borderRadius: 5, marginBottom: 10 },
    dateText: { fontSize: 16 },
});

export default AddTaskScreen;
