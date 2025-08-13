import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {


  return (
    <View style={styles.container}>
      
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
    },

    buttonContainer: {
        margin: 10, 
        width: windowWidth * 0.5,
        borderRadius: 5,
        borderRadius: '15px',
    },

    button: {
        borderRadius: 5,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#0096FF',
    }
});