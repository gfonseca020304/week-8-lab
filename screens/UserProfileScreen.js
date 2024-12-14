import React, { useState } from 'react'
import { View, Button, TextInput, Text, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Video from 'react-native-video'

export default function UserProfileScreen() {
  const [name, setName] = useState('')
  const [videoUri, setVideoUri] = useState('')

  const saveProfile = async () => {
    await AsyncStorage.setItem('userProfile', JSON.stringify({ name, videoUri }))
    alert('Profile Saved')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter video URL"
        value={videoUri}
        onChangeText={setVideoUri}
      />
      <Button title="Save Profile" onPress={saveProfile} />
      {videoUri ? (
        <Video source={{ uri: videoUri }} style={styles.video} controls resizeMode="cover" />
      ) : (
        <Text>No video selected</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  video: { width: '100%', height: 200, marginTop: 10 }
})
