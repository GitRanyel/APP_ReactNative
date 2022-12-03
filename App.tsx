import React from "react";
import { Image, StyleSheet, Text, View, Linking } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/fotoperfil.png')} style={styles.profile} />
      <Text style={styles.name}>
      Caio Ranyel
      </Text>
      <Text style={styles.text}>
      Meu nome é Caio, tenho 22 anos e moro na cidade de Recife - PE. Estou cursando Análise e Desenvolvimento de Sistemas na Faculdade SENAC e sou bolsista no programa Embarque Digital, projeto da Prefeitura do Recife juntamente com o polo tecnológico Porto Digital no qual oferece vagas em faculdades e universidades a estudantes interessados em ingressar no setor de tecnologia. Me encontro no 3º período, onde nos períodos anteriores desenvolvi projetos com foco adquirir experiência no setor utilizando metodologias como SCRUM e Design Thinking, além de obter conhecimento básico de tecnologias de Front-end como CSS, HTML e JavaScript. 
      </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B0082',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profile: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: '#FFFFFF'
  },
  name: {
    color: "#FFE4C4",
    fontWeight: 'bold',
    fontSize: 26,
    padding: 20
  },
  text: {
    fontSize: 17,
    color: '#FFFFFF',
    maxWidth: 400,
    textAlign: 'justify',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10
  },
  images: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: 250,
    justifyContent: 'space-around',
    marginTop: 20
  },
});