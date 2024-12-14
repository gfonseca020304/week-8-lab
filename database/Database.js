import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('MultiFeatureApp.db')

// Initialize database tables
export const initializeDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS reminders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL
      )`
    )
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS profiles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        videoUri TEXT
      )`
    )
  })
}

// Add reminder
export const addReminder = (title) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO reminders (title) VALUES (?)`,
        [title],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      )
    })
  })
}

// Get all reminders
export const getReminders = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM reminders`,
        [],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => reject(error)
      )
    })
  })
}
