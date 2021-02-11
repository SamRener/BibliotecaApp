import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default class BookInfo extends Component{
    state = {
        book: {
            Title: "O Senhor dos Anéis: A Sociedade do Anel",
            Image: require("../../assets/img/temp/TLOR.jpg"),
            Author: {
                Name: "J. R. R. Tolkien"
            },
            PublishDate: '2000'
        }
    }
    render(){
        return (
            <View style={styles.mainContainer}>
                <View style={styles.infoContainer}>
                    <Image style={styles.bookImage} source={this.state.book.Image} />
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{this.state.book.Title}</Text>
                        <View style={styles.authorContainer}>
                            <Text style={styles.textInfo}>{this.state.book.Author.Name}</Text>
                            <View style={styles.separator}></View>
                            <Text style={styles.textInfo}>{this.state.book.PublishDate}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginHorizontal: 90
    },
    infoContainer: {
        flex: .28,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bookImage: {
        width: 100,
        height: 154,
        resizeMode: 'center',
        borderRadius: 15,
    },
    titleContainer: {
        paddingStart: 30
    },
    title: {
        fontWeight: 'bold',
        fontSize: 19,
        fontFamily: 'QuicksandBold-Regular'
    },
    authorContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    textInfo: {
       color: '#00000030',
        fontSize: 16
    },
    separator: {
        flexDirection: 'column',
        width: 2,
        marginHorizontal: 7,
        backgroundColor: '#00000030'
    }
})