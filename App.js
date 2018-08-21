import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';

export default class App extends Component {
    state = {
        isLoaded: false
    };

    render() {
        const {isLoaded} = this.state;
        return (
            <View style={styles.container}>
                {isLoaded ? null : (
                    <View style={styles.loading}>
                        <Text style={styles.loadingText}>Getting the weather</Text>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    loading: {
        flex: 1,
        backgroundColor: "#FDF6AA",
        justifyContent:"flex-end",


    },
    loadingText:{
        fontSize:40,
        marginBottom:100,
        paddingLeft:15
    }
});
