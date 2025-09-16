// importando elementos
import { ImageBackground, Keyboard, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { TextInput, Card, Avatar, Button } from 'react-native-paper';
import { Conexao, updateFunc } from '../conf/Banco';
import estilo from './css/Estilo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Edit() {

  // constantes
  const navigation = useNavigation();
  const route = useRoute();
  const funcionario = (route.params as any)?.funcionario;
  const [id, setId] = useState(funcionario?.id || "");
  const [nome, setNome] = useState(funcionario?.nome || "");
  const [email, setEmail] = useState(funcionario?.email || "");
  const [depto, setDepto] = useState(funcionario?.depto || "");
  const [cargo, setCargo] = useState(funcionario?.cargo || "");
  const [pressed, setPressed] = useState(false);
    const [pressed2, setPressed2] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  // função de validar email
  function validarEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // função de editar
  async function editar() {
    if (!nome.trim() || !cargo.trim() || !depto.trim() || !email.trim()) {
      Alert.alert("Campos obrigatórios", "Por favor preencha Nome, Email, Cargo e Departamento.");
      return;
    }
    if (!validarEmail(email)) {
      Alert.alert("Email inválido", "Por favor insira um endereço de email válido.");
      return;
    }
    try {
      const db = await Conexao();
      await updateFunc(db, id, nome, email, depto, cargo);
      Alert.alert(
        "Sucesso",
        "Funcionário atualizado com sucesso!",
        [{ text: "OK", onPress: () => navigation.goBack() }] 
      );
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar o funcionário. Tente novamente.");
      console.log("Erro ao atualizar funcionário: ", error);
    }
  }

  // detecta abertura/fechamento do teclado
  useEffect(() => {
    const show = Keyboard.addListener("keyboardDidShow", () => setKeyboardVisible(true));
    const hide = Keyboard.addListener("keyboardDidHide", () => setKeyboardVisible(false));
    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  return (
    <ImageBackground
      source={require('./img/bg.jpg')}
      style={[estilo.bg, { flex: 1 }]}
    >
      <KeyboardAwareScrollView
        enableOnAndroid
        enableAutomaticScroll
        extraScrollHeight={20}
        keyboardOpeningTime={0}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          keyboardVisible
            ? { padding: 20, paddingBottom: 40 }
            : { flexGrow: 1, justifyContent: "center", padding: 20 }
        }
      >
        <Card style={estilo.cardAdd}>
          <Card.Content>
            <Avatar.Image
              size={150}
              source={require('./img/employer-default.png')}
              style={{ alignSelf: 'center', marginBottom: 20, backgroundColor: '#fff' }}
            />
            <TextInput
              style={estilo.input}
              label="Nome"
              value={nome}
              onChangeText={setNome}
              mode="flat"
              theme={{ colors: { primary: '#e60000', text: '#fff', placeholder: '#e60000' } }}
            />
            <TextInput
              style={estilo.input}
              label="Email"
              value={email}
              onChangeText={setEmail}
              mode="flat"
              theme={{ colors: { primary: '#e60000', text: '#fff', placeholder: '#e60000' } }}
            />
            <TextInput
              style={estilo.input}
              label="Departamento"
              value={depto}
              onChangeText={setDepto}
              mode="flat"
              theme={{ colors: { primary: '#e60000', text: '#fff', placeholder: '#e60000' } }}
            />
            <TextInput
              style={estilo.input}
              label="Cargo"
              value={cargo}
              onChangeText={setCargo}
              mode="flat"
              theme={{ colors: { primary: '#e60000', placeholder: '#e60000' } }}
            />
            <Button
              style={[
                estilo.btn,
                { backgroundColor: pressed ? '#e60000' : estilo.btn.backgroundColor, marginBottom: 10 }
              ]}
              mode="elevated"
              textColor="#fff"
              labelStyle={{ fontSize: 18 }}
              onPress={editar}
              onPressIn={() => setPressed(true)}
              onPressOut={() => setPressed(false)}
            >
              Editar
            </Button>
            <Button
              style={[
                estilo.btn,
                { backgroundColor: pressed2 ? '#e60000' : estilo.btn.backgroundColor }
              ]}
              mode="elevated"
              textColor="#fff"
              labelStyle={{ fontSize: 18 }}
              onPress={() => navigation.goBack()}
              onPressIn={() => setPressed2(true)}
              onPressOut={() => setPressed2(false)}
            >
              Voltar
            </Button>
          </Card.Content>
        </Card>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}