<<<<<<< HEAD
import React from 'react';
import { Image, StyleSheet, ScrollView, View, Text, SafeAreaView } from 'react-native';
import Kategori from '@/components/Kategori';
import Card from '@/components/Card';
=======
import React, { useState } from 'react';
import { Image, StyleSheet, ScrollView, View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CardGroup from '@/components/CardGroup';
>>>>>>> 4f734ccffeb61a8a70beecaa8938e915c257f93e

export default function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Search:', searchQuery);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Image source={require('@/assets/images/logowaregstore.png')} style={styles.logo} />
          <Text style={styles.textheader}>Waregstore</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Cari produk..." value={searchQuery} onChangeText={(text) => setSearchQuery(text)} />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Ionicons name="search" size={17} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.cardGroupContainer}>
          <CardGroup navigation={navigation} />
        </View>
        <View style={styles.search}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#f7287b',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
  },
  cardGroupContainer: {
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingBottom: 10,
  },
  search: {
    gap:30,
    margin:20
  },
});
