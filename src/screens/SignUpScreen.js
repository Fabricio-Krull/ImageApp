import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, Image } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function SignUp({ navigation }) {

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
        >Cadastre-se</Text>

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
                margin: 5,
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
                margin: 5,
                borderRadius: 8,
                color: "#B9D9EB",
                backgroundColor: "#daeaf5ff"
            }}
            placeholder="Insira a sua senha"
            textContentType="password"
        ></TextInput>

        <Text
            style={{
                fontSize: 15,
                alignSelf: "flex-start",
                margin: 5,
                marginLeft: 30
            }}
        >Confirmar senha</Text>

        <TextInput
            style={{
                width: 300,
                height: 50,
                margin: 5,
                borderRadius: 8,
                color: "#B9D9EB",
                backgroundColor: "#daeaf5ff"
            }}
            placeholder="Confirme sua senha"
            textContentType="password"
        ></TextInput>

        <TouchableOpacity
        underlayColor={"#f0f8ff"}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f0f8ff",
                borderRadius: 8,
                margin: 5,
                width: 300,
                height: 60

            }}
            onPress={() => {
                navigation.navigate("Login");
            }}
            ><Text>Já tem uma conta?</Text>
        </TouchableOpacity>

        <View
            style={{
                display: "flex",
                flexDirection: "row",
                gap: 10
            }}
        >

        <TouchableOpacity
        underlayColor={"#3CB371"}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#43d38dff",
                borderRadius: 8,
                marginTop: 20,
                width: 300,
                height: 60

            }}

            ><Text>Opção 1</Text>
        </TouchableOpacity>
        
        </View>

        <Text
            style={{
                marginTop: 20,
                marginBottom: 20,
            }}
        >------------- Divider -------------</Text>

        <View
            style={{
                display: "flex",
                flexDirection: "row",
                gap: 45
            }}
        >
            <TouchableOpacity
                onPress={() => {
                    alert("Função fora de serviço no momento.");
                }}
            >
                <Image 
                    style={{
                        height: 45,
                        width: 45,
                    }}
                    source={require('../images/Google.png')}>
                    
                </Image>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    alert("Função fora de serviço no momento.");
                }}
            >
                <Image 
                    style={{
                        height: 45,
                        width: 45,
                    }}
                    source={require('../images/Facebook.png')}>
                </Image>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Band");
                }}
            >
                <Image 
                    style={{
                        height: 45,
                        width: 45,
                        borderRadius: 50,
                    }}
                    source={require('../images/Bandlab.png')}>
                </Image>
            </TouchableOpacity>
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