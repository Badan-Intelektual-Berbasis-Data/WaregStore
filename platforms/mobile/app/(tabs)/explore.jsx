import React from 'react';
import { Image, StyleSheet, ScrollView, View, Text, SafeAreaView } from 'react-native';
import Kategori from '@/components/Kategori';

export default function ExploreScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <Image source={require('@/assets/images/react-logo.png')} style={styles.logo} />
          <Text style={styles.textheader}>Waregstore</Text>
        </View>
        <View>
          <ScrollView horizontal={true} contentContainerStyle={styles.container}>
            <Kategori kategori_name="Game" />
            <Kategori kategori_name="Aplikasi" />
            <Kategori kategori_name="Pulsa & Token" />
            <Kategori kategori_name="Pulsa & Token" />
          </ScrollView>
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
});
