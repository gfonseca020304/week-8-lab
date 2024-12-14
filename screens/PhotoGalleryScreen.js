import React, { useState } from 'react'
import { View, Button, FlatList, Image, StyleSheet } from 'react-native'
import * as FileSystem from 'expo-file-system'
import * as ImagePicker from 'expo-image-picker'

export default function PhotoGalleryScreen() {
  const [photos, setPhotos] = useState([])

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync()
    if (!result.canceled) {
      const newPhoto = { uri: result.assets[0].uri, id: Date.now().toString() }
      setPhotos((prev) => [...prev, newPhoto])
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Pick Image" onPress={pickImage} />
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Image source={{ uri: item.uri }} style={styles.image} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: 100, height: 100, margin: 10 }
})
