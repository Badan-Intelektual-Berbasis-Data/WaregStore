import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Card from './Card';
import { BASE_API_URL } from '@/constants/Server';


export default function CardGroup({ name }) {

  useEffect(() => {
    const fetchData = async() => {
      const data = await fetch(`${BASE_API_URL}/products`)
      console.log(data);
    }
    fetchData()
  }, [])


  return (
    <View>
      <Text style={styles.title}>{name}</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  title: {
    fontSize: 20,
    margin: 10,
    fontWeight: '500',
    paddingTop: 30,
    paddingLeft: 10,
  },
});
