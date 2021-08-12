//192.168.0.12
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';


export default function ShowAllAds() {

  const [advertisements, setAdvertisements] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    setLoading(true)
    axios({
 
      method: 'GET',
      baseURL: 'http://192.168.0.12:8000',
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
       <Text>hola</Text>
     <FlatList
      style={styles.list}
       data={advertisements}
      renderItem={({ item }) => (
        <View>
         <Text style={styles.title}>{item.title}</Text>
          <Text>{item.photo}</Text>
          <Text>{item.name_dog}</Text>
          <Text>{item.comments}</Text>
          <Text>{item.city}</Text>
          <Button
              title="View More"
              onPress={() => navigation.navigate('Advertisement', {
                id: item.id,
                title,
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
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});