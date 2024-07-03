import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function Cardsource({ name }) {
  return (
    <Link href="/Details" asChild>
      <Pressable  style={styles.contain}>
        <Image style={styles.image} source={{ uri: 'https://eht2vhtby29.exactdn.com/wp-content/uploads/2022/10/jadwal-dan-link-live-streaming-mpli-mobile-legends_169.jpeg?strip=all&lossy=0&ssl=1' }} alt="foto" />
        {/* <Image style={styles.image} source={require("@/assets/images/react-logo.png")} alt='foto'/> */}
        <Text style={styles.text}>Honor Of King</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    borderRadius: 20,
  },
  text: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});
