import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

export default function CardGroup({name}) {
  return (
    <View>
      <Text>{name}</Text>
      <ScrollView horizontal={true} >
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})