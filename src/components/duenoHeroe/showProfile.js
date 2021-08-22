import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, StyleSheet,SafeAreaView,ActivityIndicator,Image} from 'react-native'
import axios from 'axios'
import { useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ShowProfile() {
  
  const [profile, setProfile] = useState({})
  console.log("profileeeeeeee", profile)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getData = async () => await AsyncStorage.getItem('token')

  useEffect(() => {
    async function loadProfile() {
      setLoading(true)
      //const getData = async () => await AsyncStorage.getItem('token') 
      const token = await getData()
      console.log('el mismo token', token)
      console.log('data', getData)
      axios({
        method: 'GET',
        baseURL: 'http://192.168.100.10:8000',
        url: '/dueno/',
        headers: {
          Authorization: `Token ${token}`
        }
      })
        .then(({ data }) => {
          setProfile(data)
          console.log("esta es mi data",data)
        })
        .catch((error) => {
          setError(true)
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
          console.log('ya pase por aqui', token)
        })

    }
    loadProfile()
  }, [])

 
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    )
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>oopp! cant update info</Text>
      </SafeAreaView>
    )
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{profile.userName}</Text>
          <Text>{profile.description}</Text>
          <Text>{profile.email}</Text>
          <Image
            style={styles.image}
            source={{ uri:profile.image }}
          
          />
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