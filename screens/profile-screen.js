import React, {useState} from 'react'
import {Animated, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import DropDownPicker from 'react-native-dropdown-picker'
import Toast from 'react-native-simple-toast'
import Colors from '../constants/colors'
import HeaderButton from '../components/header-button'

const cities = [
  {
    label: 'Galle',
    value: 'Galle'
  },
  {
    label: 'Colombo',
    value: 'Colombo'
  },
  {
    label: 'Matara',
    value: 'Matara'
  },
  {
    label: 'Kandy',
    value: 'Kandy'
  }
]

const ProfileScreen = ({navigation}) => {
  const [name, setName] = useState('Tharinda Rajapaksha')
  const [address, setAddress] = useState('No.52, Nagarukkarama Road, Kalegana, Galle.')
  const [city, setCity] = useState('Galle')
  const [phoneNo, setPhoneNo] = useState('0712089046')
  const [email, setEmail] = useState('tharindarajapakshe@y7mail.com')

  return (
    <View style={styles.mainViewStyle}>
      <ScrollView>
        <Animated.View style={styles.animatedViewStyle}>
          <View style={styles.container}>
            <Text style={styles.labelStyle}>
              Name
            </Text>
            <TextInput style={styles.textInputStyle}
                       onChangeText={(name) => setName(name)}
                       value={name}
                       placeholder='Enter Name'
                       placeholderTextColor={Colors.tertiaryColor}
                       secureTextEntry={false}/>
            <Text style={styles.labelStyle}>
              Address
            </Text>
            <TextInput style={styles.addressInputStyle}
                       onChangeText={(address) => setAddress(address)}
                       value={address}
                       multiline={true}
                       placeholder='Enter Address'
                       placeholderTextColor={Colors.tertiaryColor}
                       secureTextEntry={false}/>
            <Text style={styles.labelStyle}>
              City
            </Text>
            <DropDownPicker onChangeItem={(city) => setCity(city.value)}
                            placeholder='Select City'
                            placeholderTextColor={Colors.tertiaryColor}
                            defaultValue={city}
                            items={cities}
                            style={styles.dropDownPickerStyle}
                            containerStyle={styles.dropDownContainerStyle}
                            dropDownStyle={styles.dropDownStyle}
                            itemStyle={styles.dropDownItemStyle}
                            labelStyle={styles.dropDownLabelStyle}
                            placeholderStyle={styles.dropDownPlaceholderStyle}
                            arrowStyle={styles.dropDownArrowStyle}
                            activeItemStyle={styles.dropDownActiveItemStyle}
                            activeLabelStyle={styles.dropDownActiveLabelStyle}/>
            <Text style={styles.labelStyle}>
              Phone No
            </Text>
            <TextInput style={styles.textInputStyle}
                       onChangeText={(phoneNo) => setPhoneNo(phoneNo)}
                       value={phoneNo}
                       placeholder='Enter Phone No'
                       placeholderTextColor={Colors.tertiaryColor}
                       secureTextEntry={false}/>
            <Text style={styles.labelStyle}>
              Email
            </Text>
            <TextInput style={styles.textInputStyle}
                       onChangeText={(email) => setEmail(email)}
                       value={email}
                       placeholder='Enter Email'
                       placeholderTextColor={Colors.tertiaryColor}
                       secureTextEntry={false}/>
            <View style={styles.viewStyle}>
              <TouchableOpacity style={styles.touchableOpacityStyle}
                                onPress={() => {
                                  Toast.show('Profile updated successfully.', Toast.SHORT)
                                  navigation.navigate({
                                    routeName: 'Home'
                                  })
                                }}>
                <Text style={styles.buttonStyle}>
                  Update
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  )
}

ProfileScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'MY PROFILE',
    headerLeft: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu'
              iconName='ios-menu'
              onPress={() => {
                navData.navigation.toggleDrawer()
              }}/>
      </HeaderButtons>
  }
}

const styles = StyleSheet.create({
  addressInputStyle: {
    borderColor: Colors.primaryColor,
    width: wp('80%'),
    borderWidth: 1,
    borderRadius: 10,
    height: 80,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    marginTop: 10,
    alignContent: 'flex-start',
    color: Colors.tertiaryColor
  },
  animatedViewStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    color: Colors.secondaryColor,
    fontSize: 18,
    textTransform: 'uppercase'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    margin: 10
  },
  dropDownActiveItemStyle: {
    alignItems: 'flex-start'
  },
  dropDownActiveLabelStyle: {
    color: Colors.tertiaryColor
  },
  dropDownArrowStyle: {
    borderColor: Colors.tertiaryColor
  },
  dropDownContainerStyle: {
    height: 50
  },
  dropDownItemStyle: {
    alignItems: 'flex-start'
  },
  dropDownLabelStyle: {
    color: Colors.tertiaryColor
  },
  dropDownPickerStyle: {
    borderColor: Colors.primaryColor,
    width: wp('80%'),
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    marginTop: 10
  },
  dropDownPlaceholderStyle: {
    color: Colors.tertiaryColor
  },
  dropDownStyle: {
    marginTop: 11,
    marginLeft: 20,
    marginRight: 20,
    width: wp('80%')
  },
  labelStyle: {
    marginLeft: 20,
    marginTop: 24,
    color: Colors.primaryColor
  },
  mainViewStyle: {
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: Colors.secondaryColor
  },
  textInputStyle: {
    borderColor: Colors.primaryColor,
    width: wp('80%'),
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    marginTop: 10,
    color: Colors.tertiaryColor
  },
  touchableOpacityStyle: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewStyle: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10
  }
})

export default ProfileScreen
