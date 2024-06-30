import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

export default function CardGroup({name}) {
  return (
    <View>
      <Text style={styles.title}>{name}</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.container}>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        gap:20
    },
    title: {
      fontSize:30,
      margin:10,
      fontWeight:'500',
      paddingTop:30,
      paddingLeft:20
    }
})
