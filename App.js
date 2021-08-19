// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, FlatList, SafeAreaView, ActivityIndicator} from 'react-native';
// //import { StatusBar } from 'expo-status-bar';
// import { useEffect, useState } from 'react';
// import axios from 'axios'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

// export default function app() {
//   const [lessons, setLessons] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(false)

//   useEffect(() => {
//     setLoading(true)
//     axios({
//       method: 'GET',
//       baseURL: 'http://localhost:8000',
//       url: '/advertisements/prueba'
//     })
//       .then(({ data }) => {
//         setLessons(data)
//       })
//       .catch(() => {
//         setError(true)
//       })
//       .finally(() => {
//         setLoading(false)
//       })
//   }, [])

//   useEffect(() => {
//       console.log(lessons)
//   },[lessons])

//   if(loading) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <ActivityIndicator size="large" />
//       </SafeAreaView>
//     )
//   }
//   if(error) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text>Something went wrong</Text>
//       </SafeAreaView>
//     )
//   }
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         style={styles.list}
//         data={lessons}
//         renderItem={({ item }) => (
//           <View>
//             <Text style={styles.title}>{item.title}</Text>
//           </View>
//         )}
//         keyExtractor={(item) => `${item._id}`}
//       />
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   list: {
//     paddingHorizontal: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold'
//   }
// });
// // export default function App() {
// //   function handlePress() {
// //     console.log('hola')
// //     Alert.alert('como estas?') 
// //   }
// //   return (
// //     <View style={styles.container}>
// //      <TouchableOpacity >
// //        <Text>hola </Text>
// //        </TouchableOpacity>
      
// //       <Button onPress={handlePress} title="click"/>
// //       <StatusBar style="auto" />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//https://res.cloudinary.com/dr8h8cvn9/image/upload/v1629274669/woof_nruew4.jpg