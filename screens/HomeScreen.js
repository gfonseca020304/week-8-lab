import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import GradientBackground from '../components/GradientBackground'

export default function HomeScreen({ navigation }) {
  return (
    <GradientBackground>
      <Text style={styles.title}>Multi-Feature App</Text>
      <Button title="Go to Reminders" onPress={() => navigation.navigate('Reminders')} />
      <Button title="Go to Photo Gallery" onPress={() => navigation.navigate('Photo Gallery')} />
      <Button title="Go to User Profile" onPress={() => navigation.navigate('User Profile')} />
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#fff' }
})
