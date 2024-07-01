import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AmmountButton from "@/components/AmmountButton";

// halo

export default function Details({}) {
  return (
    <ScrollView>
      <View style={styles.banner}>
      <Image style={styles.image} source={{uri:'https://play-lh.googleusercontent.com/jsCHgN9mWSI0BVNeq4GSFof7bMDVtIfbk92Td8m_hPumo0aRnaMnrFastzyST5hAiA=w526-h296-rw'}} alt='foto'/>
      <View style={styles.bannercontent}>
        <Image style={styles.logo} source={{uri:'https://play-lh.googleusercontent.com/LDIQqtHoEJSolLWKohRfUMxWdzPY0Ojw6nVU6hb9HjpUFhxQlTe2KaLVFO5I3HKPd4Q'}} alt='logo'/>
        <Text style={styles.title}>Mobile Legends: Bang-Bang</Text>
      </View>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Paket Diamond</Text>
        <View style={styles.buttoncontainer}>
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
        </View>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Event KOF</Text>
        <View style={styles.buttoncontainer}>
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
          <AmmountButton angka_DM="100 DM" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    // paddingTop: 20,
  },
  buttoncontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 17,
    marginTop: 38,
  },
  view:{
    marginTop:40,
    paddingHorizontal: 10,
  },
  image:{
    width:"100%",
    height:200,
  },
  banner:{
    position:'relative',

  },
  logo:{
    width:70,
    height:70,
    borderRadius:10,
  },
  bannercontent:{
    position:"absolute",
    gap:20,
    top:0,
    left:0,
    backgroundColor:"rgba(0,0,0,0.7)",
    width:"100%",
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  title:{
    color:'white',
    fontSize:25,
    maxWidth:"60%"
  }
});
