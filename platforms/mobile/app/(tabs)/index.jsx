import React, { useState } from 'react';
import { Image, StyleSheet, ScrollView, View, Text, SafeAreaView } from 'react-native';
import CardGroup from '@/components/CardGroup';
import Cardsource from '@/components/Cardsource';
import Kategori from '@/components/Kategori';

export default function HomeScreen({ navigation }) {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = (i) => {
    setIsSelected(i);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <Image source={require('@/assets/images/logowaregstore.png')} style={styles.logo} />
          <Text style={styles.textheader}>Waregstore</Text>
        </View>
        <View>
          <ScrollView horizontal={true} contentContainerStyle={styles.categoryContainer}>
            <Kategori kategori_name="Game" handlePress={() => handlePress(1)} isSelected={isSelected == 1 ? true : false} />
            <Kategori kategori_name="Aplikasi" handlePress={() => handlePress(2)} isSelected={isSelected == 2 ? true : false} />
            <Kategori kategori_name="Pulsa" handlePress={() => handlePress(3)} isSelected={isSelected == 3 ? true : false} />
            <Kategori kategori_name="Token" handlePress={() => handlePress(4)} isSelected={isSelected == 4 ? true : false} />
          </ScrollView>
          {/* content */}
          <View style={styles.cardGroupContainer}>
            <CardGroup name="Top up apa hari ini" navigation={navigation} />
            <CardGroup name="Lagi Diskon Nih" navigation={navigation} />
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.text1}>Lainnya</Text>
            <View style={styles.cardContainer} horizontal={true} contentContainerStyle={styles.cardContainer}>
              <View style={styles.cardWrapper}>
                <Cardsource navigation={navigation} />
              </View>
              <View style={styles.cardWrapper}>
                <Cardsource navigation={navigation} />
              </View>
              <View style={styles.cardWrapper}>
                <Cardsource navigation={navigation} />
              </View>
              <View style={styles.cardWrapper}>
                <Cardsource navigation={navigation} />
              </View>
              <View style={styles.cardWrapper}>
                <Cardsource navigation={navigation} />
              </View>
              <View style={styles.cardWrapper}>
                <Cardsource navigation={navigation} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#f7287b',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    marginTop: 10,
  },
  textheader: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  categoryContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  contentContainer: {
    paddingLeft: 15,
    paddingRight: 10,
    marginBottom: 20,
  },
  cardGroupContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    flexWrap: 'wrap',
    gap: 30,
    rowGap: 20,
    margin: 20,
  },
  cardWrapper: {
    marginRight: 10,
  },
  text1: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 10,
    marginLeft: 15,
    marginBottom: 20,
  },
});
