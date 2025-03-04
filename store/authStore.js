import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { create } from "zustand";
import { auth } from "../firebaseConfig";

export const useAuth = create((set) => ({
    token: "",
    
    login: async (data, navigation) => { 
        try {
            console.log("Logging in user:", data);
            const res = await signInWithEmailAndPassword(auth, data.email, data.password);
            set({ token: await res.user.getIdToken() });
            console.log("Login successful:", res.user);
            navigation.navigate('home'); 
        } catch (err) {
            console.error("Login failed:", err.code, err.message);
        }
    },

    signUp: async (data, navigation) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
            set({ token: await res.user.getIdToken() });
            console.log("Account created successfully:", res.user);
            navigation.navigate('login'); 
        } catch (e) {
            console.error("Signup failed:", e.code, e.message);
        }
    }
}));
