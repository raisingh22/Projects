import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MyBtn = ({text , onPress ,}) => {
  return (
   <TouchableOpacity 
   style={[styles.btn,m]}
   onPress={onPress}>
    <Text>{text}</Text>
   </TouchableOpacity>
  )
}

export default MyBtn

const styles = StyleSheet.create({})