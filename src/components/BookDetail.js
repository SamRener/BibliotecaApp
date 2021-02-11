import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BookInfo from './Book/BookInfo';
import Navbar from "./Book/Navbar";
export default class BookDetail extends Component{
  render() {
    return (
      <View style={styles.mainContainer}>
        <Navbar/>
        <View style={styles.infoContainer}>
        <BookInfo/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FAFAFA',
    flex: 1
  },
  infoContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    borderRadius: 30
  }
})