import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Fallback = () => {
  return (
    <View>
     <Image 
     s
     source={{
        uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2014%2F03%2F25%2F16%2F28%2Ftodo-list-297195_1280.png&tbnid=ko125yL6QQOGkM&vet=12ahUKEwiTnazrufCDAxVwSmwGHWrlAXoQMyhOegUIARD9AQ..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fvectors%2Ftodo-list-despaired-man-person-sad-297195%2F&docid=pfN8jtFzyzLCPM&w=928&h=1280&q=todo%20list%20empty&ved=2ahUKEwiTnazrufCDAxVwSmwGHWrlAXoQMyhOegUIARD9AQ'
     }}
     />
    </View>
  )
}

export default Fallback

const styles = StyleSheet.create({})