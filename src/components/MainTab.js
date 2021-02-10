import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

export default class MainTab extends Component {
    generateStyle = (tab) => {
        return StyleSheet.create({
            mainTab: {
                flex: .07,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30,
            },
            tabButton: {
                marginHorizontal: 25,
                flex: 1,
                flexDirection: 'column',
            },
            listTabs: {
            marginLeft: 10
            },
            tabText: {
                fontSize: 18,
                color: tab? '#000': '#00000061'
            },
            tabUnderline: {
                backgroundColor: tab? '#000': '#FFFFFFFF',
                height: 3,
                marginTop: 10,
                borderTopStartRadius: 100,
                borderTopEndRadius: 100,
                
            }
            })
    }
    render() {
        var styles = this.generateStyle();
        return (
            <View style={styles.mainTab}>
                <FlatList
                    style={styles.listTabs}
                    data={[{ tab: "Todos" }, { tab: "Populares" }, { tab: "Gênero" }, { tab: "Autores" }]}
                    horizontal={true}
                    renderItem={({ item }) =>{
                        styles = this.generateStyle(this.props.tab == item.tab);
                        return (
                        <TouchableOpacity style={styles.tabButton}>
                            <Text style={styles.tabText}>{item.tab}</Text>
                            <View style={styles.tabUnderline}/>
                            </TouchableOpacity>
                            )
                    }
                    }
                >
                </FlatList>
            </View>
        )
    }

}

