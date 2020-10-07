import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Colors from '../constants/colors'

const OrderListItem = (props) => {
  return (
    <TouchableOpacity style={styles.item}
                      onPress={() => {
                        props.navigation.navigate('OrderDetails', {
                          order: props.itemData.item
                        })
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
      <View>
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
        <Text style={styles.status}>
          {props.itemData.item.status}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  amount: {
    fontSize: 26,
    marginBottom: 10
  },
  date: {
    color: Colors.primaryColor,
    fontSize: 56
  },
  dateView: {
    width: '28%'
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
  status: {
    fontSize: 26
  },
  year: {
    color: Colors.primaryColor,
    fontSize: 30
  }
})

export default OrderListItem
