import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja2}>Caja2</Text>
      <Text style={styles.caja2}>Caja2</Text>
      <Text style={styles.caja2}>Caja2</Text>
      <Text style={styles.caja2}>Caja2</Text>
      <Text style={styles.caja1}>Caja1</Text>
      <Text style={styles.caja2}>Caja2</Text>
      <Text style={styles.caja2}>Caja2</Text>
      <Text style={styles.caja3}>Caja3</Text>
      <Text style={styles.caja3}>Caja3</Text>
      <Text style={styles.caja3}>Caja3</Text>
      <Text style={styles.caja3}>Caja3</Text>
      <Text style={styles.caja3}>Caja3</Text>
      <Text style={styles.caja3}>Caja3</Text>
      <Text style={styles.caja3}>Caja3</Text>
      <Text style={styles.caja3}>Caja3</Text>
    </View>
   );
};

export default FlexScreen;


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#2BC4D9',
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'center',
      alignItems:'center',
    },
    caja1:{
      borderWidth:2,
      borderColor:'white',
      fontSize:30,
    },
    caja2: {
      borderWidth: 2,
      borderColor: 'white',
      fontSize: 30,
    },
    caja3: {
      borderWidth: 2,
      borderColor: 'white',
      fontSize: 30,
    },
});
