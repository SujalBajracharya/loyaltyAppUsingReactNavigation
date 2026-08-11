import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from "@/screens/main/AccountScreen";
import ProductScreen from "@/screens/main/ProductScreen";
import HomeScreen from "@/screens/main/HomeScreen";

export type SignupStackParamList = {
    Account: {
        id: number
    }
    Product: {
        id: number
    }
    Home: undefined,
};

const Stack = createNativeStackNavigator<SignupStackParamList>();

export default function SignupNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Account">
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
