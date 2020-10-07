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
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch,useSelector } from "react-redux";



const CategoriesProductsScreen =(props) => {
  const dispatch = useDispatch();
  const category = props.navigation.getParam("title");

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
                     Description : book.item.Description,
                     image : book.item.image,
                     Price : book.item.Price,
                     category : book.item.category,
                     rating : book.item.rating,
                     favourite: book.item.favourite
                   }
    return (
        <TouchableOpacity onPress={
            ()=>{
                props.navigation.navigate("ProductDetails", 
                {newBook} );
            }
        }>
        <View style={styles.productMain}>
        <View style={{width:"35%", height:200, }}>
        <Image style={{width : "100%" , height:"95%" , resizeMode:"contain", borderRadius:5}} 
            source={{uri : book.item.image}} />
        </View>
        <View style={{ justifyContent: "space-around", alignContent:"center",  marginLeft:20,}}>
        <View style={{overFlow:"hidden"}}>
           <Text numberOfLines={1} style={styles.text}>{book.item.title}</Text>
             </View>
            <Text style={{color:"#666666"}}>Category : {book.item.category}</Text>
            <Text style={styles.text}>Price : ${book.item.Price}</Text>
            <Rating
                startingValue={ Math.floor(parseInt(book.item.rating))}
                    ratingCount={5}
                    imageSize={25} 
                    style={{alignItems:"flex-start"}}
            
                />
             <View style={{flexDirection:"row"}}>
             <TouchableOpacity style={{ 
                justifyContent:"center", 
                alignItems:"center", 
                padding:10 ,
                width:135, 
                backgroundColor:"white",
                borderRadius:3,
                borderColor: "#FF543C",
                borderWidth:1,
                }} 
                onPress={()=>{
                  addCartHandler(newBook);
                }}
                >
             <Text style={{color:"#FF543C", fontWeight:"bold"}}>Add to Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{
                  addToWishListHandler(newBook);
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
      fontSize: 15,
      fontWeight:"bold",
      overflow:"hidden",
      width:"90%",
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
 
  return {
   title : navigation.getParam("title"),
    headerRight : <View style={{flexDirection:"row"}}>
       <View style={{
           width: 200,
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
     
    <View>
    <Badge value={navigation.getParam("count")} status="primary" 
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















