import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import DetailScreen from "../../screens/DetailScreen"

const Stack = createStackNavigator()
function index() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Detail"
        component={DetailScreen}
        options={{
            headerShown:false
        }}
        />
    </Stack.Navigator>
  )
}

export default index