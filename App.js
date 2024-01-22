import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, Pressable, Linking } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen'
import MovieScreen from './Screens/MovieScreen'
import FlagScreen from './Screens/FlagScreen'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />),}}/>
          <Tab.Screen name="Movies" component={MovieScreen} options={{headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="videocam" color={color} size={size} />),}}/>
          <Tab.Screen name="Flags" component={FlagScreen} options={{headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="flag" color={color} size={size} />),}}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}
