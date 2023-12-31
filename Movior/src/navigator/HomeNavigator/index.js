import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from "../../screens/HomeScreen"
import DiscoverScreen from "../../screens/DiscoverScreen"


const Stack = createStackNavigator()
function index() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{
            headerShown:false
        }}
        />
    </Stack.Navigator>
  )
}

export default index