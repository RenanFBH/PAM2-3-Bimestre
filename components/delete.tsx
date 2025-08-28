//importando elementos
import { ImageBackground, View } from 'react-native';
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import estilo from './css/Estilo';

//exportando função default
export default function Delete() {
  return (
    <ImageBackground
    source={require('./img/bg.jpg')}
    style={estilo.bgS}>
      <Button style={estilo.profile}>
        <Card style={{}}>
          <Card.Content style={estilo.profileContent}>
            <Avatar.Image
              size={60}
              source={require('./img/bg.jpg')} 
              style={estilo.avatar}
            />
              <View style={estilo.profileTextContainer}>
                <Text style={estilo.chatName}>João Silva</Text>
                <Text style={estilo.textchat}>Olá, como você está hoje?</Text> 
              </View>
            </Card.Content>
          </Card>
      </Button>
      <Button style={estilo.btn}>Sair</Button>
    </ImageBackground>
  );
}