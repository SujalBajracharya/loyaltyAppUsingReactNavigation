import { NavigationContainer } from "@react-navigation/native";

import OnboardingNavigator from "@/navigation/OnboardingNavigator";
import AuthNavigator from "@/navigation/AuthNavigator";
import MainNavigator from "@/navigation/MainNavigation"
import { useOnboarding } from "@/context/OnboardingProvider";

export default function RootNavigator() {
  const { hasCompletedOnboarding, isSignedIn } = useOnboarding();

  return (
    <NavigationContainer>
      {hasCompletedOnboarding ? (
        isSignedIn ? (
          <MainNavigator />
        ) : (
          <AuthNavigator />
        )
      ) : (
        <OnboardingNavigator />
      )}
    </NavigationContainer>
  );
}
