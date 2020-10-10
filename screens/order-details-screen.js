import React, {useState} from 'react'
import {Animated, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Button} from 'react-native-elements'
import {DataTable} from 'react-native-paper'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Toast from 'react-native-simple-toast'
import Dialog from 'react-native-dialog'
import Colors from '../constants/colors'

const OrderDetailsScreen = (props) => {
  let order = props.navigation.getParam('order')

  const [visible, setVisible] = useState(false)

  const showDialog = async () => {
    setVisible(true)
  }

  const hideDialog = async () => {
    setVisible(false)
  }

  const handleCancelOrder = async () => {
    await hideDialog()
    Toast.show('Order cancelled.', Toast.SHORT)
    props.navigation.goBack()
  }

  return (
    <View style={styles.mainViewStyle}>
      <Dialog.Container visible={visible}>
        <Dialog.Title style={styles.dialogTitle}>
          Cancel Order
        </Dialog.Title>
        <Dialog.Description style={styles.dialogDescription}>
          Do you want to cancel this order?
        </Dialog.Description>
        <Dialog.Button label='Yes'
                       onPress={handleCancelOrder}
                       style={styles.dialogButtonYes}/>
        <Dialog.Button label='No'
                       onPress={hideDialog}
                       style={styles.dialogButtonNo}/>
      </Dialog.Container>
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
                    <DataTable.Title style={styles.tableHeaderName}>
                      Product Name
                    </DataTable.Title>
                    <DataTable.Title numeric
                                     style={styles.tableHeaderUnitPrice}>
                      Unit Price
                    </DataTable.Title>
                    <DataTable.Title numeric
                                     style={styles.tableHeaderQty}>
                      Qty
                    </DataTable.Title>
                    <DataTable.Title numeric
                                     style={styles.tableHeaderTotal}>
                      Total
                    </DataTable.Title>
                  </DataTable.Header>
                  {
                    order.order.products.map((data, index) => (
                      <DataTable.Row key={index}>
                        <DataTable.Cell style={styles.tableCellName}>
                          {data.name}
                        </DataTable.Cell>
                        <DataTable.Cell numeric
                                        style={styles.tableCellUnitPrice}>
                          {data.unitPrice}
                        </DataTable.Cell>
                        <DataTable.Cell numeric
                                        style={styles.tableCellQty}>
                          {data.quantity}
                        </DataTable.Cell>
                        <DataTable.Cell numeric
                                        style={styles.tableCellTotal}>
                          {data.amount}
                        </DataTable.Cell>
                      </DataTable.Row>
                    ))
                  }
                </DataTable>
              </View>
              <View style={styles.textView}>
                <Text style={styles.textPrices}>
                  Sub Total
                  {'       '}
                  :
                  {'  '}
                  Rs.
                  {' '}
                </Text>
                <Text style={styles.textPricesSubTotal}>
                  {order.order.subTotal}
                </Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.textPrices}>
                  Delivery Fee
                  {'  '}
                  :
                  {'  '}
                  Rs.
                  {'    '}
                </Text>
                <Text style={styles.textPricesDeliveryFee}>
                  {order.order.deliveryFee}
                </Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.textPrices}>
                  Discount
                  {'        '}
                  :
                  {'  '}
                  Rs.
                  {'        '}
                </Text>
                <Text style={styles.textPricesDiscount}>
                  {order.order.discount}
                </Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.textFinalPrice}>
                  Total
                  {'               '}
                  :
                  {'  '}
                  Rs.
                  {' '}
                </Text>
                <Text style={styles.textPricesTotal}>
                  {order.order.amount}
                </Text>
              </View>
            </View>
            {
              order.order.status === 'Pending' ? (
                <View style={styles.viewStyle}>
                  <TouchableOpacity style={styles.touchableOpacityStyle}
                                    onPress={showDialog}>
                    <Text style={styles.buttonStyle}>
                      Cancel Order
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : null
            }
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
  dialogButtonNo: {
    color: Colors.accentColor
  },
  dialogButtonYes: {
    marginRight: 25,
    color: Colors.dangerColor
  },
  dialogDescription: {
    marginTop: 20
  },
  dialogTitle: {
    textTransform: 'uppercase',
    color: Colors.primaryColor
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
    marginTop: 30,
    marginBottom: 30
  },
  tableCellName: {
    flex: 2.2
  },
  tableCellQty: {
    flex: 0.5
  },
  tableCellTotal: {
    flex: 1
  },
  tableCellUnitPrice: {
    flex: 1
  },
  tableHeaderName: {
    flex: 2.3
  },
  tableHeaderQty: {
    flex: 0.5
  },
  tableHeaderTotal: {
    flex: 1
  },
  tableHeaderUnitPrice: {
    flex: 1
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
  textPricesSubTotal: {
    fontSize: 26,
    marginTop: 16,
    marginLeft: 8
  },
  textPricesDeliveryFee: {
    fontSize: 26,
    marginTop: 16,
    marginLeft: 5
  },
  textPricesDiscount: {
    fontSize: 26,
    marginTop: 16,
    marginLeft: 8
  },
  textPricesTotal: {
    fontSize: 26,
    marginTop: 30,
    marginLeft: 7,
    color: Colors.primaryColor
  },
  textView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
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
