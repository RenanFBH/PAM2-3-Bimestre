// importando elementos
import { ImageBackground, Image, Dimensions } from 'react-native';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Card, Text } from 'react-native-paper';
import { Conexao, createTable } from '../conf/Banco';
import estilo from './css/Estilo';

// constante
const { width } = Dimensions.get("window");

// exportando função default
export default function Index() {

  // conectando ao banco de dados
  useEffect(() => {
    async function initDB() {
      try {
        const db = await Conexao(); 
        await createTable(db); 
      } catch (error) {
        console.log("Erro ao inicializar o banco:", error);
      }
    }
    initDB();
  }, []); 

  return (
    <ImageBackground
      source={require('./img/bg.jpg')}
      style={estilo.bg}>
      <Card style={estilo.cardIndex}>
        <Image 
          source={require('../assets/favicon.png')} 
          style={{ width: 200, height: 200, alignSelf: 'center', marginBottom: 10 }} 
          resizeMode="contain"
        />
        <Text style={ estilo.indexTitle }>
          SGF
        </Text>
        <Text style={ estilo.indexText }>
          O Sistema Gerenciador de Funcionários (SGF) facilita o controle e a organização da hierarquia das empresas, além da consulta de funcionários para verificar os dados.
        </Text>
      </Card>
    </ImageBackground>
  );
}