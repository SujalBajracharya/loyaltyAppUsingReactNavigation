import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BenefitCard from "@/components/benefitCard";
import Pagination from "@/components/pagination";
import styles from "@/styles/styles";
import AppText from "@/components/AppText";
import Button from "@/components/Button";
import Icon1 from "@assets/OnboardingLogo1.svg";
import Icon2 from "@assets/OnboardingLogo2.svg";
import Icon3 from "@assets/OnboardingLogo3.svg";
import { useOnboarding } from "@/hooks/useOnboarding";

export default function OnboardingScreen({ navigation }: { navigation: any }) {
  const {completeOnboarding} = useOnboarding();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View
        style={{
          flex: 1,
          marginTop: 78,
          gap: 72,
        }}
      >
        {/* Title */}
        <View style={styles.header}>
          <AppText
            variant="bold"
            size="l"
            color="textDark"
            style={{ textAlign: "center", fontSize: 28, fontWeight: "600" }}
          >
            Your Benefits at a{"\n"}Glance
          </AppText>

          <AppText
            variant="regular"
            size="s"
            color="textLight"
            style={{ textAlign: "center", fontSize: 14, fontWeight: "400" }}
          >
            Get points, rewards and exclusive deals{"\n"}
            when you join
          </AppText>
        </View>

        {/* Cards */}
        <View style={{ gap: 18 }}>
          <BenefitCard
            title="Earn Points Instantly"
            icon={<Icon1 width={28} height={28} />}
          />
          <BenefitCard
            title="Redeem Exclusive Rewards"
            icon={<Icon2 width={28} height={28} />}
          />
          <BenefitCard
            title="Access Member-Only Deals"
            icon={<Icon3 width={28} height={28} />}
          />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={{ marginTop: 68, alignItems: "center" }}>
          <Pagination total={3} activeIndex={0} />
        </View>

        <View style={{ marginTop: 60, gap: 0 }}>
          <Button
            title="Continue"
            onPress={() => navigation.navigate("Howitworks")}
          />
          <Button
            title="Skip"
            variant="ghost"
            onPress={completeOnboarding}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
