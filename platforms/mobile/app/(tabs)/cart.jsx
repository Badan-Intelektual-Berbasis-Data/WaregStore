import React, { useState } from 'react';
import { Image, StyleSheet, ScrollView, View, Text, SafeAreaView, TouchableOpacity, Pressable } from 'react-native';
import { TextInput } from 'react-native';

//Semangat Kakak-kakak.
export default function CartScreen() {
  const [items, setItems] = useState([
    { id: 1, name: 'Paket Diamond 100', quantity: 1, status: 'Diproses' },
    { id: 2, name: 'Paket Diamond 100', quantity: 1, status: 'Diproses' },
    { id: 3, name: 'Paket Diamond 100', quantity: 1, status: 'Diproses' },
  ]);

  const increaseQuantity = (id) => {
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const decreaseQuantity = (id) => {
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item)));
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Image source={require('@/assets/images/logowaregstore.png')} style={styles.logo} />
          <Text style={styles.textheader}>Waregstore</Text>
        </View>
        {items.map((item) => (
          <View key={item.id} style={styles.cartContainer}>
            <View style={styles.itemInfoContainer}>
              <View>
                <Text style={styles.namegame}>Mobile Legend</Text>
                <Text style={styles.itemText}>{item.name}</Text>
              </View>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
            <View style={styles.actionsContainer}>
              <TouchableOpacity style={styles.actionButton} onPress={() => decreaseQuantity(item.id)}>
                <Text style={styles.actionText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity style={styles.actionButton} onPress={() => increaseQuantity(item.id)}>
                <Text style={styles.actionText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeItem(item.id)}>
                <Text style={styles.removeText}>Buang</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <View style={styles.be}>
          <View style={styles.harga}>
            <Text style={styles.textpermbayaran}>Total Pembayaran</Text>
            <Text>RP.10000</Text>
          </View>
          <View style={styles.harga}>
            <Text style={styles.textpermbayaran}>Diskon</Text>
            <Text>RP.10000</Text>
          </View>
          <Pressable>
            <Text>Ke Pembayaran</Text>
          </Pressable>
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
  namegame: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 15,
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
    fontSize: 15,
    color: '#ff0000',
  },
  be: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  harga: {
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});
