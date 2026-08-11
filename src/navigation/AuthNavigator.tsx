import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllSetScreen from "@/screens/auth/AllSetScreen";
import SignInScreen from "@/screens/auth/SignInScreen";
import ForgotPassword from "@/screens/auth/ForgotPasswordScreen";
import InitialScreen from "@/screens/auth/InitialScreen";
import SignUpScreen from "@/screens/auth/SignUpScreen";

export type SignupStackParamList = {
  Initial: undefined;
  SignUp: undefined;
  AllSet: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<SignupStackParamList>();

export default function SignupNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: true,
          headerTitle: "Sign Up",
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "700",
          },
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen name="AllSet" component={AllSetScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
