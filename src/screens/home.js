import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {
  Modal,
  Button,
  Input,
  Center,
  NativeBaseProvider,
  Heading
} from "native-base";
import ShowAllAds from '../components/ads/showAllAds';
import { Video, AVPlaybackStatus } from 'expo-av';
import CardsCategory from '../components/cardsCategorys'
// export default function Home({ navigation }) {
export default function Home() {
  const navigation = useNavigation()
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <View style={styles.fixToText}>
      
      <View  style={{ margin: 10, flex: 0.5 }}>
      <Button
        title="Go Profile"
        onPress={() => navigation.navigate('Profile')}

      >Go Profile</Button>
      </View>       
      <View style={{ margin: 10, flex: 0.5}}>
       <Button onPress={() => navigation.navigate('Advertisements')}>
        Go to Ads
       </Button>
      </View>
      </View>
      <CardsCategory/>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://res.cloudinary.com/dr8h8cvn9/video/upload/v1629583756/7_Trucos_para_Ense%C3%B1ar_a_tu_Perro_el_Llamado_Llamada_Infalible_non4mc.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <StatusBar style="auto" />
    </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 16,
    backgroundColor: '#fff',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20
  },
  bttn:{
    borderRadius:20,
    backgroundColor: "cyan"
  },
  video: {
    alignSelf: 'center',
    width: 300,
    height: 200,
  },
});