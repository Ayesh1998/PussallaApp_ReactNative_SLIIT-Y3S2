import React from 'react'
import {HeaderButton} from 'react-navigation-header-buttons'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Colors from '../constants/colors'

const CustomHeaderButton1 = (props) => {
  return (
    <HeaderButton {...props}
                  IconComponent={Icon}
                  iconSize={25}
                  color={Colors.secondaryColor}/>
  )
}

export default CustomHeaderButton1
