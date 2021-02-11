import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default class Navbar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.backButtonContainer}>
                    <TouchableOpacity style={styles.backButton}>
                        <Image style={styles.backImage}
                            source={require('../../assets/img/back.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.sideButtonContainer}>
                    <TouchableOpacity style={styles.saveButton}>
                        <Image style={styles.saveImage}
                            source={require('../../assets/img/save.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.moreButton}>
                        <Image style={styles.moreImage}
                            source={require('../../assets/img/moreOptions.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: .125,
        alignItems: 'center',
        flexDirection: 'row'
    },
    backButton: {
        padding: 10,
    },
    backButtonContainer: {
        flex: .7,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginStart: 10
    },
    backImage: {
        resizeMode: "contain",
        width: 25,
        height: 25,
    },
    sideButtonContainer: {
        flex: .3,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    saveImage: {
        resizeMode: "contain",
        width: 25,
        height: 25,
    },
    moreImage: {
        resizeMode: "contain",
        width: 25,
        height: 25,
    },
});