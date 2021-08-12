import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import ModalUpdateAd from '../components/ads/modalUpdateAd';
import ShowOneAd from '../components/ads/showOneAd';


//Modal updateLesson debe renderizara solo cuando tenga toquen
export default function AdvOne() {
  return (
    <View style={styles.container}>
      <Text>Advertisement</Text>
      <ShowOneAd/>
      <ModalUpdateAd/>
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
});