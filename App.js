import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import NavBar from './src/components/Navbar';
import Home from './src/components/Home';

export default class App extends Component{
  render() {
    return (
      <View style={styles.mainContainer}>
        <NavBar/>
        <Home/>
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