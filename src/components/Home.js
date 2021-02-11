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
          <MainTab tab='Todos' navigation= {this.props.navigation}/>
          <ListBook title="Os livros mais procurados" navigation= {this.props.navigation}/>
          <ListAuthor navigation= {this.props.navigation}/>
          <ListBook title="Leia sobre Direito" navigation= {this.props.navigation}/>
          </ScrollView>
        </View>
      )
    }
  }