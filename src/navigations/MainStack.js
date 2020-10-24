import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainBottomTab from './MainBottomTab'
import DetailScreen from 'src/ui/screens/DetailScreen'

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={MainBottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default MainStack
