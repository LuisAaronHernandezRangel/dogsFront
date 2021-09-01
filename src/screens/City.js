import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native'
import { StyleSheet, View, FlatList, SafeAreaView, ActivityIndicator,Image} from 'react-native';
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

export default function FilterCategorys() {

    const [ads, setAds] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const route = useRoute()
    console.log(route)
    const navigation = useNavigation()

    console.log(route.params)
    let citys = route.params._city
    
    useEffect(() => {
    setLoading(true)
    axios({
 
      method: 'GET',
      baseURL: 'http://192.168.100.10:8000',
      url: `/advertisements/?city=${citys}`,
    })
      .then(({ data }) => {
        console.log(data)
        setAds(data)
      })
      .catch(() => {
        setError(true)
        console.log(e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])


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
        <Text>oopp! cant update info</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
     <FlatList
       style={styles.list}
       data={ads}
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
      keyExtractor={item => `${item._id}`} 
    />
    <StatusBar style="auto" /> 
  </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
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
    width: 400,
    height: 300,
    margin: 10,
  }
});