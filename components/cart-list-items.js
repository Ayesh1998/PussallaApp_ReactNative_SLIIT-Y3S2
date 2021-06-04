import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Button, Icon} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Colors from '../constants/colors'
import {white} from "react-native-paper/src/styles/colors";

const CartListItem = (props) => {
  return (
    <View style={styles.mainOne}>
      <View style={styles.mainItem1}>
        <TouchableOpacity style={styles.item}
                          onPress={() => {
                            props.navigation.navigate('DeliveryDetails')
                          }}>
          <View style={styles.dateView}>
            <Image source={{uri: props.itemData.item.image}} style={{width: 80, height: 80}}/>
            {/*<Image source={{uri : itemData.item.image }} style={{width:130, height:72}} />*/}
          </View>
          <View>
            <View style={{flexDirection: "row"}}>
              <Text style={styles.orderNo}>
                {props.itemData.item.name}
                {" "}
                -
                {" "}
              </Text>
              <Text style={styles.subNameStyle}>
                {props.itemData.item.subName}
              </Text>
            </View>

            <Text style={styles.amount}>
              Unit Price
              {' '}
              -
              {' '}
              Rs. {props.itemData.item.price}
            </Text>
            <View style={{flexDirection: "row"}}>

              <TouchableOpacity style={{marginTop: 4, marginRight: 18, marginLeft: 4}}>
                <Ionicons name='md-remove'
                          size={20}
                />
              </TouchableOpacity>
              <Text style={styles.amount}>
                {props.itemData.item.amount}
              </Text>
              <TouchableOpacity style={{marginTop: 4, marginLeft: 18, marginRight: 4}}>
                <Ionicons name='md-add'
                          size={20}

                />
              </TouchableOpacity>


            </View>
            <Text style={styles.amount}>

              Rs.
              {props.itemData.item.totalPrice}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomColor: "#f07800",
          borderBottomWidth: 1,
        }}
      />
      <View style={styles.mainItem2}>
        <TouchableOpacity style={{flexDirection: "row", justifyContent: "center", marginLeft: 50, marginRight: 70}}>
          <View>
            <Icon name='trash-2'
                  type='feather'
              // style={{marginBottom:-50}}
            />
          </View>

          <Button title="Remove"
                  titleStyle={styles.statusTitle}
                  buttonStyle={styles.statusButton}
                  containerStyle={styles.statusContainers}/>
        </TouchableOpacity>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  amount: {
    fontSize: 20,
    marginBottom: 5
    // marginBottom: 10
  },
  date: {
    color: Colors.primaryColor,
    fontSize: 56
  },
  dateView: {
    width: '28%'
  },
  mainOne: {
    // padding: 10,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: Colors.secondaryColor,
    marginHorizontal: wp('4%'),
    marginVertical: hp('1%'),
    flexWrap: 'wrap',
  },
  mainItem1: {
    // padding:1,
    flex: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  mainItem2: {
    padding: 10,
    flex: 1,
    flexWrap: 'wrap',
  },
  item: {
    padding: 5,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
  },
  orderNo: {
    fontSize: 25,
    marginBottom: 4
  },
  subNameStyle: {
    fontSize: 18,
    marginBottom: 2,
    marginTop: 5
  },
  statusButton: {
    backgroundColor: white,
    marginTop: -10
  },
  statusContainers: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginRight: 10

  },
  statusTitle: {
    fontSize: 26,
    color: 'black'

  },
  image: {
    color: Colors.primaryColor,
    fontSize: 30
  },
  deleteBtn: {
    fontSize: 50
  }
})

export default CartListItem
