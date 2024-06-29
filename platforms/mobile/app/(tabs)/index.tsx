import { Image, StyleSheet, Platform, View, Text, SafeAreaView } from 'react-native';


export default function HomeScreen() {
  return (
    
   <SafeAreaView> 
    <View style={styles.header}>
   <Text style={styles.textheader}>waregStore</Text>
   </View>
   <View>
   <View style={styles.container}>
      <View style={styles.categoryItem}>
        <Text style={styles.categoryText}>Game</Text>
      </View>
      <View style={styles.categoryItem}>
        <Text style={styles.categoryText}>Aplikasi</Text>
      </View>
      <View style={styles.categoryItem}>
        <Text style={styles.categoryText}>Pulsa&token</Text>
      </View>
    </View>
   </View>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#f7287b',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 36, 
  },
textheader: {
  fontSize: 24,
  fontWeight : 'bold',

},
container: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20,
},
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
});
