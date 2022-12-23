import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Statistics from "../screens/Statistics";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="statistics" component={Statistics} />
    </Stack.Navigator>
  );
}