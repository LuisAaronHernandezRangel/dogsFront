import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, StyleSheet, Button, FlatList } from 'react-native'
import axios from 'axios'
import { useRoute } from '@react-navigation/native'

export default function Post() {
  const [post, setPost] = useState({})
  const route = useRoute()

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: `/posts/${route.params.id}`
    })
      .then(({ data }) => setPost(data))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text>{post.body}</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});