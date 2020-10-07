import React from 'react'
import {Text, View} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/header-button'

const DeliveryDetailsScreen = () => {
    return (
        <View>
            <Text style={{
                fontWeight: 'bold',
                color: 'rgb(114, 105, 105)'
            }}>
                Delivery Details
            </Text>
        </View>
    )
}

DeliveryDetailsScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Delivery Details',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu'
                      iconName='ios-menu'
                      onPress={() => {
                          navData.navigation.toggleDrawer()
                      }}
                />
            </HeaderButtons>
        )
    }
}

export default DeliveryDetailsScreen
