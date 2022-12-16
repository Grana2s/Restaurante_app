import React from 'react'
import {StatusBar} from 'expo-status-bar'
import {StyleSheet, Text, View} from 'react-native'

import ListView from './src/screens/components/list_view'
import DetailView from './src/screens/components/detail_view'
import PreView from './src/screens/components/pre_view'
import ActualizarSucursal from './src/screens/drawer/actualizarsucursal'
//import EliminarSucursal from './src/screens/drawer/eliminarsucursal'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AgregarSucursal from './src/screens/drawer/agregarsucursal'
import ScreenB from './src/screens/drawer/screenB'
import ScreenC from './src/screens/drawer/screenC'
import swipgestures from './src/screens/drawer/swipegestures'

import tab1 from './src/screens/tabs/tab1'
import tab2 from './src/screens/tabs/tab2'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const tab=createBottomTabNavigator()

const renderTabComponents =()=>(
  <tab.Navigator>
    <tab.Screen name="tab1" component={tab1}/>
    <tab.Screen name="tab2" component={tab2}/>
  </tab.Navigator>
)

renderScreenComponents =() => (
  <Stack.Navigator>
    <Stack.Screen name='Inicio' component={ListView}></Stack.Screen>
    <Stack.Screen name='Detail' component={DetailView}></Stack.Screen>
    <Stack.Screen name='Pre' component={PreView}></Stack.Screen>
    <Stack.Screen name="tabs" children={renderTabComponents}/>
  </Stack.Navigator>
)

const renderDrawerSucursalComponents =() => (
  <Stack.Navigator>
    <Drawer.Screen name='swipgestures' component={swipgestures}></Drawer.Screen>
    <Stack.Screen name='ActualizarSucursal' component={ActualizarSucursal}></Stack.Screen>
    
  </Stack.Navigator>
)

/*const renderDrawerSwipGestureComponents =() => (
  <Stack.Navigator>
    <Drawer.Screen name='ScreenC' component={ScreenC}></Drawer.Screen>
    
  </Stack.Navigator>
)*/


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' children={renderScreenComponents}></Drawer.Screen>
        <Drawer.Screen name='Agregar Sucursal' component={AgregarSucursal}></Drawer.Screen>
        <Drawer.Screen name='ScreenB' component={ScreenB}></Drawer.Screen>
        
        <Drawer.Screen name='swipgestures' children={renderDrawerSucursalComponents}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


