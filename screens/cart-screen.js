import React, { useContext, useEffect, useRef } from "react";
import {View, TextInput, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native'
import {Text, Button, Icon} from "react-native-elements";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/header-button'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import CartListItem from "../components/cart-list-items";
import {cartItems} from "../data/cart-items";
import HeaderButton1 from "../components/header-button1";

const CartScreen = ({navigation}) => {
    const renderItemsFunction = (itemData) => {
        return (
            <CartListItem navigation={navigation}
                           itemData={itemData}/>
        )
    }

  return (
      <View >
          {/*{/<View style={{marginLeft:330, marginBottom: -0}}>/}*/}
          {/*    <Icon name='trash-2'*/}
          {/*          type='feather'*/}
          {/*          style={{marginTop:10}}*/}
          {/*    />*/}
          {/*{/</View>/}*/}

        <View style={styles.list}>
          <FlatList keyExtractor={(item, index) => index.toString()}
                    data={cartItems}
                    numColumns={1}
                    renderItem={renderItemsFunction}/>
        </View>
        <View style={{ flexDirection:"row", backgroundColor: "#f07800",flexWrap:"wrap",marginBottom:-63}}>
              <View style={{backgroundColor: "#f07800", marginLeft:5}}>
              <Text style={{backgroundColor: "#f07800", flexWrap:"wrap", color:'white', marginTop:10}}>
                  Items : 03
              </Text>
              <Text style={{backgroundColor: "#f07800", flexWrap:"wrap", color:'white', padding:1.9}}>
                  Delivery Charge : Rs.300.00
              </Text>
              <Text style={{backgroundColor: "#f07800", flexWrap:"wrap", color:'white'}}>
                  Total Amount : Rs.4500.00

              </Text>
                  <Text style={{color:"#f07800"}}> {' '}
                      :
                      {' '}
                      {' '}
                      :
                      {' '}</Text>
              </View>
              <TouchableOpacity
                  style={{
                      width: "40%",
                      height: 50,
                      backgroundColor: "#f07800",
                      borderColor:'white',
                      borderWidth:1,
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft:30,
                      marginTop:15,
                  }}
                  onPress={() => {
                      navigation.navigate('DeliveryDetails')
                  }}

              >
                  <Text style={{ color: "#fff", fontSize: 18 }}>CONTINUE</Text>
              </TouchableOpacity>
          </View>
      </View>
  )
}

CartScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Cart',
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu'
                      iconName='ios-menu'
                      onPress={() => {
                          navData.navigation.toggleDrawer()
                      }}/>
            </HeaderButtons>,
    }
}

const styles = StyleSheet.create({
    list: {
        marginTop: 5,
        height:'90%'
    }
});



export default CartScreen