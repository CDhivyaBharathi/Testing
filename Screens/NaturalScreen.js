import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';


export default class NaturalScreen extends React.Component{
  render(){
    return(
     <View style={{ backgroundColor: 'blue' }}>
        <Text style={{color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'}}>Natural Flavoured Desserts</Text>
      </View>
    )
  }

}
