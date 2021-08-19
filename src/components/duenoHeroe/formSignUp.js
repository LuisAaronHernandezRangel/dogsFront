import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button , SafeAreaView , ActivityIndicator,Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const [userName, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigation = useNavigation()
  
  function handleSubmit() {

    const storeData = async (value) => {
      try {
      await AsyncStorage.setItem('token', value)
      const token =  await AsyncStorage.getItem('token')
      console.log('luishiiimiraaa', token)
     } catch (error) {
        console.log(error)
      }
    }

    setLoading(true)
    axios({
      method: 'POST',
      baseURL: 'http://192.168.100.10:8000',
      url: '/dueno/signup',
      data : { userName, email, password }
    })
    .then(({ data }) => {
      console.log("perro" + data)
      if (data.token){
        storeData(data.token)
        navigation.navigate('Home')
      } else {
        Alert.alert("Inicia sesión/crea tu cuenta");
      }
      // setName(userName)
      // setEmail(email)
      // setPassword(password)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
    console.log({ userName, email, password })
  }

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
        <Text>oopp! can`t create user</Text>
      </SafeAreaView>
    )
  }



// return async function nose (userName, email, password ) {
//     try {
//       setLoading(true)
//      // setLoading({ loading: true })
//       const { data } = await axios({
//         method: 'POST',
//         baseURL: 'http://192.168.20.21:8000',
//         url: '/teacher/signup',
//         data : { userName, email, password }
//       })
//     } catch (error) {
//       setError({
//         error: error.response.data.message,
//         loading: false
//     })
//    } finally {
//       setLoading(false)
//   } 

//     // // export function registerRoomie(name, lastName, email, password, age, history) {
//     // //   return async function (dispatch) {
//     //    // try {
//     //       const { data } = await axios({
//     //         method: 'POST',
//     //         baseURL: process.env.REACT_APP_SERVER_URL,
//     //         url: '/roomie/signup',
//     //         data: { name, lastName, email, password, age }
//     //       })
//     //       localStorage.setItem("token", data.token);
//     //       dispatch({ type: REGISTER_SUCCESS, payload: data })
//     //       history.push('/')
//     //     } catch (error) {
//     //       dispatch({ type: REGISTER_ERROR, payload: error.message })
//     //     } finally {
//     //       dispatch({ type: REGISTER_FINISHED })
//     //     }
//     //   }
//     // };

//     // function handleSubmit(e) {
//     //   axios({
     
//     //     method: 'POST',
//     //     baseURL: 'http://192.168.20.21:8000',
//     //     url: '/teacher/signup'
//     //   })
//     //     .then(({ data }) => {
//     //       console.log(data)
//     //       setName(userName)
//     //       setEmail(email)
//     //       setPassword(password)
//     //     })
//     //     .catch(() => {
//     //       setError(true)
//     //     })
//     //     .finally(() => {
//     //       setLoading(false)
//     //     })

// // EJEMPLO PARA CUANDO SE HAGA EL HANDLE
// // function handleSubmit(e) {
// //   e.preventDefault();
// //   dispatch(updateProfile(profile));
// //   setShow(false);
// // }

// function handleSubmit() {
//   console.log({ userName, email, password })
// }

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
        placeholder="userName"
        onChangeText={value => setName(value)}
        value={userName}
      />
       <Text>Email</Text>
      <TextInput
        placeholder="example@example.com"
        onChangeText={value => setEmail(value)}
        value={email}
        keyboardType="email-address"
      />
       <Text>Password</Text>
      <TextInput
        placeholder="password"
        onChangeText={value => setPassword(value)}
        value={password}
        secureTextEntry
      />
      <Button
        title="Create User"
        onPress={handleSubmit}
      />
    </View>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });