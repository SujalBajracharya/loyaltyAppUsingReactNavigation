import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "@/screens/main/HomeScreen";
import ProductScreen from "@/screens/main/ProductScreen";
import QRScreen from "@/screens/qr/QRScreen";

export type HomeStackParamList = {
  HomeScreen: undefined;
  Product: {
    id: number;
  };
  QR: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          headerTitle: "",
        }}
      />

      <Stack.Screen
        name="QR"
        component={QRScreen}
        options={{
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
}
