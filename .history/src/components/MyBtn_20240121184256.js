import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MyBtn = ({text , onPress , myStyle}) => {
  return (
   <TouchableOpacity 
   style={[styles.btn,myStyle]}
   onPress={onPress}>
    <Text>{text}</Text>
   </TouchableOpacity>
  )
}

export default MyBtn

const styles = StyleSheet.create({
    btn:{
        width:"90%",
        height:50,
        backgroundColor:'green',
        
    }
})