//importando elementos
import { ImageBackground, Pressable, View, Platform } from 'react-native';
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import estilo from './css/Estilo';

//exportando função default
export default function App() {
  return (
    <ImageBackground
      source={require('./img/bg.jpg')}
      style={estilo.bg}>
      <Card style={estilo.card}>
        <Card.Title style={estilo.titlecard} title="Atualizações do ConnectSocial"/>
        <Card.Content>
          <Text variant="bodyMedium">
            <Text style={estilo.textcard}>Olá, ConnectSocialers! Estamos empolgados em compartilhar que o ConnectSocial terá diversas atualizações nos próximos meses! Prepare-se para novas funções incríveis no futuro, como personalização avançada, integração com eventos ao vivo e recursos interativos exclusivos. Fique ligado para mais novidades!</Text>
          </Text>
        </Card.Content>
      </Card>
    </ImageBackground>
  );
}