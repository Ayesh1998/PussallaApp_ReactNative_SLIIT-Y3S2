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
  import { Avatar, Badge,  withBadge } from 'react-native-elements';
  import { NavigationEvents } from 'react-navigation';
  import {connect} from "react-redux";
  import { useDispatch,useSelector } from "react-redux";
 import Icon from 'react-native-vector-icons/AntDesign';
 import { FontAwesome5 ,Ionicons} from '@expo/vector-icons';

  



const ProductsDetailScreen =(props) =>{
  const dispatch = useDispatch();
    
 //const [count,setCount] = useState(-12);
    //const [cart,setCart] = useState(false);
    const count = useSelector((state) => state.itemsCount.itemsCount);
    const cartProducts = useSelector((state) => state.cartItems.cartItems);
    console.log(count)
    console.log("cart items me")
   console.log(cartProducts)
   console.log("cart items me1111111111111111111111")
  
    //const[quantity, setQuantity] = useState(1);
   
    
   let pCart =props.navigation.getParam("cart");
   console.log(pCart)

    let book =props.navigation.getParam("newBook");
    console.log(book.quantity)
    console.log("222222222222222222221111111111111111111111")

    

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
  book.cart = true;
  //getItemsCount();
  //console.log(this.state.count);
  let qty = 1;
   book.quantity = qty;
  props.addToCart(book);
  props.cartTrue(book.id);
//  console.log(book);
//  console.log(book.quantity);
 //props.navigation.goBack();
  // this.props.itemsCount.itemsCount
}

const addedCartHandler = ()=>{
  console.log("clicked added to cart")
 
}

const decreaseQuantity = (id)=>{
  console.log("decrease");
  // if(quantity > 1){
  //   setQuantity(quantity - 1)
  // } 

  if(book.quantity > 1){
      book.quantity = book.quantity - 1;
    } 
  props.decreaseQuantity(id);
  
 
}

const increaseQuantity = (id)=>{
  console.log("increase");
  
  // setQuantity(quantity + 1)
  book.quantity = book.quantity + 1;

  props.increaseQuantity(id);
 
}







        
         
          //book.quantity = 2;
          console.log(book)

          console.log(book.cart)

          
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
                      
                      <Text numberOfLines={2} style={styles.name}>{book.title}</Text>
                  </View>
                 
                  <View style={styles.infoBox}>
                  <View style={{flexDirection:"column",marginVertical:0}}>
                      <Text numberOfLines={2} style={styles.price}>RS.{book.Price}(LKR)</Text>
                      <Text style={styles.amount}>{book.amount}{book.unit}</Text>
                  </View>
                  </View>
                 
                  <View style={{...styles.infoBox, flexDirection:"column"}}>   
                     
                      <Text style={styles.desc}>{book.Description}</Text>
                   </View>

                   <View style={{height:50}}></View>
                   
                   <View style={{flexDirection:"row" , marginLeft:20,marginRight:20}}>
                   {(book.cart) ? 
                <TouchableOpacity style={{ 
                flexDirection:"row", 
                padding:10 ,
                width:"65%", 
                backgroundColor:"#f07800",
                borderRadius:3,
               
                marginBottom:20,
                }}
                onPress={()=>{
                  addedCartHandler();
                }}

                disabled={true}
                >
                  
                  <Ionicons name="md-checkbox" size={35} color="white" style={{marginRight:10,marginLeft:5 }}/>
                
              <Text style={{color:"white", fontWeight:"bold", fontSize:25,marginRight:10}}>Added to Cart</Text>
              
              </TouchableOpacity>:<TouchableOpacity style={{ 
                flexDirection:"row", 
                padding:10 ,
                width:"65%", 
                backgroundColor:"#f07800",
                borderRadius:3,
               
                marginBottom:20,
                }}
                onPress={()=>{
                  addCartHandler(book);
                 
                }}
                >
                  <FontAwesome5 name="shopping-cart" size={33} color="white" style={{marginRight:15 ,marginLeft:5 }}/>
                
              <Text style={{color:"white", fontWeight:"bold", fontSize:25,marginRight:10}}>Add to Cart</Text>
              
              </TouchableOpacity>}

              <View style={{flexDirection:"row",marginVertical:5,marginLeft:18}}>
            {book.quantity > 1 ? 
            <TouchableOpacity onPress={
              ()=>{
                decreaseQuantity(book.id);
                setTimeout(getItemsCount,1000);
              }
            }> 
            <Icon  name="minussquareo" size={35} color="black" style={{marginRight:10, marginTop:2}} />
            </TouchableOpacity>
            : <TouchableOpacity disabled={true} onPress={
             ()=>{
               decreaseQuantity(book.id);
               setTimeout(getItemsCount,1000);
             }
           }> 
           <Icon name="minussquareo" size={35} color="gray" style={{marginRight:10, marginTop:2}} />
           </TouchableOpacity>
             }
           
            
              <Text style={{fontSize:30, }}>
                {book.quantity}
              </Text>
              <TouchableOpacity onPress={
                ()=>{
                  increaseQuantity(book.id);
                  setTimeout(getItemsCount,1000);
                }
              }>
              <Icon name="plussquareo" size={35} color="black" style={{marginLeft:10, marginTop:2}} />
              </TouchableOpacity>
			  
			  
			  
			  
        
            </View> 
                </View>
              
                
                   
                 {/*<Rating
                 
                  startingValue={Math.floor(parseInt(book.rating))}
                      ratingCount={5}
                      imageSize={40}
                      showRating
                 />
                    <View style={styles.infoBox}>
                   
            </View>
                 
                 */}
              

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
   flexDirection:"column", 
   justifyContent:"center", borderColor:"orange",
   borderWidth:1,
    padding:10,
    marginTop:15,
        },
fitImage: {
    borderRadius: 5,
    zIndex : -1,
    resizeMode:"contain",
    width:"100%",
    height:250
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  },
  defaultText:{
    fontSize : 15,
  },
  price: {
    fontFamily : "halfmoon_bold",
    fontSize : 22,
    fontWeight:"bold"
  },
 amount: {
    
    fontSize : 22,
    
  }
  ,name: {
    
    fontSize : 18,
    fontWeight:"bold"
  }
  ,desc: {
    
    fontSize : 18,
    
  }
  });
  
// const mapStateToProps = (state)=>{
//   return {
//     products : state.products,
//     itemsCount : state.itemsCount,
//   }
// }
const mapDispatchToProps = (dispatch)=>{
  return {
    addToCart : (itemData)=>{
      dispatch({
        type : "ADD_TO_CART",
        item : itemData
      });
    },

    decreaseQuantity : (itemData)=>{
      dispatch({
        type : "DECREASE_QUANTITY",
        item : itemData
      });
    },
    increaseQuantity : (itemData)=>{
      dispatch({
        type : "INCREASE_QUANTITY",
        item : itemData
      });
    },

    cartTrue : (itemData)=>{
      dispatch({
        type : "CART_TRUE",
        item : itemData
      });
    }
  }
}



ProductsDetailScreen.navigationOptions = ({ navigation }) => {
    return {
     headerTitle : "SINGLE ITEM",
     
      headerRight : <View style={{flexDirection:"row"}}>
        <HeaderButtons HeaderButtonComponent={HeaderButton1}>
     <Item title="Favourtie" iconName="home" 
     onPress={
      ()=>{
        console.log("Home click kala")
       navigation.navigate("Categories");
      } 
     }
      style={{marginTop:4}}
      />
   </HeaderButtons>
    <HeaderButtons HeaderButtonComponent={HeaderButton1}>
     <Item title="Favourtie" iconName="heart" 
     onPress={
      ()=>{
       navigation.navigate("WishList");
      } 
     }
      style={{marginTop:4}}
      />
   </HeaderButtons>
   
       
       <View>
          <Badge value={3} status="primary" 
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
    };
  };

export default connect(null,mapDispatchToProps)(ProductsDetailScreen);