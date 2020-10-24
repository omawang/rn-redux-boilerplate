import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import Gap from 'src/ui/components/Gap'

import { acPopulateProfile } from 'src/store/actions/users'

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>This is home page</Text>
      <Gap height={20} />
      <Text>Data User from redux:</Text>
      <Text>{JSON.stringify(users)}</Text>
      <Gap height={20} />
      <Button
        onPress={() => {
          if (!users) {
            dispatch(
              acPopulateProfile({ name: 'Awank', phone: '628994111129' }),
            )
          } else {
            dispatch(acPopulateProfile(null))
          }
        }}
        title={!users ? 'Set Data User' : 'Revoke Data User'}
      />
      <Gap height={20} />
      <Button
        onPress={() => navigation.navigate('Detail')}
        title="Go to detail screen"
      />
    </View>
  )
}

export default HomeScreen

HomeScreen.propTypes = {
  navigation: PropTypes.object,
}
