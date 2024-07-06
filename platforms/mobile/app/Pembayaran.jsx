import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function PembayaranScreen() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [bank, setBank] = useState('');
  const [eWallet, setEWallet] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Informasi Akun Tujuan</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>ID Akun:</Text>
        <TextInput style={styles.input} placeholder=" " />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Server Akun:</Text>
        <TextInput style={styles.input} placeholder=" " />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nomor WhatsApp:</Text>
        <TextInput style={styles.input} placeholder=" " keyboardType="phone-pad" />
        <Text style={styles.noteText}>* Akan dihubungi apabila terjadi masalah</Text>
      </View>

      <Text style={styles.paymentOptionsTitle}>Pembayaran</Text>
      <View style={styles.paymentOptionsContainer}>
        <TouchableOpacity
          style={[styles.paymentOption, paymentMethod === 'bank' && styles.selectedOption]}
          onPress={() => setPaymentMethod('bank')}
        >
          <Text style={styles.paymentOptionText}>Transfer Bank</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.paymentOption, paymentMethod === 'ewallet' && styles.selectedOption]}
          onPress={() => setPaymentMethod('ewallet')}
        >
          <Text style={styles.paymentOptionText}>E-Wallet</Text>
        </TouchableOpacity>
      </View>

      {paymentMethod === 'bank' && (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pilih Bank</Text>
          <View style={styles.bankOptionsContainer}>
            <TouchableOpacity
              style={[styles.bankOption, bank === 'bca' && styles.selectedOption]}
              onPress={() => setBank('bca')}
            >
              <Text style={styles.paymentOptionText}>Bank BCA</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.bankOption, bank === 'bni' && styles.selectedOption]}
              onPress={() => setBank('bni')}
            >
              <Text style={styles.paymentOptionText}>Bank BNI</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.bankOption, bank === 'mandiri' && styles.selectedOption]}
              onPress={() => setBank('mandiri')}
            >
              <Text style={styles.paymentOptionText}>Bank Mandiri</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.bankOption, bank === 'bri' && styles.selectedOption]}
              onPress={() => setBank('bri')}
            >
              <Text style={styles.paymentOptionText}>Bank BRI</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {paymentMethod === 'ewallet' && (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pilih E-Wallet</Text>
          <View style={styles.bankOptionsContainer}>
            <TouchableOpacity
              style={[styles.bankOption, eWallet === 'ovo' && styles.selectedOption]}
              onPress={() => setEWallet('ovo')}
            >
              <Text style={styles.paymentOptionText}>OVO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.bankOption, eWallet === 'gopay' && styles.selectedOption]}
              onPress={() => setEWallet('gopay')}
            >
              <Text style={styles.paymentOptionText}>GoPay</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.bankOption, eWallet === 'dana' && styles.selectedOption]}
              onPress={() => setEWallet('dana')}
            >
              <Text style={styles.paymentOptionText}>Dana</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.bankOption, eWallet === 'shopeepay' && styles.selectedOption]}
              onPress={() => setEWallet('shopeepay')}
            >
              <Text style={styles.paymentOptionText}>ShopeePay</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Buat Pesanan</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  noteText: {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
  },
  paymentOptionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  paymentOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  paymentOption: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
  },
  selectedOption: {
    backgroundColor: '#f7287b',
  },
  paymentOptionText: {
    fontSize: 16,
    color: 'black',
  },
  bankOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bankOption: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
    marginVertical: 5,
  },
  orderButton: {
    marginTop: 30,
    backgroundColor: '#0099FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  orderButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});
