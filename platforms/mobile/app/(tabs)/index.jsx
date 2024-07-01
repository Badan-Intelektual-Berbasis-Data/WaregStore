import Card from '@/components/Card';
import CardGroup from '@/components/CardGroup';
import Cardsource from '@/components/Cardsource';
import Kategori from '@/components/Kategori';
import { Image, StyleSheet, ScrollView, View, Text, SafeAreaView } from 'react-native';


export default function HomeScreen({navigation}) {
  return (
    
   <SafeAreaView> 
    <ScrollView>
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
    <CardGroup name="Top up apa hari ini" navigation={navigation}/>
    <CardGroup name="Disarankan" navigation={navigation}/>

    <View>
    <Text style={styles.text1}>Lainnya</Text>
    <View style={styles.cardContainer}>
      <Cardsource navigation={navigation}/>
      <Cardsource navigation={navigation}/>
      <Cardsource navigation={navigation}/>
      <Cardsource navigation={navigation}/>
      <Cardsource navigation={navigation}/>
      <Cardsource navigation={navigation}/>
      <Cardsource navigation={navigation}/>
      <Cardsource navigation={navigation}/>
      <Cardsource navigation={navigation}/>
    </View>
    </View>
   </View>
   </ScrollView>
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
cardContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  columnGap:50,
  paddingHorizontal:30,
  rowGap:50,
},
text1: {
  fontSize:50,
  margin:10,
  fontWeight:'500',
  paddingTop:20,
  paddingLeft:20,
  marginBottom:50
},
});
