import React, { Component } from 'react';
import { View, StyleSheet, Button, FlatList, Text, TouchableOpacity, Image } from 'react-native';

export default class ListBook extends Component {
  state = {
    books: [
      {
        objectId: "1",
        Title: "A Sociedade do Anel",
        Image: require("../assets/img/temp/TLOR.jpg")
      },
      {
        objectId: "2",
        Title: "A Gaia Ciência",
        Image: require("../assets/img/temp/gaia.jpg")
      },
      {
        objectId: "3",
        Title: "A Favela Venceu",
        Image: require("../assets/img/temp/favela.jpg")
      },
      {
        objectId: "4",
        Title: "O Eu e o Id",
        Image: require("../assets/img/temp/freud.jpg")
      },
    ]
  }
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
        <FlatList
          data={this.state.books}
          horizontal={true}
          renderItem={
            ({ item }) => 
              <View style={styles.bookItem} key={item.objectId}>
                <TouchableOpacity style={styles.bookButton}>
                  <Image style={styles.bookImage} source={item.Image}></Image>
                  <Text style={styles.bookTitle}>{item.Title}</Text>
                </TouchableOpacity>
              </View>
          }
        >

        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listBook: {
    flex: .45,
    marginBottom: 15,
    marginHorizontal: 15,
    marginStart: 10
  },
  headerListbook: {
    flex: .1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 5
  },
  titleListbookContainer: {
    flex: 1
  },
  titleListbook: {
        fontFamily: 'QuicksandBold-Regular',
        fontSize: 19
  },
  moreButton: {

  },
  moreImage: {
    width: 20,
    height: 20
  },
  bookImage: {
    height: 176,
    width: 100,
    borderRadius: 30,
    resizeMode: "contain",
  },
  bookItem: {
    marginHorizontal: 7,
  },
  bookButton: {
    height: 176,
    width: 100
  },
  bookTitle: {
    textAlign: 'center'
  }

})
