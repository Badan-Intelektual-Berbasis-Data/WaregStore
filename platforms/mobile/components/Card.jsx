import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View>
        <Image style={styles.image} source={{uri:'https://i.pinimg.com/736x/bc/20/94/bc20948f3bccfd926b41688b38b3d9c9.jpg'}} alt='foto'/>
        {/* <Image style={styles.image} source={require("@/assets/images/react-logo.png")} alt='foto'/> */}
       <Text>jjdsjdvjsv</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    }
})