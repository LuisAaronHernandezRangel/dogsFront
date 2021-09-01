import React from 'react'
import { View, Text, StatusBar, StyleSheet,Image } from 'react-native'
import ModalUpdateAd from '../components/ads/modalUpdateAd';
import ShowOneAd from '../components/ads/showOneAd';
import ModalCreateComments from '../components/ads/modalCreateComments';

//Modal updateLesson debe renderizara solo cuando tenga toquen
export default function AdvOne() {
  return (
    <View style={styles.container}>
      <Image
            style={styles.image2}
            source={{ uri:"https://res.cloudinary.com/dr8h8cvn9/image/upload/v1629274669/perrowoof_w0wkkb.jpg"}}   
      />
      <ShowOneAd/>
      {/* <ModalUpdateAd/>
      <ModalCreateComments/> */}
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