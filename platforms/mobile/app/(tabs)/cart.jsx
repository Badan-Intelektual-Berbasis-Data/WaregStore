import React from 'react';
import { Image, StyleSheet, ScrollView, View, Text, SafeAreaView } from 'react-native';

export default function CartScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <Image source={require('@/assets/images/logowaregstore.png')} style={styles.logo} />
          <Text style={styles.textheader}>Waregstore</Text>
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
