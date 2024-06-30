import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View>
        <Image style={styles.image} source={{uri:'https://cdn.oneesports.id/cdn-data/sites/2/2024/01/honor.jpeg'}} alt='foto'/>
        {/* <Image style={styles.image} source={require("@/assets/images/react-logo.png")} alt='foto'/> */}
      <Text style={styles.text}>Honor Of King</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 500,
        height: 200,
        borderRadius:20,
        marginRight:30,
        marginTop:20
    },
    text: {
      color:'black',
      marginTop:30,
      fontSize:26,
    },
})