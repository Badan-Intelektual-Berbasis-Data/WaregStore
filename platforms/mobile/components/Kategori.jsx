import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Kategori({ kategori_name }) {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <TouchableOpacity style={[styles.categoryItem, isSelected && styles.selectedCategoryItem]} onPress={handlePress}>
      <Text style={[styles.categoryText, isSelected && styles.selectedCategoryText]}>{kategori_name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryItem: {
    marginTop: 40,
    backgroundColor: '#f0f0f0',
    width: 120,
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
