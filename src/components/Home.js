import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ListBook from './ListBook';
import ListAuthor from './ListAuthor';
import MainTab from './MainTab';

export default class Home extends Component {
    render() {
      return (
        <View style={{flex: 1}}>
          <ScrollView>
          <MainTab tab='Todos'/>
          <ListBook title="Os livros mais procurados"/>
          <ListAuthor />
          <ListBook title="Leia sobre Direito" />
          </ScrollView>
        </View>
      )
    }
  }