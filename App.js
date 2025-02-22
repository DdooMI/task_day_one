import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="product" component={ProductScreen} />
        <Drawer.Screen name="cart" component={CartScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    {/* <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen options={{ headerBackVisible: false, animation: "fade_from_bottom" }} name='login' component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} component={ProductScreen} name='product' />
        <Stack.Screen options={{ headerShown: false }} component={CartScreen} name='cart' />

      </Stack.Navigator>
    </NavigationContainer> */}
</>
  );
}

