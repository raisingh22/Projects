import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ToDo from './src/ToDoList/screens/ToDo'
import Home from './src/RNCaller/screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import Example from './src/Animation/screens/Example';
import AppNavigation from './src/Animation/navigation/AppNavigation';
const App = () => {
  return (
  <NavigationContainer>
     {/* <SafeAreaView style={{
    flex:1
   }}> */}
     {/* <ToDo/> */}
     {/* <Home/> */}
    <AppNavigation/>
   {/* </SafeAreaView> */}
  </NavigationContainer>
  )
}

export default App