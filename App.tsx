import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StackNavigator } from './src/navigations/Navigator';


export const App = () => {

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}
