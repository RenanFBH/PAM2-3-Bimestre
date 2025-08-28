// importando elementos
import { ImageBackground, ScrollView, View, Pressable, Modal, Alert } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import { Avatar, Card, Text, Button } from 'react-native-paper';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Conexao, selectFunc, deleteFunc } from '../conf/Banco';
import estilo from './css/Estilo';

interface Funcionario {
  id: number;
  nome: string;
  email: string;
  depto: string;
  cargo: string;
}

// exportando função default
export default function Geral() {

  // constantes
  const navigation = useNavigation();
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const [selectedFuncionario, setSelectedFuncionario] = useState<Funcionario | null>(null);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const funcionariosPagina = funcionarios.slice(startIndex, endIndex);
  const totalPages = Math.ceil(funcionarios.length / pageSize);
  const [pressedPrev, setPressedPrev] = useState(false);
  const [pressedNext, setPressedNext] = useState(false);

  async function fetchFuncionarios() {
    const db = await Conexao();
    const result = await selectFunc(db);
    const lista = result || [];
    setFuncionarios(lista);
    // Ajusta a página atual se for maior que o total de páginas
    const newTotalPages = Math.ceil(lista.length / pageSize);
    if (page > newTotalPages && newTotalPages > 0) {
      setPage(newTotalPages);
    } else if (newTotalPages === 0) {
      setPage(1);
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      fetchFuncionarios();
    }, [])
  );

  // Função de editar
  const editar = () => {
    if (selectedFuncionario) {
      navigation.navigate('Edit', { funcionario: selectedFuncionario });
      setSelectedFuncionario(null);
    }
  };

  // Função de excluir
  const deletar = async () => {
    const db = await Conexao();
    if (!selectedFuncionario) return;
    console.log('Deletando funcionário:', selectedFuncionario.id);
    await deleteFunc(db, selectedFuncionario.id);
    setSelectedFuncionario(null);
    // Atualiza lista
    const result = await selectFunc(db);
    setFuncionarios(result || []);
    // Recalcula total de páginas
    const newTotalPages = Math.ceil((result?.length || 0) / pageSize);
    if (page > newTotalPages && newTotalPages > 0) {
      setPage(newTotalPages);
    } else if (newTotalPages === 0) {
      setPage(1);
    }
  };

  return (
    <ImageBackground
      source={require('./img/bg.jpg')}
      style={estilo.bg}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {funcionariosPagina.length > 0 ? (
          funcionariosPagina.map((func) => (
            <Pressable 
              key={func.id} 
              onPress={() => setSelectedFuncionario(func)} 
              style={estilo.btnGeral}>
              <Card>
                <Card.Content style={estilo.cardGeral}>
                  <Avatar.Image
                    size={80}
                    source={require('./img/employer-default.png')} 
                    style={estilo.avatar}
                  />
                  <View style={estilo.indexTextContainer}>
                    <Text style={estilo.geralName}>ID: {func.id}</Text>
                    <Text style={estilo.geralName}>{func.nome}</Text>
                    <Text style={estilo.geralText}>Email: {func.email}</Text> 
                    <Text style={estilo.geralText}>Departamento: {func.depto}</Text> 
                    <Text style={estilo.geralText}>Cargo: {func.cargo}</Text> 
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          ))
        ) : (
          <Card style={{ padding: 20, marginTop: 20, marginStart: 10, marginEnd: 10 }}>
            <Card.Content>
              <Text style={{ fontSize: 18, textAlign: 'center' }}>Nenhum funcionário encontrado</Text>
            </Card.Content>
          </Card>
        )}
        {funcionarios.length > pageSize && (
          <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 20 }}>
            <Button
              mode="contained"
              labelStyle={{ fontSize: 18 }}
              disabled={page === 1}
              onPress={() => setPage(page - 1)}
              onPressIn={() => setPressedPrev(true)}
              onPressOut={() => setPressedPrev(false)}
              style={{
                marginHorizontal: 5,
                borderRadius: 5,
                backgroundColor: page === 1
                  ? "rgba(0,0,0,0.5)"  
                  : pressedPrev
                  ? "#e60000"       
                  : "#000",             
              }}
              theme={{ colors: { onSurface: "#fff" } }}
            >
              Anterior
            </Button>
            <Text style={{ alignSelf: "center", marginHorizontal: 10, color: "#fff", fontSize: 15 }}>
              Página {page} de {totalPages}
            </Text>
            <Button
              mode="contained"
              labelStyle={{ fontSize: 18 }}
              disabled={page === totalPages}
              onPress={() => setPage(page + 1)}
              onPressIn={() => setPressedNext(true)}
              onPressOut={() => setPressedNext(false)}
              style={{
                marginHorizontal: 5,
                borderRadius: 5,
                backgroundColor: page === totalPages
                  ? "rgba(0,0,0,0.5)"   
                  : pressedNext
                  ? "#e60000"          
                  : "#000",             
              }}
              theme={{ colors: { onSurface: "#fff" } }}
            >
              Próxima
            </Button>
          </View>
        )}
        <Modal
          visible={selectedFuncionario !== null}
          transparent
          animationType="slide"
          onRequestClose={() => setSelectedFuncionario(null)}
        >
          <Pressable
            style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => setSelectedFuncionario(null)} 
          >
            <Pressable
              style={{ width: 300, backgroundColor: '#fff', borderRadius: 10, padding: 20 }}
              onPress={() => {}} 
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                {selectedFuncionario?.nome}
              </Text>
              <Text>Email: {selectedFuncionario?.email}</Text>
              <Text>Departamento: {selectedFuncionario?.depto}</Text>
              <Text>Cargo: {selectedFuncionario?.cargo}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <Button
                  mode="contained"
                  labelStyle={{ fontSize: 18 }}
                  onPress={editar}
                  style={{
                    marginHorizontal: 5,
                    borderRadius: 5,
                    backgroundColor: '#000'          
                  }}
                  theme={{ colors: { onSurface: "#fff" } }}
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
                    backgroundColor: '#000'
                  }}
                  theme={{ colors: { onSurface: "#fff" } }}
                >
                  Excluir
                </Button>
              </View>
            </Pressable>
          </Pressable>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
}