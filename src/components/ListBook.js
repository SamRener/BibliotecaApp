import React, { Component } from 'react';
import { View, StyleSheet, Button, FlatList, Text, TouchableOpacity, Image } from 'react-native';

export default class ListBook extends Component {
    render() {
      return (
        <View style={styles.listBook}>
            <View style={styles.headerListbook}>
            <View style={styles.titleListbookContainer}><Text style={styles.titleListbook}>{this.props.title}</Text></View>
            <TouchableOpacity style={styles.moreButton}>
                    <Image style={styles.moreImage}
                    source={require('../assets/img/more.png')}
                    />
            </TouchableOpacity>
            </View>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    listBook: {
        flex: .25,
        margin: 15
    },
    headerListbook: {
        flex: .1,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    titleListbookContainer: {
        flex: 1
    },
    titleListbook: {
        fontSize: 19
    },
    moreButton: {

    },
    moreImage: {
        width: 20,
        height: 20
    }

  })
