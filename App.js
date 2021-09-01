
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home'
import About from './src/screens/About'
import ProfileGeneral from './src/screens/profileGeneral'
import LogIn from './src/screens/login';
import AdvsAll from './src/screens/advsAll';
import AdvOne from './src/screens/advOne';
import City from "./src/screens/City";
import MyAdv from "./src/screens/MyAdv";
import NewAdv from "./src/screens/NewAdv";
import {  NativeBaseProvider } from "native-base"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Profile" component={ProfileGeneral} /> 
        <Stack.Screen name="Advertisements" component={AdvsAll} />
        <Stack.Screen name="Advertisement" component={AdvOne} /> 
        <Stack.Screen name="City" component={City} />
        <Stack.Screen name="MyAdv" component={MyAdv} />
        <Stack.Screen name="NewAdv" component={NewAdv} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}
//https://res.cloudinary.com/dr8h8cvn9/image/upload/v1629274669/woof_nruew4.jpg