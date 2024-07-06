import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable } from 'react-native';

export default function Kategori({ kategori_name, isSelected, handlePress }) {
 

  return (
    <Pressable style={[styles.categoryItem, isSelected && styles.selectedCategoryItem]} onPress={handlePress}>
      <Text style={[styles.categoryText, isSelected && styles.selectedCategoryText]}>{kategori_name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  categoryItem: {
    marginTop: 40,
    backgroundColor: '#f0f0f0',
    width: 200,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0099FF',
  },
  categoryText: {
    fontSize: 16,
    color: '#0099FF',
  },
  selectedCategoryItem: {
    backgroundColor: '#0099FF',
    borderColor: '#0099FF',
  },
  selectedCategoryText: {
    color: '#FFFFFF',
  },
});
