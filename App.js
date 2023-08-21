import React from 'react'
import { StatusBar, Text, View } from 'react-native';
import { textcolor } from './src/assets/colors.js';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <>
    <StatusBar backgroundColor={textcolor.white} barStyle={'dark-content'}/>
    <View style={{flex:1,backgroundColor:textcolor.white}}>
      <HomeScreen/>
    </View>
    </>
    
  )
}

export default App;