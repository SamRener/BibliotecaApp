import React, { Component } from 'react';
import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './src/components/Main';
import BookDetail from './src/components/BookDetail';


const MainNav = createStackNavigator(
{
    Main: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    },
    BookDetail: {
      screen: BookDetail,
      navigationOptions: {
          header: null
      }
  }
}
)

export default createAppContainer(MainNav);