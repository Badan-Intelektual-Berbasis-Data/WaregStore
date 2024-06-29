import Kategori from '@/components/Kategori';
import { Image, StyleSheet, Platform, View, Text, SafeAreaView } from 'react-native';


export default function HomeScreen() {
  return (
    
   <SafeAreaView> 
    <View style={styles.header}>
   <Text style={styles.textheader}>waregStore</Text>
   </View>
   <View>
   <View style={styles.container}>
      <Kategori kategori_name="Pulsa & Token" />
      <Kategori kategori_name="Pulsa & Token" />
      <Kategori kategori_name="Pulsa & Token" />
    </View>

    {/* content */}

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
