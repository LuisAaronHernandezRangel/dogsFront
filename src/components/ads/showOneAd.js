import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, StyleSheet, Button, FlatList } from 'react-native'
import axios from 'axios'
import { useRoute } from '@react-navigation/native'

export default function ShowOneAd() {
  const [advertisement, setAdvertisement] = useState({})
  const route = useRoute()

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'http://192.168.0.12:8000',
      url: `lessons/lesson/${route.params._id}`
      
    })
      .then(({ data }) => setAdvertisement(data))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{advertisement.title}</Text>
          <Text>{advertisement.description}</Text>
          <Text>{advertisement.photo}</Text>
          <Text>{advertisement.city}</Text>
          <Text>{advertisement.type_pet}</Text>
          <Text>{advertisement.name_dog}</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});