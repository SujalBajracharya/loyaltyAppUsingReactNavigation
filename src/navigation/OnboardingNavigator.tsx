import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "@/screens/onboarding/OnboardingScreen";
import HowItWorksScreen from "@/screens/onboarding/HowItWorksScreen";
import OnboardingFinalScreen from "@/screens/onboarding/OnboardingFinalScreen";
const Stack = createNativeStackNavigator();

export default function OnBoardingNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Howitworks" component={HowItWorksScreen} />
      <Stack.Screen name="OnboardingFinal" component={OnboardingFinalScreen} />
    </Stack.Navigator>
  );
}
