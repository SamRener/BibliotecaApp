import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ListBook from './ListBook';
import MainTab from './MainTab';

export default class Home extends Component {
    render() {
      return (
        <View style={{flex: .95}}>
          <MainTab/>
          <ListBook title="Os livros mais procurados" />
          <ListBook title="Leia sobre Direito" />
        </View>
      )
    }
  }