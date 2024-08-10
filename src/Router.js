import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'

import Category from './pages/Category/Category'
import Cooks from './pages/Cooks/Cooks'
import Detail from './pages/Detail/Detail'

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='CategoryScreen' component={Category} options={{
            title: 'Categories',
            headerTitleStyle: {color: 'orange'}
          }}/>
            <Stack.Screen name='CooksScreen' component={Cooks} options={{
            title: 'Meals',
            headerTitleStyle: {color: 'orange'}
          }}/>
            <Stack.Screen name='DetailScreen' component={Detail} options={{
            title: 'Detail',
            headerTitleStyle: {color: 'orange'}
          }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router

const styles = StyleSheet.create({})