import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Fallback = () => {
  return (
    <View style={{
        //   alignItems: "center"
    }}>
     <Image 
     resizeMode="center"
     style={{
        height:100,
        width:"100%"
     }}
     source={require('../asstes/to-do-list.png')}
     />
    </View>
  )
}

export default Fallback

const styles = StyleSheet.create({})