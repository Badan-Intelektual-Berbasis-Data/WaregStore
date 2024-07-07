import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function Card({name, image_link}) {
  return (
    <Link href="/Details" asChild>
      <Pressable style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: image_link }} alt="foto" />
        </View>
        <Text style={styles.text}>{name}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },

  imageContainer: {
    width: '100%',
    height: 150,
    minWidth: 350,
    overflow: 'hidden',
    borderRadius: 10,
  },

  image: {
    height: '160%',
    width: '100%',
    resizeMode: 'stretch',
    borderRadius: 20,
  },
  text: {
    color: 'black',
    fontSize: 16,
    marginLeft: 15,
    marginTop: 20
  },
});
