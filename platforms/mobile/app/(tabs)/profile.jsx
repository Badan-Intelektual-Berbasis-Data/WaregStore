import React from 'react';
import { Image, StyleSheet, ScrollView, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Image source={require('@/assets/images/react-logo.png')} style={styles.logo} />
          <Text style={styles.textheader}>Waregstore</Text>
        </View>

        <View style={styles.profileContainer}>
          <View style={styles.profilePictureWrapper}>
            <Image source={require('@/assets/images/react-logo.png')} style={styles.profilePicture} />
          </View>
          <Text style={styles.profileName}>Nama Pengguna</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.profileHeader}>Profile Pengguna</Text>
          <TouchableOpacity style={styles.infoItem} onPress={() => console.log('Edit Username')}>
            <Text style={styles.infoText}>Ganti Username</Text>
            <Ionicons name="chevron-forward" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoItem} onPress={() => console.log('Change Password')}>
            <Text style={styles.infoText}>Ganti Password</Text>
            <Ionicons name="chevron-forward" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoItem} onPress={() => console.log('Edit Email')}>
            <Text style={styles.infoText}>Ganti Email</Text>
            <Ionicons name="chevron-forward" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoItem} onPress={() => console.log('Logout')}>
            <Text style={styles.infoText}>Logout</Text>
            <Ionicons name="chevron-forward" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.serviceContainer}>
          <Text style={styles.serviceHeader}>Layanan</Text>
          <TouchableOpacity style={styles.serviceItem} onPress={() => console.log('Hubungi Kami')}>
            <Text style={styles.serviceText}>Hubungi Kami</Text>
            <Ionicons name="chevron-forward" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingBottom: 20,
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
  profileContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  profileHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profilePictureWrapper: {
    marginTop: 40,
    width: 180,
    height: 180,
    borderRadius: 90,
    overflow: 'hidden',
    marginBottom: 10,
  },
  profilePicture: {
    width: '100%',
    height: '100%',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  infoContainer: {
    marginHorizontal: 20,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  infoText: {
    fontSize: 16,
  },
  serviceContainer: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  serviceHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  serviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  serviceText: {
    fontSize: 16,
  },
});
