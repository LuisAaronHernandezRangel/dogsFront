//192.168.0.12
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button,Image, StyleSheet, Text, View, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
// import advOne from '../../screens/advOne'

export default function ShowAllAds() {

  const [advertisements, setAdvertisements] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    setLoading(true)
    axios({
 
      method: 'GET',
      baseURL: 'http://192.168.100.10:8000',
      url: '/advertisements/todos',
      
    })
      .then(({ data }) => {
        console.log(data)
        setAdvertisements(data)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
//   useEffect(() => {
//     console.log(data)
//   },[advertisements])

  if(loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    )
  }
  if(error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>va mal</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
     <FlatList
      style={styles.list}
       data={advertisements}
      renderItem={({ item }) => (
        <View>
         <Text style={styles.title}>{item.title}</Text>
         <Image
              style={styles.image}
              //source={ item.image }// url
              source={{ uri: item.image }}
            />
          <Text>{item.name_dog}</Text>
          {/* <Text>{item.comments}</Text> */}
          <Text>{item.city}</Text>
          <Button
              title="View More"
              onPress={() => navigation.navigate('Advertisement', {
                _id: item._id,
                title: item.title
              })}
            /> 
        </View>
      )}
      keyExtractor={(item) => `${item._id}`} 
    />
    <StatusBar style="auto" /> 
  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:250,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    //paddingHorizontal: 10,
    width: 200,
    textAlign:"center",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  image: {
    width: 400,
    height: 300,
  }
});