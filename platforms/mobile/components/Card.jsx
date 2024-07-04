import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function Card({ navigation }) {
  return (
    <Link href="/Details" asChild>
      <Pressable style={styles.container}>
        <Image style={styles.image} source={{ uri: 'https://cdn.oneesports.id/cdn-data/sites/2/2024/01/honor.jpeg' }} alt="foto" />
        <Text style={styles.text}>Honor Of King</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginRight: 10,
  },
  image: {
    width: '100%',
    objectFit:'cover',
    minWidth:350,
    height: 150,
    borderRadius: 20,
    marginBottom: 10,
    marginLeft: 10,
  },
  text: {
    color: 'black',
    fontSize: 24,
    marginLeft: 15,
  },
});
