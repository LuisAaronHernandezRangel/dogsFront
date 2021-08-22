import { useRoute } from "@react-navigation/native";
import React from "react";
import {View, Text, StatusBar, StyleSheet,SafeAreaView } from "react-native";
import ModalCreateAd from "../components/ads/modalCreateAd";
import ModalUpdatePhotoProfile from "../components/duenoHeroe/modalUpdatePhotoProfile";
import ModalUpdateProfile from "../components/duenoHeroe/modalUpdateProfile";
import ShowProfile from "../components/duenoHeroe/showProfile";
import { useNavigation } from "@react-navigation/native";
import {
  Modal,
  Button,
  Input,
  Center,
  NativeBaseProvider,
  Heading
} from "native-base";


export default function Profile() {
  // const route=useRoute()
  const navigation=useNavigation()
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <Text>Members Profile</Text>
      <View style={styles.fixToText}>
        <View style={{ margin: 10, flex: 0.5 }}>
          <Button
            
            onPress={() => navigation.navigate('MyAdv' )} 
          >My Adv</Button>
        </View>
        <View style={{ margin: 10, flex: 0.5 }}>
          <Button
          onPress={() => navigation.navigate('NewAdv')}>Create Adv</Button>
         </View>  
      </View>
      <ShowProfile/>
      <ModalUpdateProfile/>
      <ModalUpdatePhotoProfile/>
      <StatusBar style="auto" />
    </View>
    </NativeBaseProvider>
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