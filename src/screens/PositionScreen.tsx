import * as React from 'react';

import { StyleSheet,View } from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
   );
};

export default PositionScreen;

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#28c4d9',
      justifyContent:'center',
      alignItems:'center',
    },
    cajaMorada:{
      width:100,
      height:100,
      backgroundColor:'#5856D6',
      borderWidth:10,
      borderColor:'white',
      position:'absolute',
      top:0,
      left:0,

    },
    cajaNaranja: {
      width: 100,
      height: 100,
      backgroundColor:'#F0A23B',
      borderWidth: 10,
      borderColor: '#fff',
      position:'absolute',
      top:0,
      right:0,

    },
});
