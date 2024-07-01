import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AmmountButton({angka_DM}) {
  return (
    <View>
     <View style={styles.Card}>
      <Text style={styles.teksdm}>{angka_DM}</Text>
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
    
    },
    teksdm: {
    textAlign:"center",
    paddingTop:14,
    fontSize:17,
    color:"white",
    }
})