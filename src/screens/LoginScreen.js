import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableHighlight, TextInput, Image } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {


  return (
    <View style={styles.container}>
        <Text
            style={{
                fontSize: 35,
                alignSelf: "flex-start",
                margin: 10,
                marginTop: 0,
                marginLeft: 30
            }}
        >Acesse</Text>

        <Text
            style={{
                fontSize: 15,
                alignSelf: "flex-start",
                margin: 5,
                marginLeft: 30
            }}
        >Nome</Text>

        <TextInput
            placeholder="Insira o seu nome de usuário"
            inputMode="text"
            style={{
                width: 300,
                height: 50,
                margin: 10,
                borderRadius: 8,
                color: "#333355",
                backgroundColor: "#daeaf5ff"
            }}
        ></TextInput>

        <Text
            style={{
                fontSize: 15,
                alignSelf: "flex-start",
                margin: 5,
                marginLeft: 30
            }}
        >Senha</Text>

        <TextInput
            style={{
                width: 300,
                height: 50,
                margin: 10,
                borderRadius: 8,
                color: "#B9D9EB",
                backgroundColor: "#daeaf5ff"
            }}
            placeholder="Insira a sua senha"
            textContentType="password"
        ></TextInput>
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                gap: 10
            }}
        >

        <TouchableHighlight
        underlayColor={"#3CB371"}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#43d38d",
                borderRadius: 8,
                width: 150,
                height: 60

            }}
            ><Text>Opção 1</Text>
        </TouchableHighlight>
        
        <TouchableHighlight
        underlayColor={"#3CB371"}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ffffff",
                borderRadius: 8,
                width: 150,
                height: 60

            }}
        ><Text>Opção 2</Text>
        </TouchableHighlight>
        </View>

        <Text
            style={{
                marginTop: 40,
                marginBottom: 40,
            }}
        >------------- Divider -------------</Text>

        <View
            style={{
                display: "flex",
                flexDirection: "row",
                gap: 45
            }}
        >
            <Image 
                style={{
                    height: 45,
                    width: 45,
                }}
                source={require('../images/Google.png')}>
            </Image>

            <Image 
                style={{
                    height: 45,
                    width: 45,
                }}
                source={require('../images/Facebook.png')}>
            </Image>
        </View>

    </View>
  );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
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