import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    updateDoc
} from "firebase/firestore";
import { create } from "zustand";
import { db } from "../firebaseConfig";

export const useTodoStore = create((set) => ({
  todos: [],
  loading: true,

  fetchTodos: (userId) => {
    if (!userId) return;
    set({ loading: true });

    const userTasksRef = collection(db, "users", userId, "tasks");

    const unsubscribe = onSnapshot(userTasksRef, (snapshot) => {
      set({
        todos: snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        loading: false,
      });
    });

    return unsubscribe;
  },

  addTodo: async (userId, task) => {
    if (!userId || !task.name || !task.description || !task.time) {  
      return;
    }

    try {
      const taskRef = collection(db, "users", userId, "tasks");
      await addDoc(taskRef, {
        name: task.name,
        description: task.description,
        time: task.time,
        completed: false,
      });
    } catch (error) {
      console.error("Error adding task:", error);
    }
  },

  updateTodo: async (userId, taskId, updatedTask) => {
    if (!userId || !taskId) return;

    const taskRef = doc(db, "users", userId, "tasks", taskId);
    await updateDoc(taskRef, updatedTask);
  },

  deleteTodo: async (userId, taskId) => {
    if (!userId || !taskId) return;

    const taskRef = doc(db, "users", userId, "tasks", taskId);
    await deleteDoc(taskRef);
  },
}));
