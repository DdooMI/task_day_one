import React, { useEffect } from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import TodoScreen from "./screens/TodoScreen";
import { useAuth } from "./store/authStore"; 
import AddTaskScreen from "./screens/AddTaskScreen";
import { Text, TouchableOpacity, View } from "react-native";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const { logout } = useAuth();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={{ padding: 16, borderTopWidth: 1, borderColor: "#ccc" }}>
        <TouchableOpacity onPress={logout} style={{ padding: 10, backgroundColor: "#ff5555", borderRadius: 5 }}>
          <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

function DrawerNavigator() {
  function TodoStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Todo" component={TodoScreen} />
        <Stack.Screen name="addTask" component={AddTaskScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
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
  const { initializeAuth, user } = useAuth();

  useEffect(() => {
    initializeAuth(); 
  }, []);

  return (
    <NavigationContainer>
      {user ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
