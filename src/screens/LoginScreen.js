import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, Image } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {

    const [checked, setChecked] = useState(""); 

    const changeCheck = () => {

        if(checked == ""){
            setChecked("️✔")
        }
        if(checked == "️✔"){
            setChecked("");
        }

    }

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
                    alignItems: "center",
                    gap: 10,
                    margin: 15
            }}
        >

        <TouchableOpacity
        ></TouchableOpacity>

        <TouchableOpacity
            style={{
                height: 30,
                width: 30,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                backgroundColor: "#f0f8ff",
                borderWidth: 2
            }}

            onPress={() => {
                changeCheck();
            }}

        >
            <Text
                style = {{
                    fontSize: 25,
                    height: 44,
                    width: 24
                }}
            >
                {checked}
            </Text>
        </TouchableOpacity>


        <TouchableOpacity
        underlayColor={"#3CB371"}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f0f8ff",
                borderRadius: 8,
                marginLeft: 0,
                width: 150,
                height: 60

            }}
            ><Text>Lembrar senha</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        underlayColor={"#3CB371"}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f0f8ff",
                borderRadius: 8,
                width: 150,
                height: 60

            }}
        ><Text>Esqueci minha senha</Text>
        </TouchableOpacity>
        </View>

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
                backgroundColor: "#43d38d",
                borderRadius: 8,
                width: 150,
                height: 60

            }}
            ><Text>Opção 1</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
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
        </TouchableOpacity>
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