import React from 'react'
import {Picker, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/header-button'
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {Icon} from 'react-native-elements'

const PaymentCardScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabsStyle1}>

        <Text style={styles.methodeHeaderStyle}>Select Payment Method</Text>
        <View
          style={{
            borderBottomColor: "#f07800",
            borderBottomWidth: 1,
          }}
        />
        <View style={styles.methodeStyle}>
          <TouchableOpacity>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <Text style={{fontSize: 18, marginRight: 5}}>Cash on Delivery</Text>
              <Icon name='circle'
                    type='feather'
                    onPress={() => {
                      navigation.navigate('PaymentDetails')
                    }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <Text style={{fontSize: 18, marginRight: 5}}>Card on Delivery</Text>
              <Icon name='check-circle'
                    type='Octicons'
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Picker
            style={styles.textInputStyles}
            // style={{ height: 50, width: 150 }}
            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Select Bank" value="java"/>
            <Picker.Item label="BOC" value="js"/>
            <Picker.Item label="Sampath" value="java1"/>
            <Picker.Item label="HNB" value="js2"/>
          </Picker>
          <Text style={{marginLeft: 7}}>Card No</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder=""
          />
        </View>
      </View>
      <View style={styles.tabsStyle3}>

      </View>
      <View style={styles.tabsStyle2}>
        <Text style={styles.totalBillHeaderStyle}>Total Bill</Text>

        <View style={styles.listItemStyle}>
          <Text style={styles.listOneItemStyle}>Items : 02</Text>
          <Text style={styles.listOneItemStyle}>Total Price : Rs.3000.00</Text>
          <Text style={styles.listOneItemStyle}>Delivery Charge : Rs.500.00</Text>
        </View>
      </View>

      <View style={styles.tabsStyle4}>
        <Text style={{textDecorationLine: 'underline'}}>Terms and Conditions</Text>
      </View>

      <TouchableOpacity
        style={{
          width: "100%",
          height: 40,
          backgroundColor: "#f07800",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          navigation.navigate('Cart')
        }}
      >
        <Text style={{color: "#fff", fontSize: 18}}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  )
}

PaymentCardScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Payment Details',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu'
              iconName='ios-menu'
              onPress={() => {
                navData.navigation.toggleDrawer()
              }}
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    // alignContent: "center",
    margin: 10,
    // alignItems: "center",
  },
  tabsStyle1: {
    flex: 3.1,
    justifyContent: "flex-start",
    borderColor: "#f07800",
    borderWidth: 1,
    borderRadius: 10,

  },
  tabsStyle2: {
    flex: 3,
    borderColor: "#f07800",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
  },
  tabsStyle3: {
    flex: 0.3,

  },
  tabsStyle4: {
    flex: 0.5,
    alignItems: "center",
    // marginTop: 10,
    padding: 10
  },
  methodeStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    margin: 10,

  },
  methodeHeaderStyle: {
    padding: 5,
    fontSize: 20
  },
  totalBillHeaderStyle: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: 20
  },
  listItemStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 40,
    alignItems: "center",
    marginTop: -25
  },
  listOneItemStyle: {
    padding: 10,
    fontSize: 18
  },
  textInputStyle: {
    borderColor: "#f07800",
    width: wp("87%"),
    borderWidth: 1,
    borderRadius: 10,
    height: 35,
    marginLeft: 9,
    // marginRight: 20,
    padding: 8,
    marginTop: 8,
    alignItems: "center",
  },
});

export default PaymentCardScreen
