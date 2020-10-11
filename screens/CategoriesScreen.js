import React, { useEffect, useState  } from 'react'

import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
    FlatList,
    Image
   
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HeaderButton from '../components/header-button'
import HeaderButton1 from '../components/header-button1'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons';

const CategoriesScreen = (props) => {

  const [categories, setCategories] =  useState([
    {id : "1" , title: "Chicken Range", image : "https://c7.alamy.com/comp/T85KHD/fresh-meat-products-in-butcher-shop-T85KHD.jpg"},
    {id : "2" , title: "Pork Range", image : "https://static2.bigstockphoto.com/9/5/2/large2/259399861.jpg"},
    {id : "4" , title: "Mutton & Beef", image : "https://c7.alamy.com/comp/T85KHD/fresh-meat-products-in-butcher-shop-T85KHD.jpg"},
    {id : "5" , title: "Chicken Sausages", image : "https://c7.alamy.com/comp/T85KHD/fresh-meat-products-in-butcher-shop-T85KHD.jpg"},
    {id : "8" , title: "Pork Sausages", image : "https://c7.alamy.com/comp/T85KHD/fresh-meat-products-in-butcher-shop-T85KHD.jpg"},
    {id : "9" , title: "Chicken Meat Balls", image : "https://c7.alamy.com/comp/T85KHD/fresh-meat-products-in-butcher-shop-T85KHD.jpg"},
    {id : "6" , title: "Australian Lamb", image : "https://c7.alamy.com/comp/T85KHD/fresh-meat-products-in-butcher-shop-T85KHD.jpg"},
    {id : "7" , title: "Brown Eggs", image : "https://c7.alamy.com/comp/T85KHD/fresh-meat-products-in-butcher-shop-T85KHD.jpg"},
   
]);
  // state = {
  //   categories : [
  //     {id : "1" , title: "Books", image : "https://image.flaticon.com/icons/png/512/562/562132.png"},
  //     {id : "2" , title: "Mobiles", image : "https://icon-library.net/images/smartphone-icon-png/smartphone-icon-png-13.jpg"},
  //     {id : "4" , title: "Watches", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHVsPJmUpbX1qe0js7-NLLHWzrJNofP0wrim8dle-Oj5k31CC&s"},
  //     {id : "5" , title: "Shoes", image : "https://cdn3.iconfinder.com/data/icons/sport-set-1/512/Shoes_2-256.png"},
  //     {id : "8" , title: "Laptops", image : "https://cdn0.iconfinder.com/data/icons/devices-icons-rounded/110/Laptop-512.png"},
  //     {id : "9" , title: "T-Shirt", image : "https://cdn2.iconfinder.com/data/icons/mobile-device/512/tshirt-wear-sport-man-blue-round-512.png"},
  //     {id : "6" , title: "Jewelry", image : "https://www.shareicon.net/data/512x512/2016/09/02/824427_jewel_512x512.png"},
  //     {id : "7" , title: "Wallets", image : "https://cdn4.iconfinder.com/data/icons/peppyicons-rounded/512/wallet2-512.png"},
     
  // ]
  // }

  const renderItemsFunction = (itemData)=>{
    return (  
        <TouchableOpacity style={styles.item}
              onPress={
            ()=>{
                props.navigation.navigate("CategoriesProducts" , {title:itemData.item.title,});
            }
        }>      
            <View>
              <Image source={{uri : itemData.item.image }} style={{width:120, height:120}} />
            </View>
            <Text style={styles.text} numberOfLines={2}> {itemData.item.title} </Text>
       
        </TouchableOpacity>

    )
 }

   
      
        return (
           
          <View style={styles.main}>
          <FlatList style={{marginTop:5}} data={categories} numColumns={2} 
          renderItem={renderItemsFunction} />
        </View>
        )
    
}

const styles = StyleSheet.create({
  main: {
      flex : 1,
      padding : 5,
      backgroundColor : "#f5f5f0",
      marginLeft: 10,
      marginRight: 10
  },
  item:{
      flex : 1,
              height:180,
              backgroundColor:"white",
              borderRadius : 5,
              shadowColor: "gray",
              shadowOpacity : 0.4,
              shadowOffset : {width:0, height:2},
              shadowRadius : 2,
              elevation : 2,
              justifyContent : "center",
              alignItems : "center",
              padding : 15,
              margin:5
  },
  text : {
      fontSize : 18,
      fontFamily : "halfmoon_bold",
      alignContent : "flex-end",
      marginTop: 10
  }
})

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Pussalla',
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

export default CategoriesScreen
