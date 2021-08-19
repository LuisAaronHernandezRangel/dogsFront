import React from "react";
import { Pressable, View , TouchableHighlight, TouchableOpacity,Image,Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function CardsCategory() {

    const navigation = useNavigation()
  
    function handleSubmitOne() {
      console.log('hola parce')
      navigation.navigate('City', {
        _city: 'Guadalajara'
      })
    }

    function handleSubmitTwo() {
        console.log('que mas?')
        navigation.navigate('City', {
          _city: 'Acapulco'
        })
    }

    function handleSubmitTree() {
      console.log('que mas?')
      navigation.navigate('City', {
        _city: 'Pachuca'
      })
    }

    function handleSubmitFour() {
      console.log('que mas?')
      navigation.navigate('City', {
        _city: 'Mexico'
      })
    }


  return (

    <View
      style={{
        flexDirection: "column",
        padding: 5,
        backgroundColor:"red",
        marginBottom:20
      }}
    >
      <View style={{
          flexDirection: "row",
          margin: 10, 
          backgroundColor:"white"
        }}>
      <TouchableOpacity onPress={handleSubmitOne}>
        {/* <View style={{
          width: 80,
          height: 80, margin: 10, flex: 1
        }}> */}
          <Image
            style={{
              width: 80,
              height: 80,
              margin:10,
            }} 
            source={{
              uri: 'https://res.cloudinary.com/evollve-sas/image/upload/v1629307895/15_emvw8d.png',
            }}
          />
        {/* </View> */}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmitTwo}>
        {/* <View style={{
          width: 80,
          height: 80, margin: 10, flex: 1
        }} > */}
          <Image
            style={{
              width: 80,
              height: 80,
              margin:10,
            }}
            source={{
              uri: 'https://res.cloudinary.com/evollve-sas/image/upload/v1629307895/17_ycueru.png',
            }}
          />
        {/* </View> */}
      </TouchableOpacity>
      </View>
      <View style={{
          flexDirection: "row",
          margin: 10,
          backgroundColor:"white"
        }}>
      <TouchableOpacity onPress={handleSubmitTree}>
        {/* <View style={{
          backgroundColor: "black", width: 80,
          height: 80, margin: 10, flex: 1,
        }} > */}
          <Image
            style={{
              width: 80,
              height: 80,
              margin:10,
            }}
            source={{
              uri: 'https://res.cloudinary.com/evollve-sas/image/upload/v1629307895/16_bhej5a.png',
            }}
          />
        {/* </View> */}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmitTree}>
      {/* <View style={{
        width: 80,
        height: 80, margin: 10, flex: 1
      }}> */}
        <Image
          style={{
            width: 80,
            height: 80,
            margin:10,
          }}
          source={{
            uri: 'https://res.cloudinary.com/evollve-sas/image/upload/v1629307895/14_adovak.png',
          }}
        />
      {/* </View> */}
      </TouchableOpacity>
      </View>
    </View>
    // <View style={{flex:1, marginBottom: 50}}>
    //   <View
    //     style={{
    //       flexDirection: "row",
    //       padding: 15,
    //       marginBottom: 70,
    //       //flex:1
    //     }}
    //   >
    //         <TouchableHighlight onPress={handleSubmitOne}>
    //           <View style={{
    //             width: 80,
    //             height: 80, margin: 10, flex: 1
    //           }}>
    //             <Image
    //               style={{
    //                 width: 80,
    //                 height: 80,
    //               }}
    //               source={{
    //                 uri: 'https://res.cloudinary.com/evollve-sas/image/upload/v1629307895/15_emvw8d.png',
    //               }}
    //             />
    //           </View>
    //         </TouchableHighlight>
    //         <TouchableHighlight onPress={handleSubmitTwo}>
    //           <View style={{
    //             width: 80,
    //             height: 80, margin: 10, flex: 1
    //           }} >
    //             <Image
    //               style={{
    //                 width: 80,
    //                 height: 80,
    //               }}
    //               source={{
    //                 uri: 'https://res.cloudinary.com/evollve-sas/image/upload/v1629307895/17_ycueru.png',
    //               }}
    //             />
    //           </View>
    //         </TouchableHighlight>
    //   </View>
      // <View
      //   style={{
      //     flexDirection: "row",
      //     padding: 15,
      //     marginBottom: 30,
      //     //flex:1
      //   }}
      // >
    //         <TouchableHighlight onPress={handleSubmitTree}>
    //           <View style={{
    //             backgroundColor: "yellow", width: 80,
    //             height: 80, margin: 10, flex: 1,
    //           }} >
    //             <Image
    //               style={{
    //                 width: 80,
    //                 height: 80,
    //               }}
    //               source={{
    //                 uri: 'https://res.cloudinary.com/evollve-sas/image/upload/v1629307895/16_bhej5a.png',
    //               }}
    //             />
    //           </View>
    //         </TouchableHighlight>
    //         <TouchableHighlight onPress={handleSubmitFour}>
    //         <View style={{
    //           width: 80,
    //           height: 80, margin: 10, flex: 1
    //         }}>
    //           <Image
    //             style={{
    //               width: 80,
    //               height: 80,
    //             }}
    //             source={{
    //               uri: 'https://res.cloudinary.com/evollve-sas/image/upload/v1629307895/14_adovak.png',
    //             }}
    //           />
    //         </View>
    //         </TouchableHighlight>
    // </View>
    // </View>
  
       
      );
};