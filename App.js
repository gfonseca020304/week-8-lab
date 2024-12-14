import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ReminderScreen from './screens/ReminderScreen'
import PhotoGalleryScreen from './screens/PhotoGalleryScreen'
import UserProfileScreen from './screens/UserProfileScreen'
import { initializeDatabase } from './database/Database';

const { Navigator, Screen} = createNativeStackNavigator()

export default function App() {
  useEffect(() => {
    initializeDatabase()
  }, [])
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Reminders" component={ReminderScreen} />
        <Screen name="Photo Gallery" component={PhotoGalleryScreen} />
        <Screen name="User Profile" component={UserProfileScreen} />
      </Navigator>
    </NavigationContainer>
  )
}
