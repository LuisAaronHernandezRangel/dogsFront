import React from 'react'
import { View, Text, StatusBar, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ShowAllAds from '../components/ads/showAllAds';
import CardsCategory from '../components/cardsCategorys'
// export default function Home({ navigation }) {
export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <View style={styles.fixToText}>
      <View  style={{ margin: 5, flex: 1 }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      </View>       
      <View style={{ margin: 5, flex: 1}}>
       <Button
        title="Go to Ads"
        onPress={() => navigation.navigate('Advertisements')}
      />
      </View>
      </View>
      <CardsCategory/>
      <ShowAllAds/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 16,
    backgroundColor: '#fff',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20
  },
});