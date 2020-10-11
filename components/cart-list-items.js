import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Button, Icon} from 'react-native-elements'
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
               <Image source={{ uri:props.itemData.item.image}} style={styles.fitImage} />
            </View>
            <View>
                <Text style={styles.orderNo}>
                    {props.itemData.item.name}
                </Text>
                <Text style={styles.subNameStyle}>
                    {props.itemData.item.subName}
                </Text>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.amount}>
                        {props.itemData.item.price}
                        {'   '}
                        *
                        {' '}
                    </Text>
                    <TouchableOpacity>
                        <Icon name='plus'
                              type='feather'
                              style={ {size:500} }
                        />
                    </TouchableOpacity>
                    <Text style={styles.amount}>
                        {props.itemData.item.amount}
                    </Text>
                    <TouchableOpacity>
                        <Icon name='minus'
                              type='feather'
                        />
                    </TouchableOpacity>

                    <Text style={styles.amount}>
                        =
                        {' '}
                        Rs.
                        {props.itemData.item.totalPrice}
                    </Text>
                </View>
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
            <TouchableOpacity style={{flexDirection:"row", justifyContent:"space-between", marginLeft:50, marginRight:70}}>
                        <Icon name='trash-2'
                              type='feather'
                              style={{marginBottom:-50}}
                        />
                        <Button title="Remove"
                                titleStyle={styles.statusTitle}
                                buttonStyle={styles.statusButton}
                                containerStyle={styles.statusContainer}/>
            </TouchableOpacity>
        </View>

        </View>

    )
}

const styles = StyleSheet.create({
    amount: {
        fontSize: 15,
        // marginBottom: 10
    },
    date: {
        color: Colors.primaryColor,
        fontSize: 56
    },
    dateView: {
        width: '28%'
    },
    mainOne:{
        padding: 15,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: Colors.secondaryColor,
        marginHorizontal: wp('4%'),
        marginVertical: hp('1%'),
        flexWrap: 'wrap',
    },
    mainItem1 :{
        flex: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    mainItem2 :{
        padding: 15,
        flex: 1,
        flexWrap: 'wrap',
    },
    item: {
        padding: 15,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
    },
    orderNo: {
        fontSize: 26,
        marginBottom: 10
    },
    subNameStyle:{
        fontSize:20,
        marginBottom: 10
    },
    statusButton: {
        backgroundColor: white,
        marginTop: -10
    },
    statusContainer: {
        alignSelf: 'flex-start'
    },
    statusTitle: {
        fontSize: 26,
        color:'black'

    },
    image: {
        color: Colors.primaryColor,
        fontSize: 30
    }
})

export default CartListItem
