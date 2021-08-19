import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert,StyleSheet, Text, View, TextInput, Button, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
//import Slider from '@react-native-community/slider';
import axios from 'axios'
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UpdateAdvertisement() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [city, setCity] = useState()
    const [time, setTime] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const route = useRoute()
    console.log(route)
    const navigation = useNavigation()
    //const [photo, setPhoto] = useState('')
    
    async function handleSubmit() {
        setLoading(true)
        const token = await AsyncStorage.getItem('token')
        console.log('soyeltoken', token)
        axios({
          method: 'PUT',
          baseURL: 'http://192.168.20.21:8000',
          url: '/lessons/',
          data: { title, description, category, time },
          headers: {
            Authorization: `token ${token}`
          }
        })
          .then(({ data }) => {
            console.log(data)
            navigation.navigate('advOne', {
              _id: data._id,
              title: data.title,
            })
          })
          .catch((e) => {
            setError(true)
            console.log(e.message)
          })
          .finally(() => {
            setLoading(false)
          })
    
      }
    
    if (loading) {
      return (
        <SafeAreaView style={styles.container}>
          <ActivityIndicator size="large" />
        </SafeAreaView>
      )
    }
    if (error) {
      return (
        <SafeAreaView style={styles.container}>
          <Text>Try Later</Text>
        </SafeAreaView>
      )
    }
   
        console.log({ title, description, city, time, terms })
    

    return (
        <View style={styles.container}>
            <Text>Title</Text>
            <TextInput
                placeholder="title"
                onChangeText={value => setTitle(value)}
                value={title}
            />
            <Text>Description</Text>
            <TextInput
                placeholder="description"
                onChangeText={value => setDescription(value)}
                value={description}
            />
						<Picker
							onValueChange={value => setCity(value)}
							selectedValue={city}
						>
							<Picker.Item label="Mexico" value="mexico" />
							<Picker.Item label="Hidalgo" value="hidalgo" />
							<Picker.Item label="Jalisco" value="jalisco" />
							<Picker.Item label="Guerrero" value="guerrero" />
						</Picker>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={10}
                maximumValue={50}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onValueChange={time => setTime(time)}
                value={time}
            />
            {/* <TextInput
        placeholder="length"
        onChangeText={time => setTime(time)}
        value={time}
        keyboardType="number-pad"
      />
       <TextInput
        placeholder="photo"
        onChangeText={value => setPhoto(value)}
        value={photo}
      />  */}
    
            <Button
                title="Update"
                onPress={handleSubmit}
            />
            <StatusBar style="auto" />
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