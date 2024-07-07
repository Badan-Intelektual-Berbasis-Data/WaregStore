import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { BASE_API_URL } from '@/constants/Server';


export default function CardGroup({ name }) {

  const [cardData, setCardData] = useState([])

  useEffect(() => {
    const getData = async () => {
      await fetch(`${BASE_API_URL}/products/`)
        .then(res => res.json())
        .then(data => setCardData(data))
    }
    getData()
  }, [])


  return (
    <View>
      <Text style={styles.title}>{name}</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.container}>
        { cardData && cardData.map((product, index) => (
          <Card name={product.name} image_link={product.image_link} key={index} />
        ))}
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
