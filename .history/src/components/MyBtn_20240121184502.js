import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MyBtn = ({text , onPress , myStyle}) => {
  return (
   <TouchableOpacity 
   style={[styles.btn,myStyle]}
   onPress={onPress}>
    <Text style={styles.}>{text}</Text>
   </TouchableOpacity>
  )
}

export default MyBtn

const styles = StyleSheet.create({
    btn:{
        width:"100%",
        height:50,
        backgroundColor:'green',
        borderWidth:1,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    }
})