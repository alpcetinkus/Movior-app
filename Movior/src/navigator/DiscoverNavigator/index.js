import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import DiscoverScreen from "../../screens/DiscoverScreen"


const Stack = createStackNavigator()
function index() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Discover"
        component={DiscoverScreen}
        options={{
            headerShown:false
        }}
        />
    </Stack.Navigator>
  )
}

export default index