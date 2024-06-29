import { View,Text,StyleSheet } from "react-native"

export default function kategori(){
    return(

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
    );

}

const styles = StyleSheet.create({
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
})