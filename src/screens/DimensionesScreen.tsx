import * as React from 'react';
import {  StyleSheet, Text, View, useWindowDimensions } from 'react-native';



const DimensionesScreen = () => {

  const {width,height} = useWindowDimensions();

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={{
          ...styles.cajaModara,
          width:width * 0.2,
        }} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.title}>W:{width}, H :{height}</Text>
    </View>
   );
};

export default DimensionesScreen;


const styles = StyleSheet.create({
  main:{
    justifyContent:'center',
    alignItems:'center',
  },
  container:{
    width:'80%',
    height:200,
    backgroundColor:'#ccc',
    justifyContent:'center',
    alignItems:'center',
  },
  cajaModara:{
    backgroundColor:'#5856D6',
    height:100,
  },
  cajaNaranja:{
    backgroundColor:'#F0A23B',
  },
  title:{
    fontSize:20,
    textAlign:'center',
  },
});
