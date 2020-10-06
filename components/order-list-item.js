import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'

const OrderListItem = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.touchable}>
        <TouchableOpacity onPress={props.onViewDetail}
                          useForeground>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: hp('20%'),
    marginHorizontal: wp('4%'),
    marginVertical: hp('0.5%')
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  }
})

export default OrderListItem
