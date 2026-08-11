import AccountScreen from "@/screens/main/AccountScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import Home from "@assets/home.svg";
import Account from "@assets/account.svg";

export type MainStackParamList = {
  Account: {
    id: number;
  };
  Home: undefined;
};

const Tab = createBottomTabNavigator<MainStackParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
          screenOptions={{
            headerShown: false,

            tabBarStyle: {
              height: 97,
              paddingBottom: 25,
              paddingTop: 15,
              backgroundColor: "#fff",
              borderTopWidth: 0,
            },
            tabBarActiveTintColor: "#0E9384",
            tabBarInactiveTintColor: "#606060",

            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: "600",
            },
          }}
        >
      <Tab.Screen name="Home" component={HomeNavigator} options={{
              title: "Home",
              tabBarIcon: ({ color, size }) => (
                <Home height={size} width={size} color={color} />
              ),
            }}/>
      <Tab.Screen name="Account" component={AccountScreen} options={{
              title: "Account",
              tabBarIcon: ({ color, size }) => (
                <Account height={size} width={size} color={color} />
              ),
            }}/>
    </Tab.Navigator>
  );
}
