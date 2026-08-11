import { MainStackParamList } from "@/navigation/TabNavigator";
import QR from "@assets/qrcode.svg";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const FloatingQRButton = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const styles = StyleSheet.create({
    fab: {
      position: "absolute",
      right: 20,
      bottom: 10,
      width: 89,
      height: 89,
      borderRadius: 36,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0px 4px 12px #0088D666",
    },
  });
  return (
    <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate("QR")}>
      <QR width="45" height="45" />
    </TouchableOpacity>
  );
};

export default FloatingQRButton;
