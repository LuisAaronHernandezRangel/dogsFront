import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ModalLogIn from '../components/duenoHeroe/modalLogin';
import ModalRegister from '../components/duenoHeroe/modalRegister';

export default function LogIn() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Pets</Text>
      <ModalRegister />
      <ModalLogIn />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});