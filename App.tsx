import RootNavigator from "@/navigation/RootNavigator";
import { OnboardingProvider } from "@/context/OnboardingProvider";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <OnboardingProvider>
      <RootNavigator />
      <Toast/>
    </OnboardingProvider>
  );
}
