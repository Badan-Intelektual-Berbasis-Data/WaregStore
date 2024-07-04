import React from 'react';
import { Image, StyleSheet, ScrollView, View, Text, SafeAreaView } from 'react-native';
import CardGroup from '@/components/CardGroup';
import Cardsource from '@/components/Cardsource';
import Kategori from '@/components/Kategori';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <Image source={require('@/assets/images/react-logo.png')} style={styles.logo} />
          <Text style={styles.textheader}>Waregstore</Text>
        </View>
        <View>
          <ScrollView horizontal={true} contentContainerStyle={styles.categoryContainer}>
            <Kategori kategori_name="Game" />
            <Kategori kategori_name="Aplikasi" />
            <Kategori kategori_name="Pulsa" />
            <Kategori kategori_name="Token" />
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
    width: 30,
    height: 30,
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
    fontSize: 30,
    fontWeight: '500',
    marginVertical: 10,
    marginLeft: 15,
    marginBottom: 20,
  },
});
