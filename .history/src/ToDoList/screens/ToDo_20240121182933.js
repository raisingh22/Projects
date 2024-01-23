import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const ToDo = () => {
  return (
    <View>
      <Text>ToDo</Text>

      <TextInput
      placeholder='To do List'
      style={styles.textInput}
      />
    </View>
  )
}

export default ToDo

const styles = StyleSheet.create({
    textInput: {
        
    }
})