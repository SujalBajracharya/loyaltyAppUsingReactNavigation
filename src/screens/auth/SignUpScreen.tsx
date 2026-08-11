import Email from "@assets/email.svg";
import Google from "@assets/google.svg";
import Button from "@/components/Button";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../../components/AppText";
import styles from "../../styles/styles";

export default function SignUpScreen({ navigation }: { navigation: any }) {
  const loginStyles = StyleSheet.create({
    link: {
      color: "#0E9384",
      textDecorationLine: "underline",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Top */}
      <View
        style={{
          flex: 1,
          marginTop: 10,
        }}
      >
        {/* sign in button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("SigninForm")}
          style={{ padding: 10 }}
        >
          <AppText
            variant="medium"
            size="s"
            color="textDark"
            style={{ textAlign: "right", fontSize: 14, fontWeight: "400" }}
          >
            Sign in
          </AppText>
        </TouchableOpacity>

        {/* header */}
        <View style={styles.header}>
          {/* logo */}
          <Image
            source={require("@assets/logo.png")}
            style={{
              width: 100,
              height: 100,
              alignSelf: "center",
              marginTop: 20,
            }}
          />

          <AppText
            variant="bold"
            size="l"
            color="textDark"
            style={{ textAlign: "center", fontSize: 28, fontWeight: "600" }}
          >
            Sign in or Sign up using{"\n"}your Account
          </AppText>
        </View>

        {/* Buttons */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: 24,
            paddingBottom: 40,
          }}
        >
          {/* OAuth Buttons */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: 14,
              width: "100%",
            }}
          >
            <Button
              icon={<Google width={24} height={24} />}
              style={{
                borderRadius: 24,
                width: "100%",
                borderWidth: 1,
                borderColor: "#DADADA",
                borderStyle: "solid",
              }}
              title="Continue with google"
              variant="ghost"
            />
            <Button
              icon={<Email width={24} height={24} />}
              style={{
                borderRadius: 24,
                width: "100%",
                borderWidth: 1,
                borderColor: "#DADADA",
                borderStyle: "solid",
              }}
              title="Continue with email"
              variant="ghost"
            />
          </View>

          {/* OR */}
          <AppText variant="regular" size="s" color="textLight">
            OR
          </AppText>

          {/* Sign up Button */}
          <Button
            title="Sign up"
            variant="primary"
            onPress={() => navigation.navigate("NextPage")}
          />

          {/* Terms and Conditions */}
          <AppText
            variant="regular"
            size="s"
            color="textLight"
            style={{ fontWeight: "400", textAlign: "center" }}
          >
            By continuing with sign up , you agree to our{" "}
            <Text
              style={loginStyles.link}
              onPress={() => navigation.navigate("SigninForm")}
            >
              Privacy Policy
            </Text>{" "}
            <Text
              style={loginStyles.link}
              onPress={() => navigation.navigate("SigninForm")}
            >
              Cookie Policy
            </Text>{" "}
            and
            <Text
              style={loginStyles.link}
              onPress={() => navigation.navigate("SigninForm")}
            >
              {" "}
              Member Agreement
            </Text>{" "}
          </AppText>
        </View>
      </View>
    </SafeAreaView>
  );
}
