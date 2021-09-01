import React from 'react'
import { View, StatusBar, StyleSheet,Image } from 'react-native'
import ShowAdvAndDueno from '../components/ads/ShowAdvAndDueno';
import { useNavigation } from "@react-navigation/native";
import {

  Text
} from "native-base";


//Modal updateLesson debe renderizara solo cuando tenga toquen
export default function MyAdv() {
  return (
    <View style={styles.container}>
      {/* <Text fontSize="3xl" bold>My Posts</Text> */}
      <Image
            style={styles.image2}
            source={{ uri:"https://res.cloudinary.com/dr8h8cvn9/image/upload/v1629274669/perrowoof_w0wkkb.jpg"}}   
      />
      <ShowAdvAndDueno/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image2: {
    width: 100,
    height: 100,
  }
});