import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Button} from 'react-native-elements'
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
        <View>
          <Button title={props.itemData.item.status}
                  type='solid'
                  titleStyle={styles.statusTitle}
                  buttonStyle={styles.statusButton}
                  containerStyle={styles.statusContainer}/>
        </View>
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
  statusButton: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20
  },
  statusContainer: {
    alignSelf: 'flex-start'
  },
  statusTitle: {
    fontSize: 26
  },
  year: {
    color: Colors.primaryColor,
    fontSize: 30
  }
})

export default OrderListItem
