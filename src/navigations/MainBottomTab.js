import React from 'react'
import PropTypes from 'prop-types'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View, TouchableOpacity } from 'react-native'

import HomeScreen from 'src/ui/screens/Home/HomeScreen'
import FavouriteScreen from 'src/ui/screens/Home/FavouriteScreen'
import CartScreen from 'src/ui/screens/Home/CartScreen'
import AccountScreen from 'src/ui/screens/Home/AccountScreen'

const Tab = createBottomTabNavigator()

const arBottomIcons = ['ios-home', 'ios-heart', 'ios-cart', 'ios-person']
const arBottomTitles = ['Beranda', 'Favorit', 'Keranjang', 'Akun']

const BottomTab = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 60,
        alignItems: 'center',
      }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 12,
                textAlign: 'center',
                color: isFocused ? 'blue' : '#4A5A67',
              }}>
              {arBottomTitles[index]}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

BottomTab.propTypes = {
  state: PropTypes.object,
  descriptors: PropTypes.object,
  navigation: PropTypes.object,
}

const MainBottomTab = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
      <Tab.Screen name="TabHome" component={HomeScreen} />
      <Tab.Screen name="TabFavourite" component={FavouriteScreen} />
      <Tab.Screen name="TabCart" component={CartScreen} />
      <Tab.Screen name="TabAccount" component={AccountScreen} />
    </Tab.Navigator>
  )
}

export default MainBottomTab
