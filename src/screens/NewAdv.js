import React, { useEffect, useState } from 'react'
import { View, StatusBar, StyleSheet,ActivityIndicator,SafeAreaView,ScrollView, Image,FlatList } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import axios from 'axios'
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Input,
  Select,
  CheckIcon,
  Button,
  Center,
  Text,
  Switch, 
  HStack,  
  NativeBaseProvider,  
} from "native-base";

export default function NewAdv() {
  const [title, setTitle] = useState("");
  const [name_dog, setName] = useState("");
  const [type_pet, setTypePet] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [time, setTime] = useState('');
  const [terms, setTerms] = useState(false);
  const [cameraRollPermission, setCameraRollPermission] = useState('denied')
  const [cameraPermission, setCameraPermission] = useState(false)
  //const [file, setFile] = useState(null)
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    
    ImagePicker
      .requestMediaLibraryPermissionsAsync()
      .then(({ status }) => setCameraRollPermission(status))

    ImagePicker
      .requestCameraPermissionsAsync()
      .then(({ status }) => setCameraPermission(status === 'granted'))
  }, [])

  // function selectFile(e) {
  //   setFile(e.target.files[0])
  // }

  async function handlePickImage() {
    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    })
console.log(data)
    if(!data.cancelled) {
      setImage(data)
    }
  }
  async function handleTakePicture() {
    const data = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      
    })

    if(!data.cancelled) {
      setImage(data)
    }
  }

  async function handleSubmit(e) {
    //e.preventDefault()
    
    const data = new FormData()
    
    data.append('title', title)
    data.append('name_dog', name_dog)
    data.append('type_pet', type_pet)
    data.append('description', description)
    data.append('city', city)
    data.append('contact', contact)

    // data.append('time', time)
    // data.append('terms', terms)
    if(image) {
      data.append('image', {uri: image.uri, name:"image", type:"image/jpg"})
    }
    //vide/mp4
    setLoading(true);
    const token = await AsyncStorage.getItem("token");
    console.log("soylafototoken", token);
     axios({
      method: "POST",
      baseURL: "http://192.168.100.10:8000",
      url: "/advertisements/",//reviisar la ruta y el controlador 
      data, //{ title, description, category, image },
      headers: {
         Authorization: `token ${token}`,
         'Content-Type': 'multipart/form-data',
      }
    })
    .then(({ data }) => {
      console.log(data);
      navigation.navigate("Advertisement", {
        _id: data._id,
        title: data.title,
        name_dog:data.name_dog,
        type_pet:data.type_pet,
        description:data.description,
        city:data.city,
        image: data.image,
        contact:data.contact
      });
    })
    .catch((e) => {
      setError(true);
      console.log("error", e.message);
    })
    .finally(() => {
      setLoading(false);
    });
  }
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }
  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>opsss!!intenta de nuevo mas tarde </Text>
      </SafeAreaView>
    );
  }

  return (
    
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
      <NativeBaseProvider>
      <Text fontSize="3xl" bold>Create New Post</Text>
      <Center>
      <Image
            style={styles.image2}
            source={{ uri:"https://res.cloudinary.com/dr8h8cvn9/image/upload/v1629274669/perrowoof_w0wkkb.jpg"}}   
      /></Center>              
          <Text>Title</Text>
              <Input
                placeholder="title"
                onChangeText={(value) => setTitle(value)}
                value={title}
              />
              <Text>Name Dog</Text>
              <Input
                placeholder="Name of your Dog"
                onChangeText={(value) => setName(value)}
                value={name_dog}
              />
              <Text>Type Pet</Text>
              <Input
                placeholder="maltes/husky/golden"
                onChangeText={(value) => setTypePet(value)}
                value={type_pet}
              />
              <Text>Description</Text>
              <Input
                placeholder="description"
                onChangeText={(value) => setDescription(value)}
                value={description}
              />
              <Text>City</Text>
              
               <Select
                selectedValue={city}
                minWidth={200}
                accessibilityLabel="Pick one"
                placeholder="Where you lost it?"
                onValueChange={(itemValue) => setCity(itemValue)}
                _selectedItem={{
                  bg: "cyan.600",
                  endIcon: <CheckIcon size={4} />,
                }}
              >
                <Select.Item label="Acapulco" value="Acapulco" />
                <Select.Item label="Pachuca" value="Pachuca" />
                <Select.Item label="Guadalajara" value="Guadalajara" />
                <Select.Item label="Mexico" value="Mexico" />
        
              </Select>
              <Text>contact</Text>
              <Input
                placeholder="phone/email/facebook"
                onChangeText={(value) => setContact(value)}
                value={contact}
              />
              <Text></Text>
    </NativeBaseProvider> 
    
      <View style={styles.container}>
      {cameraPermission ? (
        <Button
        variant="outline"
         
          onPress={handleTakePicture}
        >Take a Picture</Button>
      ) : (
        <Text>Please allow the app to access camera in your settings</Text>
      )}<Text></Text>
      {cameraRollPermission === 'granted' ? (
        <Button
          variant="outline"
          onPress={handlePickImage}
        >Pick an Image</Button>
      ) : (
        <Text>Please allow the app to access photos in your settings</Text>
      )}
      {!!image && (
        <Image
          style={styles.image}
          source={{ uri: image.uri }}// url
        />
      )}
      <Text></Text>
      <Button 
      onPress={handleSubmit}
      color="cyan.500"
     
      >Create Post</Button>
      <StatusBar style="auto" />
    </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 300,
  },
  scroll:{
    margin:10,
    backgroundColor: '#fff',
  },
  image2: {
    width: 100,
    height: 100,
  }
});