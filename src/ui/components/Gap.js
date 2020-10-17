import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

const Gap = ({ height = 0, width = 0 }) => {
  return <View style={{ height, width }} />
}

export default Gap

Gap.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
}
