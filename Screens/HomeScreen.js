import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'


export default class HomeScreen extends React.Component {
  
  render(){
    return(
      <View>
      <AppHeader/>
      <View>
      <TouchableOpacity style={[styles.button,{backgroundColor: 'red'}]}>
      <Text style = {styles.buttonText}> Frozen Dessert </Text>
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity style={[styles.button,{backgroundColor: 'green'}]}>
      <Text style = {styles.buttonText}> Ice-Creams </Text>
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity style={[styles.button,{backgroundColor: 'orange'}]}
      onPress={()=>this.props.navigation.navigate('NaturalScreen')}>
      <Text style = {styles.buttonText}> Naturals </Text>
      </TouchableOpacity>
      </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
  
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  }
  
})