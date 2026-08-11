import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ONBOARDING_KEY = "hasCompletedOnboarding";
const JWT_TOKEN = "JWT_token";

type OnboardingContextType = {
  hasCompletedOnboarding: boolean;
  isSignedIn: boolean;
  isLoading: boolean;
  completeOnboarding: () => Promise<void>;
  completeSignIn: (token: string) => Promise<void>;
  completeSignOut: () => Promise<void>;
};

const OnboardingContext = createContext<
  OnboardingContextType | undefined
>(undefined);

export function OnboardingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] =
    useState(false);

  const [isSignedIn, setIsSignedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStatus = async () => {
      try {
        const onboardingValue =
          await AsyncStorage.getItem(ONBOARDING_KEY);

        const token =
          await AsyncStorage.getItem(JWT_TOKEN);

        setHasCompletedOnboarding(onboardingValue === "true");
        setIsSignedIn(!!token);
      } catch (error) {
        console.error("Failed to load status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStatus();
  }, []);

  const completeOnboarding = async () => {
    await AsyncStorage.setItem(ONBOARDING_KEY, "true");

    setHasCompletedOnboarding(true);
  };

  const completeSignIn = async (token: string) => {
    await AsyncStorage.setItem(JWT_TOKEN, token);

    setIsSignedIn(true);
  };

  const completeSignOut = async () => {
    await AsyncStorage.removeItem(JWT_TOKEN);

    setIsSignedIn(false);
  };

  return (
    <OnboardingContext.Provider
      value={{
        hasCompletedOnboarding,
        isSignedIn,
        isLoading,
        completeOnboarding,
        completeSignIn,
        completeSignOut,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error(
      "useOnboarding must be used inside OnboardingProvider"
    );
  }

  return context;
}