import React from 'react'

import Carousel from '../components/Carousel'
import { dummyData } from '../data/Data'


import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
    FlatList,
    Image,
    SectionList,
    ScrollView,
  
   
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HeaderButton from '../components/header-button'
import HeaderButton1 from '../components/header-button1'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons';
import { Avatar, Badge,  withBadge } from 'react-native-elements';


const HomeScreen = (props) =>{
   
    const meats= [{id : "1" , title: "Chicken Range",count:"5", image : "https://c7.alamy.com/comp/T85KHD/fresh-meat-products-in-butcher-shop-T85KHD.jpg"},
    {id : "2" , title: "Pork Range",count:"8", image : "https://static2.bigstockphoto.com/9/5/2/large2/259399861.jpg"},
    {id : "4" , title: "Mutton & Beef",count:"2", image : "https://c7.alamy.com/comp/T85KHD/fresh-meat-products-in-butcher-shop-T85KHD.jpg"},];
    const sausages =[{id : "5" , title: "Chicken Sausages",count:"21", image : "https://c7.alamy.com/comp/T85KHD/fresh-meat-products-in-butcher-shop-T85KHD.jpg"},
    {id : "8" , title: "Pork Sausages",count:"6", image : "https://c7.alamy.com/comp/T85KHD/fresh-meat-products-in-butcher-shop-T85KHD.jpg"},
    {id : "9" , title: "Mutton Sausages", count:"1",image : "https://c7.alamy.com/comp/T85KHD/fresh-meat-products-in-butcher-shop-T85KHD.jpg"},
   ];
    const other =[{id : "9" , title: "Chicken Meat Balls", count:"8",image : "https://c7.alamy.com/comp/T85KHD/fresh-meat-products-in-butcher-shop-T85KHD.jpg"},
    {id : "6" , title: "Australian Lamb", count:"3",image : "https://c7.alamy.com/comp/T85KHD/fresh-meat-products-in-butcher-shop-T85KHD.jpg"},
    {id : "7" , title: "Brown Eggs", count:"3",image : "https://c7.alamy.com/comp/T85KHD/fresh-meat-products-in-butcher-shop-T85KHD.jpg"},
   ];
  
  
    const renderItemsFunction = (itemData)=>{
      return (  
          <TouchableOpacity style={styles.item}
                onPress={
              ()=>{
                  props.navigation.navigate("CategoriesProducts" , {title:itemData.item.title,count:itemData.item.count});
              }
          }>      
              <View>
                <Image source={{uri : itemData.item.image }} style={{width:130, height:72}} />
              </View>
              <Text style={styles.text} numberOfLines={2}> {itemData.item.title} </Text>
         
          </TouchableOpacity>
  
      )
   }
  
  const renderList = ({ section, index }) => {
    if (index !== 0) return null;
  
    return (
      <ScrollView horizontal={true}>
      <FlatList numColumns={4}
        columnWrapperStyle={styles.main}
        data={section.data}
        renderItem={renderItemsFunction}
        
      />
      </ScrollView>
    )
  }
     
        
          return (
           

            <View style={styles.main}>
            
            <View>
            <Carousel data = {dummyData}/>
            </View>  

            <View><Text style={styles.notice}>Minimum  order value Rs.1500 per order</Text></View>
            <SectionList 
            sections ={[
              {title:'MEATS' ,data:meats},
              {title:'SAUSAGES' ,data:sausages},
              {title:'OTHER' ,data:other},
  
            ]}
            renderSectionHeader ={
              ({section}) => <Text  style={{marginTop:5 ,fontWeight:"bold",fontSize:14,color:"black"}}>{section.title}</Text>
            }
            renderItem ={renderList}
           keyExtractor={(item,index) => index}
            style={{marginTop:5}}
           
            /> 
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
                height:101,
                backgroundColor:"white",
                borderRadius : 5,
                shadowColor: "gray",
                shadowOpacity : 0.4,
                shadowOffset : {width:0, height:2},
                shadowRadius : 2,
                elevation : 2,
                justifyContent : "center",
                alignItems : "center",
                padding : 2,
                margin:5
    },
    text : {
        fontSize : 15,
        alignContent : "flex-end",
        marginTop: 10,
        fontWeight:"bold"
    },
    notice : {
      fontSize : 19,
      alignContent : "center",
      marginTop: 10,
      fontWeight:"bold",
      color:"white",
      marginLeft:12,
      marginRight:10,
      borderColor:"black",
      borderWidth:2,
      paddingLeft:8,
      backgroundColor:'black'
  }
  })
  
  HomeScreen.navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'PUSSALLA',
      headerTitleAlign: 'center',
      headerLeft: () =>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title='Menu'
                iconName='ios-menu'
                onPress={() => {
                  navigation.toggleDrawer()
                }}/>
        </HeaderButtons>,
      headerRight :  <View style={{flexDirection:"row"}}>
       
     
      <HeaderButtons HeaderButtonComponent={HeaderButton1}>
       <Item title="Favourtie" iconName="heart" 
       onPress={
        ()=>{
         navigation.navigate("Cart");
        } 
       }
        style={{marginTop:4}}
        />
     </HeaderButtons>
     
       
      <View>
      <Badge value={2} status="primary" 
      containerStyle={{ position: 'absolute',  right: 4 , zIndex:999}}
       />
      <HeaderButtons HeaderButtonComponent={HeaderButton1}>
       <Item title="Favourtie" iconName="shopping-cart" 
       onPress={
        ()=>{
         navigation.navigate("Cart");
        } 
       }
        style={{marginTop:4}}
        />
     </HeaderButtons>
       
      </View>
   
      </View>
    }
  }
  


export default HomeScreen