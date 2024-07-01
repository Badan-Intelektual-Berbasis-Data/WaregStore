import React from 'react';
import { Image, StyleSheet, ScrollView, View, Text, SafeAreaView } from 'react-native';
import Card from '@/components/Card';
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
          <ScrollView horizontal={true} contentContainerStyle={styles.container}>
            <Kategori kategori_name="Pulsa & Token" />
            <Kategori kategori_name="Pulsa & Token" />
            <Kategori kategori_name="Pulsa & Token" />
            <Kategori kategori_name="Pulsa & Token" />
          </ScrollView>

          {/* content */}
          <View style={styles.cardGroupContainer}>
            <CardGroup name="Top up apa hari ini" navigation={navigation} />
            <CardGroup name="Lagi Diskon Nih" navigation={navigation} />
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.text1}>Lainnya</Text>
            <ScrollView horizontal={true} contentContainerStyle={styles.cardContainer}>
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
              <View style={styles.cardWrapper}>
                <Cardsource navigation={navigation} />
              </View>
              <View style={styles.cardWrapper}>
                <Cardsource navigation={navigation} />
              </View>
              <View style={styles.cardWrapper}>
                <Cardsource navigation={navigation} />
              </View>
            </ScrollView>
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  categoryItem: {
    backgroundColor: '#f0f0f0',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  categoryText: {
    fontSize: 18,
  },
  contentContainer: {
    paddingLeft: 15,
    paddingRight: 10,
  },
  cardGroupContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
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
