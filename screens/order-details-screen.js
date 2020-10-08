import React from 'react'
import {Animated, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {DataTable} from 'react-native-paper'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Toast from 'react-native-simple-toast'
import Colors from '../constants/colors'
import {Button} from "react-native-elements";

const OrderDetailsScreen = (props) => {
  let order = props.navigation.getParam('order')

  return (
    <View style={styles.mainViewStyle}>
      <ScrollView>
        <Animated.View style={styles.animatedViewStyle}>
          <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.text}>
                Order No
                {'   '}
                :
                {'   '}
                {order.order.orderNo}
              </Text>
              <Text style={styles.text}>
                Date
                {'           '}
                :
                {'   '}
                {order.order.date}
                {' '}
                {order.order.month}
                {' '}
                {order.order.year}
              </Text>
              <View style={styles.statusRow}>
                <View style={styles.statusText}>
                  <Text style={styles.text}>
                    Status
                    {'        '}
                    :
                    {'   '}
                  </Text>
                </View>
                <View style={styles.statusView}>
                  <Button title={order.order.status}
                          type='solid'
                          disabled={true}
                          containerStyle={styles.statusContainer}
                          titleStyle={styles.statusTitle}
                          disabledTitleStyle={styles.statusTitle}
                          buttonStyle={
                            (order.order.status === 'Pending') ? styles.statusButtonPending :
                              (order.order.status === 'Cancelled') ? styles.statusButtonCancelled :
                                (order.order.status === 'Delivered') ? styles.statusButtonDelivered :
                                  null}
                          disabledStyle={
                            (order.order.status === 'Pending') ? styles.statusButtonPending :
                              (order.order.status === 'Cancelled') ? styles.statusButtonCancelled :
                                (order.order.status === 'Delivered') ? styles.statusButtonDelivered :
                                  null}/>
                </View>
              </View>
              <View style={styles.table}>
                <DataTable>
                  <DataTable.Header>
                    <DataTable.Title>Product</DataTable.Title>
                    <DataTable.Title numeric>Unit Price</DataTable.Title>
                    <DataTable.Title numeric>Quantity</DataTable.Title>
                    <DataTable.Title numeric>Total Amount</DataTable.Title>
                  </DataTable.Header>
                  {
                    order.order.products.map((data, index) => (
                      <DataTable.Row key={index}>
                        <DataTable.Cell>{data.name}</DataTable.Cell>
                        <DataTable.Cell numeric>{data.unitPrice}</DataTable.Cell>
                        <DataTable.Cell numeric>{data.quantity}</DataTable.Cell>
                        <DataTable.Cell numeric>{data.amount}</DataTable.Cell>
                      </DataTable.Row>
                    ))
                  }
                </DataTable>
              </View>
              <Text style={styles.textPrices}>
                Sub Total
                {'       '}
                :
                {'  '}
                Rs.
                {' '}
                {order.order.subTotal}
              </Text>
              <Text style={styles.textPrices}>
                Delivery Fee
                {'  '}
                :
                {'  '}
                Rs.
                {'    '}
                {order.order.deliveryFee}
              </Text>
              <Text style={styles.textPrices}>
                Discount
                {'        '}
                :
                {'  '}
                Rs.
                {'        '}
                {order.order.discount}
              </Text>
              <Text style={styles.textFinalPrice}>
                Total
                {'               '}
                :
                {'  '}
                Rs.
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
  content: {
    width: wp('80%'),
    marginLeft: 40,
    marginRight: 40
  },
  mainViewStyle: {
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: Colors.secondaryColor
  },
  statusButtonCancelled: {
    paddingTop: 3,
    paddingBottom: 6,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 25,
    backgroundColor: Colors.tertiaryColor
  },
  statusButtonDelivered: {
    paddingTop: 3,
    paddingBottom: 6,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 25,
    backgroundColor: Colors.accentColor
  },
  statusButtonPending: {
    paddingTop: 3,
    paddingBottom: 6,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 25,
    backgroundColor: Colors.primaryColor
  },
  statusContainer: {
    alignSelf: 'flex-start'
  },
  statusRow: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginVertical: hp('0.5%'),
    marginTop: 5
  },
  statusText: {
    marginLeft: -1
  },
  statusTitle: {
    fontSize: 24,
    color: Colors.secondaryColor
  },
  statusView: {
    alignSelf: 'center',
    marginTop: 20
  },
  table: {
    marginTop: 40,
    marginBottom: 40
  },
  text: {
    fontSize: 26,
    marginTop: 16,
    marginLeft: 30
  },
  textFinalPrice: {
    fontSize: 26,
    marginTop: 30,
    marginLeft: 20,
    color: Colors.primaryColor
  },
  textPrices: {
    fontSize: 26,
    marginTop: 16,
    marginLeft: 20
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
