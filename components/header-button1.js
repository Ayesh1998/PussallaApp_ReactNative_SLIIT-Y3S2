import React from 'react'
import {HeaderButton} from 'react-navigation-header-buttons'
import {Ionicons} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome5';

const CustomHeaderButton1 = (props) => {
  return (
    <HeaderButton {...props}
                  IconComponent={Icon}
                  iconSize={25}
                  color='white'/>
  )
}

export default CustomHeaderButton1
