import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, StyleSheet,ImageBackground } from 'react-native'
import ModalLogIn from '../components/duenoHeroe/modalLogin';
import ModalRegister from '../components/duenoHeroe/modalRegister';

const image = { uri: "https://res.cloudinary.com/dr8h8cvn9/image/upload/v1629282331/perrito_fccbfj.jpg" };
export default function LogIn() {
  
<View style={styles.containerBack}>

</View>

  return (
    <View style={styles.container}>
    <ImageBackground 
    source={image} 
    resizeMode="cover" 
    style={styles.image}>
    <Text style={styles.text}>Find your Pet!</Text>
    <View style={styles.container}>
      
      <ModalRegister />
      <ModalLogIn />
      <StatusBar style="auto" />
      </View>
      
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
    
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 40,
    lineHeight: 44,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "pink"
  }
});