import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import NavBar from './Navbar';
import Home from './Home';

export default class Main extends Component{
  render() {
    return ( 
      <View style={styles.mainContainer}>
        <NavBar navigation= {this.props.navigation}/>
        <Home navigation= {this.props.navigation}/>
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