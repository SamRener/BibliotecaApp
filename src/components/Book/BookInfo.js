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
            PublishDate: '2000',
            Rating: 5,
            Storage: 4,
            Pages: 450
        },
        messageAvailability: 'Indisponível',
        imageQueue: require('../../assets/img/queue.png')
    }

    EnterOnQueue = () => {
        this.setState({
            messageAvailability: '1º na Fila',
            imageQueue: require('../../assets/img/savedQueue.png')
    })
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
                <View style={styles.statsContainer}>
                    <View style={styles.singleStatContainer}>
                        <View style={styles.ratingContainer}>
                            <Text style={styles.statValue}>{this.state.book.Rating}</Text>
                            <Image style={styles.ratingImage} source={require('../../assets/img/rating.png')}/>
                        </View>
                        <Text style={styles.textStat}>Avaliação</Text>
                    </View>
                    <View style={styles.statsSeparator}></View>

                    <View style={styles.singleStatContainer}>
                        <Text style={styles.statValue}>{this.state.book.Storage}</Text>
                        <Text style={styles.textStat}>Cópias</Text>
                    </View>
                    <View style={styles.statsSeparator}></View>

                    <View style={styles.singleStatContainer}>
                        <Text style={styles.statValue}>{this.state.book.Pages}</Text>
                        <Text style={styles.textStat}>Páginas</Text>
                    </View>
                </View>
                <View style={styles.ReserveContainer}>
                    <TouchableOpacity onPress={this.EnterOnQueue} style={styles.buttonTextQueue}>
                        <Text style={styles.textQueue}>{this.state.messageAvailability}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.EnterOnQueue} style={styles.buttonImageQueue}>
                        <Image  style={styles.imageQueue} source={this.state.imageQueue}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        
    },
    infoContainer: {
        flex: .28,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 90
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
    },

    statsContainer: {
        flex: .1,
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
    },
    singleStatContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    statValue: {
        fontSize: 30,
        fontFamily: 'QuicksandBold-Regular',
        fontWeight: 'bold'
    },
    ratingImage: {
        width: 15,
        height: 15,
        marginHorizontal: 5
    },
    textStat: {
       color: '#00000030',
       fontFamily: 'QuicksandBold-Regular'
    },
    statsSeparator: {
        width: 1,
        marginHorizontal: 7,
        backgroundColor: '#000',
        borderRadius: 100
    },

    ReserveContainer: {
        flex: .1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonTextQueue: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        backgroundColor: '#000',
        borderRadius: 100
    },
    textQueue: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'QuicksandBold-Regular'
    },
    buttonImageQueue: {
        padding: 15,
        backgroundColor: '#000',
        borderRadius: 100,
        marginStart: 10,
        marginEnd: 40,
    },
    imageQueue: {
        height: 20,
        width: 20
    }
})