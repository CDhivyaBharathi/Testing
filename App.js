import * as React from 'react';
import { View, Image } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import NaturalScreen from './Screens/NaturalScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


export default class App extends React.Component {
  render() {
    return <View>
    <AppContainer/>
    </View>;
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  NaturalScreen: NaturalScreen,
  
});

const AppContainer = createAppContainer(AppNavigator);
