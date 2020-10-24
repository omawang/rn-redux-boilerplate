import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from 'src/ui/screens/Auth/SplashScreen'
import LoginScreen from 'src/ui/screens/Auth/LoginScreen'
import RegisterScreen from 'src/ui/screens/Auth/RegisterScreen'

const Stack = createStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" headerMode="none">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack
