import { useRoute } from "@react-navigation/native";
import React from "react";
import {View, StatusBar, StyleSheet,SafeAreaView } from "react-native";
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
  Image,
  NativeBaseProvider,
  Heading,
  Text
} from "native-base";


export default function Profile() {
  // const route=useRoute()
  const navigation=useNavigation()
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
    <Text fontSize="3xl" bold>WELCOME!</Text>
    <ShowProfile/>
    <Image
            style={styles.image}
            source={{ uri:"https://res.cloudinary.com/dr8h8cvn9/image/upload/v1629514724/WhatsApp_Image_2021-08-15_at_5.02.39_PM_uzi7bx.jpg"}}
          
    />
    
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
      
      {/* <ModalUpdateProfile/>
      <ModalUpdatePhotoProfile/> */}
      <StatusBar style="auto" />
      <Image
            style={styles.image}
            source={{ uri:"https://res.cloudinary.com/dr8h8cvn9/image/upload/v1629274669/perrowoof_w0wkkb.jpg"}}   
    />
    </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 30,
  },
  image: {
    width: 200,
    height: 200,
  }
});