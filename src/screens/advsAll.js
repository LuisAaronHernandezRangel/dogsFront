import React from 'react'
import { View, Text, StatusBar, StyleSheet, Image} from 'react-native'
import ShowAllAds from '../components/ads/showAllAds';



export default function AdvsAll() {
  return (
    <View style={styles.container}>
      <Image
            style={styles.image2}
            source={{ uri:"https://res.cloudinary.com/dr8h8cvn9/image/upload/v1629274669/perrowoof_w0wkkb.jpg"}}   
      />
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
  image2: {
    width: 50,
    height: 50,
  }
});