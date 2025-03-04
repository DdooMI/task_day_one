import { create } from "zustand";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const useAuth = create((set) => ({
    user: null,
    token: "",

    initializeAuth: () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                set({ user, token: user.accessToken });
            } else {
                set({ user: null, token: "" });
            }
        });
    },

    login: async (data, navigation) => { 
        try {
            const res = await signInWithEmailAndPassword(auth, data.email, data.password);
            set({ user: res.user, token: await res.user.getIdToken() });
            navigation.navigate('home');
        } catch (err) {
            console.error("Login failed:", err.code, err.message);
        }
    },

    signUp: async (data, navigation) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
            set({ user: res.user, token: await res.user.getIdToken() });
            navigation.navigate('login');
        } catch (e) {
            console.error("Signup failed:", e.code, e.message);
        }
    },

    logout: async () => {
        await auth.signOut();
        set({ user: null, token: "" });
    }
}));
