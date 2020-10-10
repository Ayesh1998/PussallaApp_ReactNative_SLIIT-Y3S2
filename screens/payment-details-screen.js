import React from 'react'
import {Text, View} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/header-button'

const PaymentScreen = () => {
    return (
        <View>
            <Text style={{
                fontWeight: 'bold',
                color: 'rgb(114, 105, 105)'
            }}>
                Payment Screen
            </Text>
        </View>
    )
}

PaymentScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Payment Details',
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

export default PaymentScreen
