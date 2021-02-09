import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export default class Navbar extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleContainer}><Text style={styles.mainTitle}>Biblioteca</Text></View>
                <TouchableOpacity style={styles.searchButton}>
                    <Image style={styles.searchImage}
                    source={require('../assets/img/search.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.alertButton}>
                    <Image style={styles.alertImage}
                    source={require('../assets/img/alert.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: .125,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection:'row'
    },
    titleContainer: {
        flex: 1,
        marginLeft: 30
    },
    mainTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    searchButton: {
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        borderRadius: 100
    },
    searchImage: {
      resizeMode: "contain",
      width: 25,
        height: 25,
    },
    alertButton: {
        padding: 10,
        marginHorizontal: 20
    },
    alertImage: {
      resizeMode: "contain",
      width: 25,
        height: 25,
    },
});