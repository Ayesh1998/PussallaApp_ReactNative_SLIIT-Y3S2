import React, { useEffect, useState  } from 'react'
import {
    StyleSheet,
    View,
    Text,
   TextInput,
   TouchableOpacity,
   FlatList,
   Image,
   Button

  } from 'react-native'; 
import { NavigationEvents } from 'react-navigation';
import { Rating, AirbnbRating } from 'react-native-ratings';  
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import HeaderButton1 from '../components/header-button1'
import { Avatar, Badge,  withBadge } from 'react-native-elements';
import {connect} from "react-redux";
import { useDispatch,useSelector } from "react-redux";
import {FontAwesome, FontAwesome5 ,Ionicons} from '@expo/vector-icons';



const CategoriesProductsScreen =(props) => {
  const dispatch = useDispatch();
  const category = props.navigation.getParam("title");
  const product = props.navigation.getParam("count");
  const [cart,setCart] = useState(false);

  const filteredProducts = useSelector((state) => state.products.products.filter((product)=>product.category === category));
  //const count = useSelector((state) => state.itemsCount.itemsCount);
  

  //  props.navigation.setParams({
  //         count:2,
  // });
 //const [count,setCount] = useState(-12);



   //const [filteredProducts,setFilteredProducts] = useState([]);
   // const [count,setCount] = useState(-12);
    
    //   state = {
    //     filteredProducts : [],
    //    count : -12
    //   }


useEffect(()=>{

  //const filteredProducts1 = useSelector((state) => state.products.products.filter((product)=>product.category === category));
  //setFilteredProducts(filteredProducts1);
//   console.log(props.products.products)
//     let category = props.navigation.getParam("title");
//     console.log(category)

//     let products = props.products.products.filter(
//       (product)=>{
//         return product.category === category
//       }
//     );
 
//     // this.setState({
//     //   filteredProducts : products,
      
//     // });
//     setFilteredProducts({
//       filteredProducts :props.products.products,
      
//     });

//     let count = props.itemsCount.itemsCount;
//     props.navigation.setParams({
//       count,
//     });
   
 })
  
  const addToWishListHandler = (book)=>{
    props.addToWishList(book);
    getItemsCount();
    }
    const addedCartHandler = ()=>{
      console.log("clicked added to cart")
     
    }
  const getItemsCount = ()=>{
    // this.setState({
    //   count : this.state.count+1
    // },
    // ()=>{
    //   let count = props.itemsCount.itemsCount;
    // props.navigation.setParams({
    //   count : count,
    // });
    // }
    // );

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
   setCart(true);
   let qty = 1;
   book.quantity = qty;
    //console.log(this.state.count);
    props.addToCart(book);
    getItemsCount();
    // this.props.itemsCount.itemsCount
  }

 const loadBooks = (book)=>{
                   let newBook = {
                     id : book.item.id,
                     title : book.item.title,
                     name:book.item.name,
                     Description : book.item.Description,
                     image : book.item.image,
                     Price : book.item.Price,
                     category : book.item.category,
                     amount : book.item.amount,
                     unit: book.item.unit
                     }

                     let htitle = book.item.title;
    return (
        <TouchableOpacity onPress={
            ()=>{
                props.navigation.navigate("ProductDetails", 
                {newBook , cart} );
            }
        }>
        <View style={styles.productMain}>
        <View style={{width:"40%", height:180, }}>
        <Image style={{width : "100%" , height:150, borderRadius:5 , marginTop:8}} 
            source={{uri : book.item.image}} />
        </View>
        <View style={{ justifyContent: "space-around", alignContent:"center",  marginLeft:20,}}>
        <View style={{overFlow:"hidden"}}>
           <Text numberOfLines={2} style={styles.text}>{book.item.title}</Text>
             </View>
            
            <Text style={styles.text1}>RS.{book.item.Price}(LKR)</Text>
            <Text style={{color:"#666666" ,fontSize: 20,}}>{book.item.amount}{book.item.unit}</Text>
            {/*<Rating
                startingValue={ Math.floor(parseInt(book.item.rating))}
                    ratingCount={5}
                    imageSize={25} 
                    style={{alignItems:"flex-start"}}
            
            />*/}
             <View style={{flexDirection:"row"}}>
               {cart ?<TouchableOpacity style={{ 
                flexDirection:"row",
                padding:10 ,
                width:160, 
                backgroundColor:"#f07800",
                borderRadius:3,
                borderColor: "#f07800",
                borderWidth:1,
                }} 
                onPress={()=>{
                  console.log("add to cart click kala")
                }}

                disabled={true}
                >
              <Ionicons name="md-checkbox" size={25} color="white" style={{marginRight:10,marginLeft:2 }}/>
             <Text style={{color:"white", fontWeight:"bold",fontSize:18,marginRight:5}}>Added to Cart</Text>
              </TouchableOpacity>: 
             <TouchableOpacity style={{ 
                flexDirection:"row",
                padding:10 ,
                width:160, 
                backgroundColor:"#f07800",
                borderRadius:3,
                borderColor: "#f07800",
                borderWidth:1,
                }} 
                onPress={()=>{
                  console.log("added to cart click kala")
                }}
                >
              <FontAwesome5 name="shopping-cart" size={25} color="white" style={{marginRight:10 ,marginLeft:2 }}/>
             <Text style={{color:"white", fontWeight:"bold",fontSize:18,marginRight:5}}>Add to Cart</Text>
              </TouchableOpacity>  }
              <TouchableOpacity onPress={()=>{
                   console.log("wishlist click kala")
                }}>
                  <FontAwesome name="heart" size={33} color="#FF543C" style={{marginLeft:10}}/>
             
              </TouchableOpacity>
             </View>
        </View>
            
    </View>
    </TouchableOpacity>
    )

    }
  


 
      
        return (
          <View style={styles.main}>
            <NavigationEvents
                onDidFocus={() => {
                  getItemsCount()
                }}
                />
                <View><Text style={styles.textT}>{category}({product})</Text></View>
          <FlatList data={filteredProducts} renderItem={
              loadBooks
              }
           />
         </View>
        )
    
}

const styles = StyleSheet.create({
  main: {
      flex : 1,
      padding : 10,
     
  },
  bookMain :{
      marginTop:10,
      width : "100%",
      height:500,
     
      borderColor:"black" , borderWidth:1,
      borderRadius : 5
  },
  productMain: {
    flexDirection:"row", 
    justifyContent:"flex-start", 
    borderBottomColor:"gray",
    borderBottomWidth:1,
    marginBottom:5
  
      
  },
  text : {
      color:"black",
      fontFamily : "halfmoon_bold",
      fontSize: 16,
      fontWeight:"bold",
      overflow:"hidden",
      width:"85%",
  },
  text1 : {
      color:"black",
      fontFamily : "halfmoon_bold",
      fontSize: 20,
      fontWeight:"bold",
      overflow:"hidden",
      width:"90%",
  },
  textT : {
      color:"#f07800",
      fontFamily : "halfmoon_bold",
      fontSize: 25,
      fontWeight:"bold",
      overflow:"hidden",
     
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
      addToWishList : (itemData)=>{
        dispatch({
          type : "ADD_TO_WISH_LIST",
          item : itemData
        });
      }
    }
}





CategoriesProductsScreen.navigationOptions = ({ navigation }) => {
  let n = navigation.getParam("title");
 
  return {
    headerTitle:null,
    headerRight : <View style={{flexDirection:"row"}}>
     
       <View style={{
           width: 120,
           borderColor:"white",
           borderRadius:3,
           borderWidth:1,
           backgroundColor:"white"
       }}>
       <TextInput placeholder="Search..." style={{padding:5}} />
       </View>
        <HeaderButtons HeaderButtonComponent={HeaderButton1}>
          <Item title="Favourtie" iconName="search" 
          onPress={()=>{
              console.log("Pressed");
          }}
          />
    </HeaderButtons>
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
  };
};


export default connect(mapDispatchToProps)(CategoriesProductsScreen);















