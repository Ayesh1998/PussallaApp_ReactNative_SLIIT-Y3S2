import React from 'react'
import {Animated, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {DataTable} from 'react-native-paper'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Toast from 'react-native-simple-toast'
import Colors from '../constants/colors'

const OrderDetailsScreen = (props) => {
  let order = props.navigation.getParam('order')

  return (
    <View style={styles.mainViewStyle}>
      <ScrollView>
        <Animated.View style={styles.animatedViewStyle}>
          <View style={styles.container}>
            <View>
              <Text>
                Order No
                {' '}
                :
                {' '}
                {order.order.orderNo}
              </Text>
              <Text>
                Date
                {' '}
                :
                {' '}
                {order.order.date}
                {' '}
                {order.order.month}
                {' '}
                {order.order.year}
              </Text>
              <Text>
                Status
                {' '}
                :
                {' '}
                {order.order.status}
              </Text>
              <View>
                <DataTable>
                  <DataTable.Header>
                    <DataTable.Title>Product</DataTable.Title>
                    <DataTable.Title numeric>Unit Price</DataTable.Title>
                    <DataTable.Title numeric>Quantity</DataTable.Title>
                    <DataTable.Title numeric>Total Amount</DataTable.Title>
                  </DataTable.Header>
                  {
                    order.order.products.map((data) => (
                      <DataTable.Row>
                        <DataTable.Cell>{data.name}</DataTable.Cell>
                        <DataTable.Cell numeric>{data.unitPrice}</DataTable.Cell>
                        <DataTable.Cell numeric>{data.quantity}</DataTable.Cell>
                        <DataTable.Cell numeric>{data.amount}</DataTable.Cell>
                      </DataTable.Row>
                    ))
                  }
                </DataTable>
              </View>
              <Text>
                Sub Total
                {' '}
                :
                {' '}
                {order.order.subTotal}
              </Text>
              <Text>
                Delivery Fee
                {' '}
                :
                {' '}
                {order.order.deliveryFee}
              </Text>
              <Text>
                Discount
                {' '}
                :
                {' '}
                {order.order.discount}
              </Text>
              <Text>
                Total
                {' '}
                :
                {' '}
                {order.order.amount}
              </Text>
            </View>
            <View style={styles.viewStyle}>
              <TouchableOpacity style={styles.touchableOpacityStyle}
                                onPress={() => {
                                  Toast.show('Order cancelled.', Toast.SHORT)
                                  props.navigation.goBack()
                                }}>
                <Text style={styles.buttonStyle}>
                  Cancel Order
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  )
}

OrderDetailsScreen.navigationOptions = () => {
  return {
    headerTitle: 'ORDER DETAILS'
  }
}

const styles = StyleSheet.create({
  animatedViewStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    color: Colors.secondaryColor,
    fontSize: 18,
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    margin: 10
  },
  mainViewStyle: {
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: Colors.secondaryColor
  },
  touchableOpacityStyle: {
    height: 40,
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    justifyContent: 'center',
    width: wp('80%'),
    marginLeft: 20,
    marginRight: 20,
    padding: 10
  },
  viewStyle: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10
  }
})

export default OrderDetailsScreen
