import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ListBook from './ListBook';
export default class Home extends Component {
    render() {
      return (
        <ListBook title="Os livros mais procurados" />
      )
    }
  }