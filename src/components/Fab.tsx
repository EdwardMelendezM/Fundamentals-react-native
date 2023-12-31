import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';


interface FabProps{
  title:string;
  onPress:()=>void
  position:'br' | 'bl'
}

const Fab:React.FC<FabProps> = ({
  title,
  onPress,
  position,
}) => {

  const ios = ()=>{
    return (
      <TouchableOpacity
      activeOpacity={ 0.8 }
        style={[
          styles.fabLocation,
          (position === 'bl' ? styles.rigth : styles.left),
        ]}
        onPress={onPress}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText} >{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };


  const android = ()=>{
    return (
      <View style={[
        styles.fabLocation,
        (position === 'bl' ? styles.rigth : styles.left),
      ]}
      >

        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
          onPress={onPress}
        >
          <View style={styles.fab}>
            <Text style={styles.fabText} >{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return (Platform.OS ===  'ios' ? ios() : android());



};

export default Fab;


const styles = StyleSheet.create({
  fabLocation:{
    position:'absolute',
    bottom:25,
  },
  rigth:{
    right:25,
  },
  left:{
    left:25,
  },
  fab:{
    backgroundColor:'#5856D6',
    width:60,
    height:60,
    borderRadius:100,
    justifyContent:'center',

    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:4,
    },
    shadowOpacity:0.30,
    shadowRadius:4.65,

    elevation:8,

  },
  fabText:{
    color:'white',
    fontSize:25,
    fontWeight:'bold',
    alignSelf: 'center',
  },
});
