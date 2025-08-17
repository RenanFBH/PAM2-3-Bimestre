//importando elementos
import { ImageBackground, ScrollView, View, Pressable } from 'react-native';
import * as React from 'react';
import { Avatar, Card, Text } from 'react-native-paper';
import estilo from './css/Estilo';

//exportando função default
export default function Chat() {
  return (
    <ImageBackground
      source={require('./img/bg.jpg')}
      style={estilo.bg}>
      <ScrollView>
        <Pressable onPress={() => alert('Card pressionado!')} style={estilo.chat}>
          <Card>
            <Card.Content style={estilo.chatContent}>
              <Avatar.Image
                size={60}
                source={require('./img/bg.jpg')} 
                style={estilo.avatar}
              />
              <View style={estilo.chatTextContainer}>
                <Text style={estilo.chatName}>João Silva</Text>
                <Text style={estilo.textchat}>Olá, como você está hoje?</Text> 
              </View>
            </Card.Content>
          </Card>
        </Pressable>
      </ScrollView>
    </ImageBackground>
  );
}