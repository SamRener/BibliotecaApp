import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

export default class MainTab extends Component {
    render() {
        return (
            <View style={styles.mainTab}>
                <FlatList
                    style={styles.listTabs}
                    data={[{ tab: "Todos" }, { tab: "Populares" }, { tab: "Gênero" }, { tab: "Autores" }]}
                    horizontal={true}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={this.props.tab? (styles.tabButton): (styles.selectedTabButton)}><Text style={styles.tabText}>{item.tab}</Text><View style={styles.tabUnderline}/></TouchableOpacity>
                    }
                >
                </FlatList>
            </View>
        )
    }

}

const styles = StyleSheet.create({
mainTab: {
    flex: .07,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30 
},
tabButton: {
    marginHorizontal: 25,
    flex: 1,
    flexDirection: 'column',
    color: '#696969'
},
selectedTabButton: {
    marginHorizontal: 25,
    flex: 1,
    flexDirection: 'column'
},
listTabs: {
marginLeft: 10
},
tabText: {
    fontSize: 18
},
tabUnderline: {
    backgroundColor: '#000',
    height: 3,
    marginTop: 10,
    borderTopStartRadius: 100,
    borderTopEndRadius: 100,
}
})