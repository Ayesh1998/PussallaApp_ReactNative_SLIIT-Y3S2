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
import CartScreen from '../screens/cart-screen'

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: Colors.secondaryColor
    }
  }
)

const ProfileNavigator = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: Colors.secondaryColor
    }
  }
)

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen,
    OrderDetails: OrderDetailsScreen
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: Colors.secondaryColor
    }
  }
)

const FeedbackNavigator = createStackNavigator(
  {
    Feedback: FeedbackScreen
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: Colors.secondaryColor
    }
  }
)

const CartNavigator = createStackNavigator(
  {
    Cart: CartScreen
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: Colors.secondaryColor
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
        drawerLabel: 'My Profile',
        drawerIcon: <Ionicons name='md-person'
                              size={25}/>
      }
    },
    Cart: {
      screen: CartNavigator,
      navigationOptions: {
        drawerLabel: 'Cart',
        drawerIcon: <Ionicons name='md-albums'
                              size={25}/>
      }
    },
    Orders: {
      screen: OrdersNavigator,
      navigationOptions: {
        drawerLabel: 'My Orders',
        drawerIcon: <Ionicons name='md-albums'
                              size={25}/>
      }
    },
    Feedback: {
      screen: FeedbackNavigator,
      navigationOptions: {
        drawerLabel: 'Feedback',
        drawerIcon: <Ionicons name='md-paper-plane'
                              size={25}/>
      }
    }
  },
  {
    drawerBackgroundColor: Colors.secondaryColor,
    contentOptions: {
      activeTintColor: Colors.primaryColor
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
