import React, { useEffect, useState } from 'react'
import { View,Image, StatusBar, StyleSheet,FlatList } from 'react-native'
import axios from 'axios'
import { useRoute } from '@react-navigation/native'
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

export default function ShowOneAd() {
  const [advertisement, setAdvertisement] = useState({})
  const route = useRoute()

  console.log(route.params)

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'http://192.168.100.10:8000',
      url: `advertisements/seeAd/${route.params._id}`
      
    })
      .then(({ data }) => setAdvertisement(data))
  }, [])

  return (
    <View style={styles.container}>
      {/* <Image
            style={styles.image2}
            source={{ uri:"https://res.cloudinary.com/dr8h8cvn9/image/upload/v1629274669/perrowoof_w0wkkb.jpg"}}   
      /> */}
      <Text style={styles.title}>{advertisement.title}</Text>
          {/* <Text>{advertisement.description}</Text> */}
          <Image
            style={styles.image}
            source={{ uri: advertisement.image }}
          
          />
         <Center>
          <Flex direction="row" p={2} >
          <Text fontSize="md"><Text bold> NAME: </Text>{advertisement.name_dog}  </Text>
          <Divider size={3} my={1} orientation="vertical" />
          <Text fontSize="md"><Text bold>  CITY: </Text>{advertisement.city}</Text>
          </Flex>
          </Center>
          <Text fontSize="md"><Text bold>CONTACT: </Text>{advertisement.contact}</Text>
          <Text fontSize="md"><Text bold>DESCRIPTION: </Text>{advertisement.description}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:300,
    backgroundColor: "white",
    // alignItems: 'center',

    // justifyContent: 'center',
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
  },
});