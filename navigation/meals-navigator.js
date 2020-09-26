import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {Ionicons} from '@expo/vector-icons'
import Colors from '../constants/colors'
import HomeScreen from '../screens/home-screen'
import AuthScreen from '../screens/auth-screen'
import ForgotPasswordScreen from '../screens/forgot-password-screen'
import ProfileScreen from '../screens/profile-screen'
import OrdersScreen from '../screens/orders-screen'
import OrderDetailsScreen from '../screens/order-details-screen'
import FeedbackScreen from '../screens/feedback-screen'

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: 'white'
    }
  }
)

const ProfileNavigator = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: 'white'
    }
  }
)

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: 'white'
    }
  }
)

const OrderDetailsNavigator = createStackNavigator(
  {
    OrderDetails: OrderDetailsScreen
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: 'white'
    }
  }
)

const FeedbackNavigator = createStackNavigator(
  {
    Feedback: FeedbackScreen
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: 'white'
    }
  }
)

const ShopNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: <Ionicons name='ios-home'
                              size={25}/>
      }
    },
    Profile: {
      screen: ProfileNavigator,
      navigationOptions: {
        drawerLabel: 'Profile',
        drawerIcon: <Ionicons name='md-person'
                              size={25}/>
      }
    },
    Orders: {
      screen: OrdersNavigator,
      navigationOptions: {
        drawerLabel: 'My Orders',
        drawerIcon: <Ionicons name='md-person'
                              size={25}/>
      }
    },
    OrderDetails: {
      screen: OrderDetailsNavigator,
      navigationOptions: {
        drawerLabel: 'Order Details',
        drawerIcon: <Ionicons name='md-person'
                              size={25}/>
      }
    },
    Feedback: {
      screen: FeedbackNavigator,
      navigationOptions: {
        drawerLabel: 'Feedback',
        drawerIcon: <Ionicons name='md-person'
                              size={25}/>
      }
    }
  },
  {
    drawerBackgroundColor: 'rgba(255, 255, 255, 0.9)',
    contentOptions: {
      activeTintColor: Colors.primaryColor,
      labelStyle: {}
    }
  }
)

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
    ForgotPassword: ForgotPasswordScreen
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
)

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Shop: ShopNavigator
})

export default createAppContainer(MainNavigator)
