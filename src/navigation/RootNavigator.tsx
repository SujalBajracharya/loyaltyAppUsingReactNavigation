import { NavigationContainer } from "@react-navigation/native";

import OnboardingNavigator from "@/navigation/OnboardingNavigator";
import AuthNavigator from "@/navigation/AuthNavigator";
import TabNavigator from "@/navigation/TabNavigator"
import { useOnboarding } from "@/context/OnboardingProvider";

export default function RootNavigator() {
  const { hasCompletedOnboarding, isSignedIn } = useOnboarding();

  return (
    <NavigationContainer>
      {hasCompletedOnboarding ? (
        isSignedIn ? (
          <TabNavigator />
        ) : (
          <AuthNavigator />
        )
      ) : (
        <OnboardingNavigator />
      )}
    </NavigationContainer>
  );
}
