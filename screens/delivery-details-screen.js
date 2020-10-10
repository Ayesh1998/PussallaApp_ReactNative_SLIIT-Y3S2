import React from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/header-button'
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

const DeliveryDetailsScreen = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text >Personal Information </Text>
            </View>
            <View >
                <Text style={styles.textStyle} >Name </Text>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Name" />
                <Text style={styles.textStyle}>Phone Number </Text>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Phone Number"
                />
                <Text style={styles.textStyle}>Email </Text>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Email"
                />
            </View>
            <View style={styles.container}>
                <Text >Delivery Information </Text>
            </View>
            <View>
                <Text style={styles.textStyle}>Street </Text>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Street" />
                <Text style={styles.textStyle}>City </Text>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="City"
                />
                <Text style={styles.textStyle}>Outlet </Text>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Outlet"
                />
            </View>
            <View
                style={{
                    marginTop: 20,
                    marginLeft: 20,
                    marginRight: 20,
                    borderRadius: 10,
                }}
            >
                <TouchableOpacity
                    style={{
                        width: "100%",
                        height: 40,
                        backgroundColor: "#f07800",
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onPress={() => {
                        // navigation.navigate("Shop");
                    }}
                >
                    <Text style={{ color: "#fff", fontSize: 18 }}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignContent: "center",
        margin: 10,
        alignItems: "center",
    },
    textInputStyle: {
        borderColor: "#f07800",
        width: wp("80%"),
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        marginLeft: 35,
        // marginRight: 20,
        padding: 10,
        marginTop: 8,
        alignItems: "center",
    },
    textStyle: {
        width: wp("80%"),
        height: 5,
        marginLeft: 35,
        // marginRight: 20,
        padding: 10,
        marginTop: 2,
    },
});

DeliveryDetailsScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Delivery Details',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu'
                      iconName='ios-menu'
                      onPress={() => {
                          navData.navigation.toggleDrawer()
                      }}
                />
            </HeaderButtons>
        )
    }
}

export default DeliveryDetailsScreen
