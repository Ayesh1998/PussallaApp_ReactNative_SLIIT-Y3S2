import React from 'react'
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/header-button'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const CartScreen = () => {

  return (
      <View>
          cart
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignContent: "center",
        margin: 10,
        alignItems: "center",
    },
});

CartScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Cart',
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

export default CartScreen
