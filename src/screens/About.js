import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'

export default function About() {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});