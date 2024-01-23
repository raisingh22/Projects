import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ToDo from './src/ToDoList/screens/ToDo'
import MyComponent from './src/ToDoList/screens/ToDo'

const App = () => {
  return (
   <SafeAreaView style={{
    flex:1
   }}>
     {/* <ToDo/> */}
     <MyComponent/>?
   </SafeAreaView>
  )
}

export default App