import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Colors from '../constants/colors'
import {ORDERS} from '../data/order-data'
import HeaderButton from '../components/header-button'
import OrderListItem from '../components/order-list-item'

const OrdersScreen = ({navigation}) => {
  const renderItemsFunction = (itemData) => {
    return (
      <OrderListItem navigation={navigation}
                     itemData={itemData}/>
    )
  }

  return (
    <View style={styles.list}>
      <FlatList keyExtractor={(item, index) => index.toString()}
                data={ORDERS}
                numColumns={1}
                renderItem={renderItemsFunction}/>
    </View>
  )
}

OrdersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'MY ORDERS',
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

const styles = StyleSheet.create({
  list: {
    marginTop: 5,
    width: wp('100%'),
    backgroundColor: Colors.secondaryColor
  }
})

export default OrdersScreen
