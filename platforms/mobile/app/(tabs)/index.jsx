import Card from '@/components/Card';
import CardGroup from '@/components/CardGroup';
import Kategori from '@/components/Kategori';
import { Image, StyleSheet, ScrollView, View, Text, SafeAreaView } from 'react-native';


export default function HomeScreen() {
  return (
    
   <SafeAreaView> 
    <View style={styles.header}>
   <Text style={styles.textheader}>waregStore</Text>
   </View>
   <View>
   <ScrollView horizontal={true} contentContainerStyle={styles.container}>
      <Kategori kategori_name="Pulsa & Token" />
      <Kategori kategori_name="Pulsa & Token" />
      <Kategori kategori_name="Pulsa & Token" />
      <Kategori kategori_name="Pulsa & Token" />
    </ScrollView>

    {/* content */}
    <CardGroup name="Top up apa hari ini"/>
    <CardGroup name="Disarankan"/>
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
