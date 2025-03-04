import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import TodoScreen from "./screens/TodoScreen";
import { useAuth } from "./store/authStore"; // ✅ Import useAuth hook
import AddTaskScreen from "./screens/AddTaskScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const Stack = createNativeStackNavigator(); // Use Stack inside Drawer for navigation

  function TodoStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Todo" component={TodoScreen} />
        <Stack.Screen name="addTask" component={AddTaskScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Products" component={ProductScreen} />
      <Drawer.Screen name="Cart" component={CartScreen} />
      <Drawer.Screen name="Todo" component={TodoStack} />
    </Drawer.Navigator>
  );
}
function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
      <Stack.Screen name="home" component={DrawerNavigator} />
      <Stack.Screen name="addTask" component={AddTaskScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const { initializeAuth, user } = useAuth(); // ✅ Use the hook inside a component

  useEffect(() => {
    initializeAuth(); // ✅ Ensure authentication state is set on app load
  }, []);

  return (
    <NavigationContainer>
      {user ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
