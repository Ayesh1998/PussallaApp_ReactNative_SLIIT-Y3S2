import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
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
      <Text>{props.itemData.item.orderNo}</Text>
      <Text>{props.itemData.item.amount}</Text>
      <Text>{props.itemData.item.status}</Text>
      <Text>{props.itemData.item.year}</Text>
      <Text>{props.itemData.item.month}</Text>
      <Text>{props.itemData.item.date}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: Colors.secondaryColor,
    height: hp('20%'),
    marginHorizontal: wp('4%'),
    marginVertical: hp('0.5%')
  }
})

export default OrderListItem
