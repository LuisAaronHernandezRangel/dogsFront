import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import ShowAllAds from '../components/ads/showAllAds';



export default function AdvsAll() {
  return (
    <View style={styles.container}>
      <Text>Advertisements</Text>
    <ShowAllAds/>
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