import { View, Text, StyleSheet } from "react-native"

export default function Kategori({kategori_name}) {
  return (
    <View style={styles.categoryItem}>
      <Text style={styles.categoryText}>{kategori_name}</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  categoryItem: {
    backgroundColor: '#f0f0f0',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  categoryText: {
    fontSize: 18,
  },
})