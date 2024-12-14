import React, { useState, useEffect } from 'react'
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native'
import { addReminder, getReminders } from '../database/Database'

export default function ReminderScreen() {
  const [reminder, setReminder] = useState('')
  const [reminders, setReminders] = useState([])

  useEffect(() => {
    fetchReminders()
  }, [])

  const fetchReminders = async () => {
    const data = await getReminders()
    setReminders(data)
  }

  const handleAddReminder = async () => {
    if (!reminder) return
    await addReminder(reminder)
    setReminder('')
    fetchReminders()
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a reminder"
        value={reminder}
        onChangeText={setReminder}
      />
      <Button title="Add Reminder" onPress={handleAddReminder} />
      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.reminder}>{item.title}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  reminder: { padding: 10, borderBottomWidth: 1 }
})
