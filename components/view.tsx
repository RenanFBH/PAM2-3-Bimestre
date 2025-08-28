// importando elementos
import { ImageBackground, Pressable, View } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import { TextInput, Card, Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Conexao, selectFuncId, deleteFunc } from '../conf/Banco';
import estilo from './css/Estilo';

// exportando função default
export default function ViewFuncionario() {

  // constantes
  const navigation = useNavigation();
  const [id, setId] = useState('');
  const [pressed, setPressed] = useState(false);
  const [funcionario, setFuncionario] = useState<any>(null);

  // função de selecionar
  async function pesquisar() {
    const db = await Conexao();
    const funcionarioId = parseInt(id, 10);
    if (isNaN(funcionarioId)) {
      alert('Digite um ID válido');
      return;
    }
    const result = await selectFuncId(db, funcionarioId);
    if (result) {
      setFuncionario({
        id: result.id, 
        nome: result.nome, 
        email: result.email, 
        depto: result.depto, 
        cargo: result.cargo 
      });
    } else {
      alert('Funcionário não encontrado');
      setFuncionario(null);
    }
  }

  // função de excluir
  const deletar = async () => {
    const db = await Conexao();
    if (!funcionario) return;
    await deleteFunc(db, funcionario.id);
    setFuncionario(null);
    alert('Funcionário excluído com sucesso!');
  };

  return (
    <ImageBackground source={require('./img/bg.jpg')} style={estilo.bg}>
      <Card style={estilo.cardView}>
        <Card.Content>
          <Text style={estilo.viewTitle}>Pesquise o Funcionário</Text>
          <TextInput
            style={estilo.input}
            label="Digite o ID"
            value={id}
            onChangeText={setId}
            mode="flat"
            theme={{
              colors: {
                primary: '#e60000',
                text: '#fff',
                placeholder: '#e60000',
              },
            }}
          />
          <Button
            style={[
              estilo.btn,
              { backgroundColor: pressed ? '#e60000' : estilo.btn.backgroundColor },
            ]}
            mode="elevated"
            textColor="#fff"
            labelStyle={{ fontSize: 18 }}
            onPress={pesquisar}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
          >
            Pesquisar
          </Button>
        </Card.Content>
      </Card>

      {/* Modal do funcionário */}
      {funcionario && (
        <Pressable
          style={{
            flex: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setFuncionario(null)}
        >
          <Pressable
            style={{ width: 300, backgroundColor: '#fff', borderRadius: 10, padding: 20 }}
            onPress={() => {}}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
              {funcionario.nome}
            </Text>
            <Text>Email: {funcionario.email}</Text>
            <Text>Departamento: {funcionario.depto}</Text>
            <Text>Cargo: {funcionario.cargo}</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <Button
                mode="contained"
                labelStyle={{ fontSize: 18 }}
                onPress={() => {
                  // Navega para edit passando os dados do funcionário
                  navigation.navigate('Edit', { funcionario });
                  setFuncionario(null);
                }}
                style={{
                  marginHorizontal: 5,
                  borderRadius: 5,
                  backgroundColor: '#000',
                }}
                theme={{ colors: { onSurface: '#fff' } }}
              >
                Editar
              </Button>
              <Button
                mode="contained"
                labelStyle={{ fontSize: 18 }}
                onPress={deletar}
                style={{
                  marginHorizontal: 5,
                  borderRadius: 5,
                  backgroundColor: '#000',
                }}
                theme={{ colors: { onSurface: '#fff' } }}
              >
                Excluir
              </Button>
            </View>
          </Pressable>
        </Pressable>
      )}
    </ImageBackground>
  );
}