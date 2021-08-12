import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import ModalCreateAd from "../components/ads/modalCreateAd";
import ModalUpdatePhotoProfile from "../components/duenoHeroe/modalUpdatePhotoProfile";
import ModalUpdateProfile from "../components/duenoHeroe/modalUpdateProfile";
import ShowProfile from "../components/duenoHeroe/showProfile";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Member Profile</Text>
      <ShowProfile />
      <ModalUpdateProfile/>
      <ModalUpdatePhotoProfile/>
      <ModalCreateAd />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});