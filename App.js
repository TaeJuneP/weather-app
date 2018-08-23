import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ActivityIndicator ,StatusBar} from 'react-native';
import Weather from "./Weather.js";

const API_KEY="1823f438c97c7e1ff813931bdadb9c4f";
export default class App extends Component {
    state = {
        isLoaded: false,
        error:null,
        temperature:null,
        name:null,
        pos:null,
        country:null
    };

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(position =>{
            this.__getWeather(position.coords.latitude,position.coords.longitude)
            },

            error => {
            this.setState({
                error:error
            });
            }
        );
    }
    __getWeather = (lat,lon) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
            .then(response => response.json())
            .then(json=>{
                this.setState({
                    temperature:json.main.temp,
                    name:json.weather[0].main,
                    pos:json.name,
                    country:json.sys.country,
                    isLoaded:true
                })
            });
    };

    render() {
        const {isLoaded, error,temperature,name,pos,country} = this.state;
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                {isLoaded ?  (<Weather temp={Math.floor(temperature - 273.15)} weatherName={name} pos={pos} country={country}/>):(
                    <View style={styles.loading}>
                        <Text style={styles.loadingText}>Getting the weather</Text>
                        {error ? <Text style={styles.errorText}>{error}</Text>: null}
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
    },
    errorText:{
        fontSize:25,
        marginBottom:30,
        paddingLeft:15
    }
});
