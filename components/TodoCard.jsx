import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../store/authStore"; // ✅ Import authentication state
import { useTodoStore } from "../store/todoStore";

const TodoCard = ({ todo, onEdit }) => {
    const { deleteTodo } = useTodoStore();
    const { user } = useAuth(); // ✅ Get logged-in user

    const handleDelete = async () => {
        if (!user?.uid) {
            Alert.alert("Error", "User not authenticated!");
            return;
        }

        Alert.alert("Confirm", "Are you sure you want to delete this task?", [
            { text: "Cancel", style: "cancel" },
            {
                text: "Delete",
                style: "destructive",
                onPress: async () => {
                    try {
                        await deleteTodo(user.uid, todo.id); // ✅ Pass user ID
                    } catch (error) {
                        Alert.alert("Error", error.message);
                    }
                },
            },
        ]);
    };

    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">{todo.name}</Text>
                <Text style={styles.desc} numberOfLines={1} ellipsizeMode="tail">{todo.description}</Text>
                <Text style={styles.time}>{new Date(todo.time).toLocaleString()}</Text>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.button} onPress={onEdit}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: "red" }]} onPress={handleDelete}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: { padding: 15, borderRadius: 8, backgroundColor: "#f9f9f9", marginBottom: 10, flexDirection: "row", justifyContent: "space-between" },
    name: {
        maxWidth: 200,
        overflow: "hidden", fontSize: 18, fontWeight: "bold"
    },
    desc: {
        fontSize: 14,
        color: "#555",
        maxWidth: 200,
        overflow: "hidden",
    },
    time: { fontSize: 14, color: "blue", marginTop: 5 },
    actions: { flexDirection: "row", gap: 10 },
    button: {
        padding: 8,
        borderRadius: 5,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minWidth: 70,
    },
    buttonText: { color: "white", fontWeight: "bold", textAlign: "center" },
});

export default TodoCard;
