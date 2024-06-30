import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Details() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Paket Diamond</Text>
      <View style={styles.Card}>
      <Text style={styles.teksdm}>100 DM</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize:30
    },
    Card: {
    backgroundColor:'#0099ff',
    width:106,
    height:43,
    borderRadius:20,
    margin:20
    },
    teksdm: {
    textAlign:"center",
    paddingTop:14,
    fontSize:17,
    color:"white"
    }
})

