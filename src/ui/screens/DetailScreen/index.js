import React from 'react'
import PropTypes from 'prop-types'
import { Button, View } from 'react-native'

const DetailScreen = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Go to home screen" />
    </View>
  )
}

export default DetailScreen

DetailScreen.propTypes = {
  navigation: PropTypes.object,
}
