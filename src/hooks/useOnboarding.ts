import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ONBOARDING_KEY = "hasCompletedOnboarding";
const JWT_TOKEN = "JWT_token";

export function useOnboarding() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStatus = async () => {
      try {
        const onboardingValue = await AsyncStorage.getItem(ONBOARDING_KEY);

        const token = await AsyncStorage.getItem(JWT_TOKEN);

        setHasCompletedOnboarding(onboardingValue === "true");
        setIsSignedIn(!!token);
        console.log("Initial isSignedIn: ", isSignedIn);
        console.log("Initial hasCompletedOnboarding: ", hasCompletedOnboarding);
      } catch (error) {
        console.error("Failed to load app status", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStatus();
  }, []);

  useEffect(() => {
    console.log("isSignedIn changed to:", isSignedIn);
  }, [isSignedIn]);

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem(ONBOARDING_KEY, "true");
      setHasCompletedOnboarding(true);
      console.log("ONBOARDING_KEY:" + hasCompletedOnboarding);
    } catch (error) {
      console.error("Failed to save onboarding status", error);
    }
  };

  const completeSignIn = async (token: string) => {
    try {
      await AsyncStorage.setItem(JWT_TOKEN, JSON.stringify(token));
      setIsSignedIn(true);
      console.log("Signed in successfully");
    } catch (error) {
      console.error("Failed to save sign in status", error);
    }
  };

  const completeSignOut = async () => {
    try {
      await AsyncStorage.removeItem(JWT_TOKEN);
      setIsSignedIn(false);
      console.log("isSignedIn value set to ", isSignedIn);
    } catch (error) {
      console.error("Failed to sign out", error);
    }
  };

  return {
    hasCompletedOnboarding,
    isLoading,
    isSignedIn,
    completeOnboarding,
    completeSignIn,
    completeSignOut,
  };
}
