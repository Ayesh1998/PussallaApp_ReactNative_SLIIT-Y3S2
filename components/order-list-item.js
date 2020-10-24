import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Button} from 'react-native-elements'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Colors from '../constants/colors'

const OrderListItem = (props) => {
  let order = {
    order: props.itemData.item,
    navigation: props.navigation,
    refresh: props.refreshFunction
  }

  return (
    <TouchableOpacity style={styles.item}
                      onPress={() => {
                        props.navigation.navigate('OrderDetails', {order})
                      }}>
      <View style={styles.dateView}>
        <Text style={styles.year}>
          {props.itemData.item.year}
        </Text>
        <Text style={styles.date}>
          {props.itemData.item.date}
        </Text>
        <Text style={styles.month}>
          {props.itemData.item.month}
        </Text>
      </View>
      <View style={styles.orderView}>
        <Text style={styles.orderNo}>
          Order No
          {' '}
          :
          {' '}
          {props.itemData.item.orderNo}
        </Text>
        <Text style={styles.amount}>
          Amount
          {'   '}
          :
          {' '}
          Rs.
          {props.itemData.item.amount}
        </Text>
        <View style={styles.statusView}>
          <Button title={props.itemData.item.status}
                  type='solid'
                  disabled={true}
                  containerStyle={styles.statusContainer}
                  titleStyle={styles.statusTitle}
                  disabledTitleStyle={styles.statusTitle}
                  buttonStyle={
                    (props.itemData.item.status === 'Pending') ? styles.statusButtonPending :
                      (props.itemData.item.status === 'Cancelled') ? styles.statusButtonCancelled :
                        (props.itemData.item.status === 'Delivered') ? styles.statusButtonDelivered :
                          null}
                  disabledStyle={
                    (props.itemData.item.status === 'Pending') ? styles.statusButtonPending :
                      (props.itemData.item.status === 'Cancelled') ? styles.statusButtonCancelled :
                        (props.itemData.item.status === 'Delivered') ? styles.statusButtonDelivered :
                          null}/>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  amount: {
    fontSize: 26,
    marginBottom: 20
  },
  date: {
    color: Colors.primaryColor,
    fontSize: 56
  },
  dateView: {
    width: '28%',
    marginLeft: 6
  },
  item: {
    padding: 15,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: Colors.secondaryColor,
    marginHorizontal: wp('4%'),
    marginVertical: hp('0.5%'),
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  month: {
    color: Colors.primaryColor,
    fontSize: 34
  },
  orderNo: {
    fontSize: 26,
    marginBottom: 10
  },
  orderView: {
    alignSelf: 'center'
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
  statusTitle: {
    fontSize: 26,
    color: Colors.secondaryColor
  },
  statusView: {
    alignSelf: 'center'
  },
  year: {
    color: Colors.primaryColor,
    fontSize: 30
  }
})

export default OrderListItem
