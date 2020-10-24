import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import AuthStack from './AuthStack'
import MainStack from './MainStack'

const AppContainer = () => {
  const users = useSelector((state) => state.users)

  return (
    <NavigationContainer>
      {!users.profile ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  )
}

export default AppContainer
