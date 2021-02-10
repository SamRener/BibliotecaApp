import React, { Component } from 'react';
import { View, StyleSheet, Button, FlatList, Text, TouchableOpacity, Image } from 'react-native';

export default class ListAuthor extends Component {
  state = {
    authors: [
      {
        objectId: "1",
        Name: "Nietzsche",
        Image: require("../assets/img/temp/Nietzsche.png")
      },
      {
        objectId: "2",
        Name: "Carlos Drum...",
        Image: require("../assets/img/temp/carlos.png")
      },
      {
        objectId: "3",
        Name: "Dostoiévski",
        Image: require("../assets/img/temp/dosto.png")
      },
      {
        objectId: "4",
        Name: "Stephen King",
        Image: require("../assets/img/temp/stephen.png")
      },
    ]
  }
  render() {
    return (
      <View style={styles.listAuthor}>
        <View style={styles.headerListauthor}>
          <View style={styles.titleListauthorContainer}>
              <Text style={styles.titleListauthor}>Os autores mais procurados</Text></View>
          <TouchableOpacity style={styles.moreButton}>
            <Image style={styles.moreImage}
              source={require('../assets/img/more.png')}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.authors}
          horizontal={true}
          renderItem={
            ({ item }) => 
              <View style={styles.authorItem} key={item.objectId}>
                <TouchableOpacity style={styles.authorButton}>
                  <Image style={styles.authorImage} source={item.Image}></Image>
                  <Text style={styles.authorTitle}>{item.Name}</Text>
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
  listAuthor: {
    flex: .55,
    marginBottom: 15,
    marginHorizontal: 15,
    marginStart: 10
  },
  headerListauthor: {
    flex: .1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 5
  },
  titleListauthorContainer: {
    flex: 1
  },
  titleListauthor: {
        fontFamily: 'QuicksandBold-Regular',
        fontSize: 19
  },
  moreButton: {

  },
  moreImage: {
    width: 20,
    height: 20
  },
  authorImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
    resizeMode: 'center',
  },
  authorItem: {
    marginHorizontal: 7,
  },
  authorButton: {
    height: 150,
    width: 100
  },
  authorTitle: {
    textAlign: 'center'
  }

})
