import React from 'react';
// import ContadorScreen from './src/screens/ContadorScreen';
// import BoxObjectModel from './src/screens/BoxObjectModel';
import { SafeAreaView, StyleSheet } from 'react-native';
// import DimensionesScreen from './src/screens/DimensionesScreen';
import PositionScreen from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HelloWorld /> */}
      {/* <ContadorScreen /> */}
      {/* <BoxObjectModel/> */}
      {/* <DimensionesScreen /> */}
      <PositionScreen />
    </SafeAreaView>
  );
};

/*
  SafeAreaView toma todo sin
  sobrepasar el encabezado y el
  footer
*/

export default App;

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
});
