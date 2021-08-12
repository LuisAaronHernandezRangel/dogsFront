import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker'

export default function CreateAdvertisement() {
  const [title, setTitle] = useState('')
	const [name_dog, setNameDog] = useState('')
	const [type_pet, setTypePet] = useState('')
  const [description, setDescription] = useState('')
  // const [photos, setPhotos] = useState()
  const [time, setTime] = useState(0)
  //const [photo, setPhoto] = useState('')
  const [terms, setTerms] = useState(false)
	const [city, setCity] = useState(false)

  function handleSubmit() {
    console.log({ title, name_dog,type_pet, description,photos, time,city, terms })
  }

  return (
    <View style={styles.container}>
      <Text>Title</Text>
      <TextInput
        placeholder="title"
        onChangeText={value => setTitle(value)}
        value={title}
      />
      <Text>Name dog</Text>
      <TextInput
        placeholder="name_dog"
        onChangeText={value => setNameDog(value)}
        value={name_dog}
      />
			<Text>Type of Pet</Text>
      <TextInput
        placeholder="cat/dog"
        onChangeText={value => setTypePet(value)}
        value={type_pet}
      />
			<Text>description</Text>
      <TextInput
        placeholder="description"
        onChangeText={value => setDescription(value)}
        value={description}
      />
			<Text>Photos</Text>
      <TextInput
        placeholder="photos"
        onChangeText={value => setPhotos(value)}
        value={photos}
      />
 			<Picker
         onValueChange={(itemValue, itemIndex) =>
					setCity(itemValue)}
      >
        <Picker.Item label="Mexico" value="mexico" />
        <Picker.Item label="Hidalgo" value="hidalgo" />
				<Picker.Item label="Jalisco" value="jalisco" />
        <Picker.Item label="Guerrero" value="guerrero" />
      </Picker>
      {/* <TextInput
        placeholder="length"
        onChangeText={time => setTime(time)}
        value={time}
        keyboardType="number-pad"
      /> */}
      {/* <TextInput
        placeholder="photo"
        onChangeText={value => setPhoto(value)}
        value={photo}
      /> */}
      {/* <Switch
        onValueChange={value => setTerms(value)}
        value={terms}
      /> */}
      <Button
        title="Create adv"
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