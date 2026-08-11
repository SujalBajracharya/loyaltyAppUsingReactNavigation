import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from "@/screens/main/AccountScreen";
import ProductScreen from "@/screens/main/ProductScreen";
import HomeScreen from "@/screens/main/HomeScreen";
import QRScreen from "@/screens/qr/QRScreen";

export type MainStackParamList = {
    Account: {
        id: number
    }
    Product: {
        id: number
    }
    Home: undefined;
    QR: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function SignupNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Account">
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="QR" component={QRScreen} />
    </Stack.Navigator>
  );
}
