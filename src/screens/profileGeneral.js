import { useRoute } from "@react-navigation/native";
import React from "react";
import {Button, View, Text, StatusBar, StyleSheet,SafeAreaView } from "react-native";
import ModalCreateAd from "../components/ads/modalCreateAd";
import ModalUpdatePhotoProfile from "../components/duenoHeroe/modalUpdatePhotoProfile";
import ModalUpdateProfile from "../components/duenoHeroe/modalUpdateProfile";
import ShowProfile from "../components/duenoHeroe/showProfile";
import { useNavigation } from "@react-navigation/native";
export default function Profile() {
  // const route=useRoute()
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <Text>Member Profile</Text>
      <View style={styles.fixToText}>
        <View style={{ margin: 10, flex: 0.5 }}>
          <Button
            color="#f194ff"
            title="My Adv"
            onPress={() => navigation.navigate('MyAdv' )} 
          />
        </View>
      </View>
      <ShowProfile/>
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
  fixToText: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 40,
  },
});