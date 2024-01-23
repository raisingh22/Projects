import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyFlatList = ({data , renderItem}) => {
  return (
    <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    style={styles.list}


    />
  )
}

export default MyFlatList

const styles = StyleSheet.create({
    list:{
       
    },
})