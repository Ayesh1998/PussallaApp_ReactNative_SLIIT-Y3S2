import React, {useState} from 'react'
import {Animated, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import Toast from 'react-native-simple-toast'
import StarRating from 'react-native-star-rating'
import Colors from '../constants/colors'
import HeaderButton from '../components/header-button'

const FeedbackScreen = ({navigation}) => {
  const [email, setEmail] = useState('tharindarajapakshe@y7mail.com')
  const [query, setQuery] = useState('')
  const [rating, setRating] = useState(0)

  return (
    <View style={styles.mainViewStyle}>
      <ScrollView>
        <Animated.View style={styles.animatedViewStyle}>
          <View style={styles.container}>
            <Text style={styles.labelStyle}>
              Email
            </Text>
            <TextInput style={styles.textInputStyle}
                       onChangeText={(email) => setEmail(email)}
                       value={email}
                       placeholder='Enter Email'
                       placeholderTextColor={Colors.tertiaryColor}
                       secureTextEntry={false}/>
            <Text style={styles.labelStyle}>
              Query
            </Text>
            <TextInput style={styles.queryInputStyle}
                       onChangeText={(query) => setQuery(query)}
                       value={query}
                       multiline={true}
                       placeholder='Type your query here...'
                       placeholderTextColor={Colors.tertiaryColor}
                       secureTextEntry={false}/>
            <Text style={styles.labelStyle}>
              Rate Our Services
            </Text>
            <StarRating containerStyle={styles.starContainerStyle}
                        starSize={35}
                        starStyle={styles.starStyle}
                        disabled={false}
                        maxStars={5}
                        rating={rating}
                        selectedStar={(rating) => setRating(rating)}/>
            <View style={styles.viewStyle}>
              <TouchableOpacity style={styles.touchableOpacityStyle}
                                onPress={() => {
                                  Toast.show('Feedback sent successfully.', Toast.SHORT)
                                  setRating(0)
                                  setQuery('')
                                  navigation.navigate({
                                    routeName: 'Home'
                                  })
                                }}>
                <Text style={styles.buttonStyle}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.contactDetailsStyle}>
              Contact Number
              {'  '}
              :
              {'  '}
              011 2 999 999
            </Text>
            <Text style={styles.contactDetailsStyle}>
              Email Address
              {'      '}
              :
              {'  '}
              pussalla@gmail.com
            </Text>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  )
}

FeedbackScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'FEEDBACK',
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
  animatedViewStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    color: Colors.secondaryColor,
    fontSize: 18,
    textTransform: 'uppercase'
  },
  contactDetailsStyle: {
    marginLeft: 20,
    marginTop: 7,
    color: Colors.tertiaryColor
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    margin: 10
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
  queryInputStyle: {
    borderColor: Colors.primaryColor,
    width: wp('80%'),
    borderWidth: 1,
    borderRadius: 10,
    height: 200,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    marginTop: 10,
    alignContent: 'flex-start',
    color: Colors.tertiaryColor
  },
  starContainerStyle: {
    width: wp('80%'),
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15
  },
  starStyle: {
    color: Colors.primaryColor
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
    borderRadius: 10,
    marginBottom: 60
  }
})

export default FeedbackScreen
