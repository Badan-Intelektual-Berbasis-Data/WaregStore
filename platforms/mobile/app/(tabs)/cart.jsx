import React, { useState } from 'react';
import { Image, StyleSheet, ScrollView, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

export default function CartScreen({ navigation }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);

  const decreaseQuantity = () => setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Image source={require('@/assets/images/logowaregstore.png')} style={styles.logo} />
          <Text style={styles.textheader}>Waregstore</Text>
        </View>
        <View style={styles.cartContainer}>
          <View style={styles.itemInfoContainer}>
            <Text style={styles.itemText}>Paket Diamond 100</Text>
            <Text style={styles.statusText}>Diproses</Text>
          </View>
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.actionButton} onPress={decreaseQuantity}>
              <Text style={styles.actionText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity style={styles.actionButton} onPress={increaseQuantity}>
              <Text style={styles.actionText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Buang')}>
              <Text style={styles.removeText}>Buang</Text>
            </TouchableOpacity>
          </View>
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
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingBottom: 10,
  },
  cartContainer: {
    margin: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  itemInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 18,
    color: '#000',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#f7287b',
    borderRadius: 5,
    padding: 10,
  },
  actionText: {
    fontSize: 18,
    color: '#fff',
  },
  quantityText: {
    fontSize: 18,
  },
  removeText: {
    fontSize: 18,
    color: '#ff0000',
  },
});
