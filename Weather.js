import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {LinearGradient} from "expo";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain:{
        colors:["#00C6FB", "#005BEA"],
        title:"RAIN",
        subtitle:"RAIN",
        icon:"weather-rainy"
    },
    Clear:{
        colors:["#FEF253", "#FF7300"],
        title:"Clear",
        subtitle:"Clear",
        icon:"weather-sunny"
    },
    Thunderstorm:{
        colors:["#00ECBC", "#007ADF"],
        title:"Thunderstorm",
        subtitle:"Thunderstorm",
        icon:"weather-lightning"
    },
    Clouds:{
        colors:["#D7D2CC", "#304352"],
        title:"Clouds",
        subtitle:"Clouds",
        icon:"weather-cloudy"
    },
    Snow:{
        colors:["#7DE2FC", "#B9B6E5"],
        title:"Snow",
        subtitle:"Snow",
        icon:"weather-snowy"
    },
    Drizzle:{
        colors:["#89F7FE", "#66A6FF"],
        title:"Drizzle",
        subtitle:"Drizzle",
        icon:"weather-hail"
    },
    Haze:{
        colors:["#89F7FE", "#66A6FF"],
        title:"Haze",
        subtitle:"Haze",
        icon:"weather-hail"
    },
    Mist:{
        colors:["#89F7FE", "#66A6FF"],
        title:"Mist",
        subtitle:"Mist",
        icon:"weather-fog"
    }
}
function Weather({temp, weatherName,country,pos}) {
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color ="white" size={144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{country} {pos}</Text>
            </View>
        </LinearGradient>
    );
}
export default Weather;
Weather.propTypes={
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};

    const styles = StyleSheet.create({
        container:{
            flex:1,
        },
        upper:{
            flex:1,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"transparent"
        },
        temp:{
            fontSize:48,
            backgroundColor:"transparent",
            color:"white",
            marginTop:10
        },
        lower:{
            flex:1,
            alignItems:"flex-start",
            justifyContent:"flex-end",
            paddingLeft:25
        },
        title:{
            fontSize:38,
            backgroundColor: "transparent",
            color:"white",
            marginBottom:10,
            fontWeight:"300"
        },
        subtitle:{
            fontSize:24,
            backgroundColor: "transparent",
            color:"white",
            marginBottom:24
        }

    });
