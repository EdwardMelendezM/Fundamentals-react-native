import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Fab from '../components/Fab';

const ContadorScreen = () => {

  const [contador, setContador] = useState(0);

  const addOne = ()=>{
    if (contador === 10){
      return;
    }
    setContador(contador + 1);

  };
  const minusOne = () => {
    if (contador === 0) {
      return;
    }
    setContador(contador - 1);

  };

  return (
    <View style={styles.container}>
      <Text style={styles.textoMain}>
        Contador: {contador}
      </Text>
      <Fab title="+1" onPress={addOne} position="bl"/>
      <Fab title="-1" onPress={minusOne} position="br"/>
    </View>
   );
};

export default ContadorScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textoMain: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 100,
    marginTop:10,

  },
  textButton: {
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
  },


});
