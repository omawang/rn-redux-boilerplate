import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { acPopulateProfile } from 'src/store/actions/users'
import { useDispatch } from 'react-redux'

const LoginScreen = () => {
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(acPopulateProfile({ name: 'awank' }))
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <TouchableOpacity onPress={handleLogin}>
        <Text>Go To Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen
