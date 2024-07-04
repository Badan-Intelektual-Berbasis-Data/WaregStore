import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function AmmountButton({ angka_DM, onPress }) {
  const [isActive, setIsActive] = useState(false);

  const handlePress = () => {
    setIsActive(!isActive);
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.Card, isActive && styles.CardActive]}>
        <Text style={[styles.teksdm, isActive && styles.teksdmActive]}>{angka_DM}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Card: {
    backgroundColor: 'white',
    borderColor: '#0099ff',
    borderWidth: 2,
    width: 100,
    height: 43,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  CardActive: {
    backgroundColor: '#0099ff',
  },
  teksdm: {
    fontSize: 17,
    color: '#0099ff',
  },
  teksdmActive: {
    color: 'white',
  },
});
