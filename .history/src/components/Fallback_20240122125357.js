import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Fallback = () => {
  return (
    <View style={{
         justifyContent: "center", alignItems: "center"
    }}>
     <Image 
     resizeMode='contain'
     style={{
        height:"50",
        width:100
     }}
     source={require('../asstes/to-do-list.png')}
     />
    </View>
  )
}

export default Fallback

const styles = StyleSheet.create({})