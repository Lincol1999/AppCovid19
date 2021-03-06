import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { DetailsScreen } from '../screens/DetailsScreen';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
            <Stack.Screen name='Details' component={DetailsScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}
