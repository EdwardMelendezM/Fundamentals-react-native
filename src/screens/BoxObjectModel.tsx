import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';

const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        BoxObjectModel
      </Text>
    </View>
   );
};

export default BoxObjectModel;

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#0f0',
    },
    title:{

      padding:50,
      fontSize:20,
      borderWidth:10,
      color: '#fff',

    },
});
