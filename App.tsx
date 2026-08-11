import RootNavigator from "@/navigation/RootNavigator";
import { OnboardingProvider } from "@/context/OnboardingProvider";

export default function App() {
  return (
    <OnboardingProvider>
      <RootNavigator />
    </OnboardingProvider>
  );
}
