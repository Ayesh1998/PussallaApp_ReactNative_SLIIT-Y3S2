import React from 'react'
import {Text, View} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/header-button'

const HomeScreen = () => {
  return (
    <View>
      <Text style={{
        fontWeight: 'bold',
        color: 'rgb(114, 105, 105)'
      }}>
        Home
      </Text>
    </View>
  )
}

HomeScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'HOME',
    headerLeft: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu'
              iconName='ios-menu'
              onPress={() => {
                navData.navigation.toggleDrawer()
              }}/>
      </HeaderButtons>
  }
}

export default HomeScreen
