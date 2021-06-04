import React from 'react'
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';

//import Fontisto from 'react-native-vector-icons/Fontisto';
import {NavigationEvents} from 'react-navigation';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton1 from '../components/header-button1'
import {Badge} from 'react-native-elements';
import {connect, useDispatch, useSelector} from "react-redux";
import {FontAwesome, FontAwesome5, Ionicons} from '@expo/vector-icons';


const WishListScreen = (props) => {
  const dispatch = useDispatch();

  const filteredProducts = useSelector((state) => state.wishListItems.wishListItems);

  const count = useSelector((state) => state.itemsCount.itemsCount);
  console.log(filteredProducts);
  // state = {
  //   filteredProducts : [],
  //   count : -12
  // }
  // componentDidMount = ()=>{
  //   let products = this.props.wishListItems.wishListItems;
  //   this.setState({
  //     filteredProducts : products
  //   });
  //   }
  //   getItemsCount = ()=>{
  //     this.setState({
  //       count : this.state.count+1
  //     },
  //     ()=>{
  //       let count = this.props.itemsCount.itemsCount;
  //     this.props.navigation.setParams({
  //       count : count,
  //     });
  //     }
  //     );
  //     let products = this.props.wishListItems.wishListItems;
  //     this.setState({
  //       filteredProducts : products
  //     });
  //     }


  // addCartHandler = (book)=>{
  //   let qty = 1;
  //   book.quantity = qty;
  //    this.props.addToCart(book);
  //    this.getItemsCount();
  //    }
  const getItemsCount = () => {

  }

  const addCartHandler = (book) => {
    book.cart = true;
    //getItemsCount();
    //console.log(this.state.count);
    let qty = 1;
    book.quantity = qty;
    props.addToCart(book);
    props.cartTrue(book.id);
    console.log(book);
    //props.navigation.goBack();
    // this.props.itemsCount.itemsCount
  }

  const deleteFromCartHandler = (id) => {
    // book.cart = false;

    props.deleteFromCart(id);
    props.cartFalse(id);
    //  setTimeout(this.getItemsCount,1000);
  }


  const loadBooks = (book) => {
    let newBook = {
      id: book.item.id,
      title: book.item.title,
      name: book.item.name,
      Description: book.item.Description,
      image: book.item.image,
      Price: book.item.Price,
      category: book.item.category,
      amount: book.item.amount,
      unit: book.item.unit,
      cart: book.item.cart,
      quantity: book.item.quantity
    }
    return (
      <TouchableOpacity onPress={
        () => {
          props.navigation.navigate("ProductDetails",
            {newBook});
        }
      }>
        <View style={styles.productMain}>
          <View style={{width: "40%", height: 180,}}>
            <Image style={{width: "100%", height: 150, borderRadius: 5, marginTop: 8}}
                   source={{uri: book.item.image}}/>
          </View>
          <View style={{justifyContent: "space-around", alignContent: "center", marginLeft: 20,}}>
            <View style={{overFlow: "hidden"}}>
              <Text numberOfLines={2} style={styles.text}>{book.item.title}</Text>
            </View>

            <Text style={styles.text1}>RS.{book.item.Price}(LKR)</Text>
            <Text style={{color: "#666666", fontSize: 20,}}>{book.item.amount}{book.item.unit}</Text>
            {/*<Rating
            startingValue={ Math.floor(parseInt(book.item.rating))}
                ratingCount={5}
                imageSize={25} 
                style={{alignItems:"flex-start"}}
        
        />*/}
            <View style={{flexDirection: "row"}}>
              {book.item.cart ? <TouchableOpacity style={{
                  flexDirection: "row",
                  padding: 10,
                  width: 160,
                  backgroundColor: "#f07800",
                  borderRadius: 3,
                  borderColor: "#f07800",
                  borderWidth: 1,
                }}
                                                  onPress={() => {
                                                    console.log("added to cart click kala")
                                                  }}

                                                  disabled={true}
                >
                  <Ionicons name="md-checkbox" size={25} color="white" style={{marginRight: 10, marginLeft: 2}}/>
                  <Text style={{color: "white", fontWeight: "bold", fontSize: 18, marginRight: 5}}>Added to Cart</Text>
                </TouchableOpacity> :
                <TouchableOpacity style={{
                  flexDirection: "row",
                  padding: 10,
                  width: 160,
                  backgroundColor: "#f07800",
                  borderRadius: 3,
                  borderColor: "#f07800",
                  borderWidth: 1,
                }}
                                  onPress={() => {
                                    addCartHandler(book.item)
                                    console.log("add to cart click kala")

                                  }}
                >
                  <FontAwesome5 name="shopping-cart" size={25} color="white" style={{marginRight: 10, marginLeft: 2}}/>
                  <Text style={{color: "white", fontWeight: "bold", fontSize: 18, marginRight: 5}}>Add to Cart</Text>
                </TouchableOpacity>}
              <TouchableOpacity onPress={() => {
                deleteFromCartHandler(book.item)
                console.log("delete eka click kala")
              }}>
                <FontAwesome name="trash" size={33} color="#FF543C" style={{marginLeft: 10}}/>

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
    flex: 1,
    padding: 10,

  },
  bookMain: {
    marginTop: 10,
    width: "100%",
    height: 500,

    borderColor: "black", borderWidth: 1,
    borderRadius: 5
  },
  productMain: {
    flexDirection: "row",
    justifyContent: "flex-start",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 5


  },
  text: {
    color: "black",
    fontFamily: "halfmoon_bold",
    fontSize: 16,
    fontWeight: "bold",
    overflow: "hidden",
    width: "85%",
  },
  text1: {
    color: "black",
    fontFamily: "halfmoon_bold",
    fontSize: 20,
    fontWeight: "bold",
    overflow: "hidden",
    width: "90%",
  },
  textT: {
    color: "#f07800",
    fontFamily: "halfmoon_bold",
    fontSize: 25,
    fontWeight: "bold",
    overflow: "hidden",

  }
});


// const mapStateToProps = (state)=>{
//   return {
//     wishListItems : state.wishListItems,
//     itemsCount : state.itemsCount,
//   }
// }


WishListScreen.navigationOptions = ({navigation}) => {
  // let n = navigation.getParam("title");

  return {
    headerTitle: "WishList",
    headerRight: <View style={{flexDirection: "row"}}>


      <HeaderButtons HeaderButtonComponent={HeaderButton1}>
        <Item title="Favourtie" iconName="home"
              onPress={
                () => {
                  console.log("Home click kala")
                  navigation.navigate("Categories");
                }
              }
              style={{marginTop: 4}}
        />
      </HeaderButtons>


      <View>
        <Badge value={2} status="primary"
               containerStyle={{position: 'absolute', right: 4, zIndex: 999}}
        />
        <HeaderButtons HeaderButtonComponent={HeaderButton1}>
          <Item title="Favourtie" iconName="shopping-cart"
                onPress={
                  () => {
                    navigation.navigate("Cart");
                  }
                }
                style={{marginTop: 4}}
          />
        </HeaderButtons>

      </View>

    </View>
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (itemData) => {
      dispatch({
        type: "ADD_TO_CART",
        item: itemData
      });
    },
    addToWishList: (itemData) => {
      dispatch({
        type: "ADD_TO_WISH_LIST",
        item: itemData
      });
    },
    deleteFromCart: (itemData) => {
      dispatch({
        type: "DELETE_FROM_CART",
        item: itemData
      });
    },

    cartTrue: (itemData) => {
      dispatch({
        type: "CART_TRUE",
        item: itemData
      });
    },

    cartFalse: (itemData) => {
      dispatch({
        type: "CART_FALSE",
        item: itemData
      });
    }
  }

}

export default connect(null, mapDispatchToProps)(WishListScreen);
