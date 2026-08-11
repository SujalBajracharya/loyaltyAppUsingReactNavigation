import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpScreen from "@/screens/auth/SignUpScreen";
import NextPageScreen from "@/screens/auth/NextPageScreen";
import AllSetScreen from "@/screens/auth/AllSetScreen";
import SignInScreen from "@/screens/auth/SignInScreen";
import ForgotPassword from "@/screens/auth/ForgotPasswordScreen";

export type SignupStackParamList = {
  SignupForm: undefined;
  NextPage: undefined;
  AllSet: undefined;
  SigninForm: undefined;
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<SignupStackParamList>();

export default function SignupNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignupForm" component={SignUpScreen} />
      <Stack.Screen name="NextPage" component={NextPageScreen} />
      <Stack.Screen name="AllSet" component={AllSetScreen} />
      <Stack.Screen name="SigninForm" component={SignInScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
