import React, { useState,useEffect } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import { Rating, AirbnbRating } from 'react-native-ratings';  
  import { HeaderButtons , Item } from "react-navigation-header-buttons";
  import HeaderButton1 from '../components/header-button1'
  import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
  import { NavigationEvents } from 'react-navigation';
  import {connect} from "react-redux";
  import { useDispatch,useSelector } from "react-redux";
  



const ProductsDetailScreen =(props) =>{
    
 //const [count,setCount] = useState(-12);
    const count = useSelector((state) => state.itemsCount.itemsCount);
    console.log(count)

    // props.navigation.setParams({
    //        count : count,
    // });
     
//   state = {
//     count : -12
//   }
// componentDidMount = ()=>{
// let count = this.props.itemsCount.itemsCount;
// console.log(count);
// this.props.navigation.setParams({
//   count : count,
// });
// }

 useEffect(()=>{
  //const count1 = useSelector((state) => state.itemsCount.itemsCount);
   //setCount(count1);
   //console.log(count1)


  // props.navigation.setParams({
  //         count : count1,
  // });

})

const getItemsCount = ()=>{
//   this.setState({
//     count : this.state.count+1
//   },
//   ()=>{
//     let count = props.itemsCount.itemsCount;
//   console.log(count);
//   props.navigation.setParams({
//     count : count,
//   });
//   }
//   );

// setCount({
    //   count : count+1
    // },
    // ()=>{
    //   let count = props.itemsCount.itemsCount;
    // props.navigation.setParams({
    //   count : count,
    // });
    // });
}
const addCartHandler = (book)=>{
  getItemsCount();
  //console.log(this.state.count);
  let qty = 1;
   book.quantity = qty;
  props.addToCart(book);
 // console.log(book);
 props.navigation.goBack();
  // this.props.itemsCount.itemsCount
}






        
          let book =props.navigation.getParam("newBook");
          return (
              <ScrollView>
             <View style={styles.main}>
             <NavigationEvents
                onDidFocus={() => {
                  getItemsCount()
                }}
                />
                 <Image
                  source={{ uri: book.image }}
                      style={styles.fitImage}
                  />
                  <View style={styles.infoBox}>
                      <Text>Product </Text>
                      <Text style={styles.propText}>{book.title}</Text>
                  </View>
                 
                  <View style={styles.infoBox}>
                      <Text>Category</Text>
                      <Text style={styles.propText}>{book.category}</Text>
                  </View>
                  <View style={styles.infoBox}>
                      <Text>Price</Text>
                      <Text style={styles.propText}>${book.Price}</Text>
                  </View>
                 <View style={styles.rating}>
                   <View style={{...styles.infoBox, flexDirection:"column"}}>   
                     <Text> Description! </Text>
                      <Text>{book.Description}</Text>
                   </View>
                 <Rating
                 
                  startingValue={Math.floor(parseInt(book.rating))}
                      ratingCount={5}
                      imageSize={40}
                      showRating
                  />
                 </View>
                <View style={{alignItems:"center"}}>
                <TouchableOpacity style={{ 
                justifyContent:"center", 
                alignItems:"center", 
                padding:10 ,
                width:"80%", 
                backgroundColor:"#FF543C",
                borderRadius:3,
               
                marginBottom:20,
                }}
                onPress={()=>{
                  addCartHandler(book);
                }}
                >
              <Text style={{color:"white", fontWeight:"bold", fontSize:20}}>Add to Cart</Text>
              </TouchableOpacity>
                </View>
              
             </View>
             </ScrollView>
           
        )
}

const styles = StyleSheet.create({
  main: {
    flex : 1,
    padding : 10,
},
rating : {
    marginTop:10,
    marginBottom:10
},
infoBox: {
   flexDirection:"row", 
   justifyContent:"space-between", borderColor:"gray",
   borderWidth:1,
    padding:10,
    marginTop:15,
        },
fitImage: {
    borderRadius: 5,
    zIndex : -1,
    resizeMode:"contain",
    width:"100%",
    height:430
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  },
  defaultText:{
    fontSize : 15,
  },
  propText: {
    fontFamily : "halfmoon_bold",
    fontSize : 15,
  }
  });
  
const mapStateToProps = (state)=>{
  return {
    products : state.products,
    itemsCount : state.itemsCount,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    addToCart : (itemData)=>{
      dispatch({
        type : "ADD_TO_CART",
        item : itemData
      });
    }
  }
}



ProductsDetailScreen.navigationOptions = ({ navigation }) => {
    return {
     headerTitle : navigation.getParam("newBook.title"),
      headerRight : <View style={{flexDirection:"row"}}>
       
       <View>
          <Badge value={navigation.getParam("count")} status="primary" 
          containerStyle={{ position: 'absolute',  right: 4 , zIndex:999}}
           />
          <HeaderButtons HeaderButtonComponent={HeaderButton1}>
           <Item title="Favourtie" iconName="shopping-cart" 
           onPress={()=>{
               console.log("Pressed");
           }}
            style={{marginTop:4}}
            />
         </HeaderButtons>
           
          </View>
      </View>
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(ProductsDetailScreen);