import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const fetchProfile = async () => {
      navigation.replace('Login')
    }

    setTimeout(() => {
      fetchProfile()
    }, 2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Splash Screen</Text>
    </View>
  )
}

export default SplashScreen

SplashScreen.propTypes = {
  navigation: PropTypes.object,
}
