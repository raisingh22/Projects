import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ToDo from './src/ToDoList/screens/ToDo'
import Home from './src/RNCaller/screens/Home'

const App = () => {
  return (
  <NavigationContainer>
     <SafeAreaView style={{
    flex:1
   }}>
     <ToDo/>
     {/* <Home/> */}
   </SafeAreaView>
  </NavigationContainer>
  )
}

export default App