import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function InputField() {
  return (
    <View style={styles.container}>
        <Text>ID akun</Text>
        <TextInput style={styles.searchInput} placeholder="ID AKUN" value={searchQuery} onChangeText={(text) => setSearchQuery(text)} />
    </View>
  )
}

const styles = StyleSheet.create({
    
})