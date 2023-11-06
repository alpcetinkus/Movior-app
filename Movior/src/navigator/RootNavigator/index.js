import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons'; 
import HomeNavigator from "../HomeNavigator"
import DiscoverNavigator from "../DiscoverNavigator"



const Tab = createBottomTabNavigator()

function index() {
  return (
    <Tab.Navigator 
    initialRouteName='Home'
    screenOptions={{
        tabBarHideOnKeyboard:true,
        tabBarShowLabel:false,
        tabBarActiveTintColor: "#FF8F71",
        tabBarInactiveTintColor: "#dadada",
        headerShown:false,
        tabBarStyle:{
            height: 50,
            backgroundColor:'#15141F',
            borderTopWidth:1,
            borderTopColor: '#15141F'
        }
    }}
    >

    <Tab.Screen 
    name= "Home"
    component={HomeNavigator}
    options={{
        tabBarIcon: ({color}) => (
            <Entypo name="home" size={24} color={color} />
        )
    }}
    />
     <Tab.Screen 
    name= "Discovery"
    component={DiscoverNavigator}
    options={{
        tabBarIcon: ({color}) => (
            <FontAwesome5 name="play" size={30} color={color} />
            
        )
    }}
    />

<Tab.Screen 
    name= "Profile"
    component={HomeNavigator}
    options={{
        tabBarIcon: ({color}) => (
            <Ionicons name="person" size={24} color={color} />
        )
    }}
    />


    </Tab.Navigator>
  )
}

export default index