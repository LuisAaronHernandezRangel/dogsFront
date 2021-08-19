import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import ShowAdvAndDueno from '../components/ads/ShowAdvAndDueno';
import { useNavigation } from "@react-navigation/native";


//Modal updateLesson debe renderizara solo cuando tenga toquen
export default function MyAdv() {
  return (
    <View style={styles.container}>
      <Text> My Session</Text>
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
});