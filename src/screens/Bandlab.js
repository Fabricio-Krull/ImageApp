import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
let i = 0;

const windowWidth = Dimensions.get('window').width;

export default function BandScreen({ navigation }) {
    const [imageData, setImageData] = useState("edt");
    // alert(imageData);

    const data = [
        "O álbum 'Through Wind And Rain' é um conjunto de faixas instrumentais compostas por Fabrício De Araujo Krull, um humilde estudante de Desenvolvimento de Sistemas.",
        "O álbum foi inicialmente concepcionado nos últimos meses de 2024, e sua produção foi iniciada em fevereiro 2025. Com isso, cada faixa foi sendo trabalhada individualmente em diversos momentos.",
        "Faixas como 'Why? You?' demoraram todo o tempo de produção do álbum para serem totalmente produzidas. Outras, como 'Berlim (Interlude)' e 'Worth' foram conceituadas em nada mais que 24 horas.",
        "O estilo do álbum foi baseado em bandas como Tears For Fears, nos seus anos iniciais.",
        "O primeiro single, 'Why? You?' foi lançado em 5 de agosto de 2024 contendo também uma prévia de 'Last Bus Home' da até então nem sequer anunciada, versão estendida do álbum.",
        "O nome escolhido, 'Mr. Krull' foi quase totalmente contra a criatividade de Fabrício, mas na urgência de um nome artístico, qualquer coisa serviu, e o nome veio a calhar.",
        "A primeira faixa a ser produzida foi 'Berlim (Interlude)', e a última foi 'Written Madness'. Antes porém, uma faixa substituía 'Worth', mas foi deixada de lado para a versão estendida.",
        "A primeira e quarta faixa do álbum são na verdade, originalmente fora dos planos. Outras duas faixas foram removidas, sendo a quarta movida para a versão estendida, e a primeira para o segundo álbum.",
        "Além das faixas, Fabrício sente também, muito orgulho da capa do álbum. Essa fotografia foi tirada no dia 25 de novembro de 2024, após uma visita e apresentação em uma empresa.",
        "A foto foi tirada levemente inclinada, para dar um efeito de blur nos arredores mas focar no centro. O gradiente avermelhado com azul também é característica da foto original. (Clique habilitado para visualizar a original)"
    ];

    const moveData = () => {
        if(i == data.length - 1){
            i = 0;
        }
        else{
            i++;
        }
        setDataQuery(data[i]);
    }

    const [dataQuery, setDataQuery] = useState(data[0]);

  return (
    <View style={styles.container}>
        <Text
            style={{
                width: 330,
                fontSize: 20
            }}
        >
            Está por fora das novidades? Conheça "Through Wind And Rain", álbum de estúdio brasileiro que estreia em poucas semanas
        </Text>

        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
                if(i == 9){
                    if(imageData == "edt"){
                        setImageData("org");
                    }
                    else{
                        setImageData("edt");
                    }
                }
            }}
        >
            {imageData === "edt" && <Image
                source={require("../images/ThroughWindAndRain.jpeg")}
                style={{
                    height: 330,
                    width: 330,
                    borderRadius: 10
                }}

            >
            </Image>}

            {imageData === "org" && <Image
                source={require("../images/ThroughWindAndRainOriginal.jpeg")}
                style={{
                    height: 330,
                    width: 330,
                    borderRadius: 10
                }}

            >
            </Image>}
        </TouchableOpacity>
        
        <TouchableOpacity
            onPress={() => {
                alert("Serviço automático inativo no momento. Siga o link manualmente para acessar o conteúdo");
            }}
        >
            <Text
                style={{
                    width: 330,
                    fontSize: 20
                }}
            >
                https://www.bandlab.com/mrkrull
            </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
            onPress={() => {
                moveData();
            }}
        >
            <Text
                style={{
                    width: 350,
                    fontSize: 20,
                    marginTop: 20
                }}
            >
                {dataQuery}
            </Text>
        </TouchableOpacity>

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