import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Navbar from "./Book/Navbar";
export default class BookDetail extends Component{
  render() {
    return (
      <View style={styles.mainContainer}>
        <Navbar/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FAFAFA',
    flex: 1
  }
})