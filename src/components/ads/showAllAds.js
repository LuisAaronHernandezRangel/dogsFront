//192.168.0.12
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import {
  Modal,
  Button,
  Divider,
  Text,
  Flex,
  Input,
  Center,
  NativeBaseProvider,
  Heading
} from "native-base";
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
          <Center>
          <Flex direction="row" p={2} >
          <Text fontSize="md"><Text bold> NAME: </Text>{item.name_dog}  </Text>
          <Divider size={3} my={1} orientation="vertical" />
          <Text fontSize="md"><Text bold>  CITY: </Text>{item.city}</Text>
          </Flex>
          </Center>
          <Text fontSize="md"><Text bold>CONTACT: </Text>{item.contact}</Text>
          <Text fontSize="md"><Text bold>DESCRIPTION: </Text>{item.description}</Text>
          <Button
              onPress={() => navigation.navigate('Advertisement', {
                _id: item._id,
                title: item.title
              })}
            > View More </Button>
          <Divider size={1} my={2} />
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
    width:300,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    //paddingHorizontal: 10,
    width: 300,
    textAlign:"center",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    width: 300,
    height: 300,
    marginTop:10,
  }
  
});