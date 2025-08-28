// importando elemento
import { StyleSheet, Dimensions } from "react-native";

// Constantes das dimensões da tela
const { width, height } = Dimensions.get("window");

// Função default
export default estilo = new StyleSheet.create({
  //principais estilos
  bg: {
    flex: 1, 
    justifyContent: 'center'
  },
  header: {
    textAlign: 'center',
    justifyContent: 'center'
  },
  footer: {
    height: height * 0.15, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  //estilos de cards
  cardIndex: {
    marginStart: width * 0.05,
    marginEnd: width * 0.05,
    backgroundColor: '#000',
    borderRadius: 15, 
    padding: 10, 
    elevation: 5, 
    shadowColor: '#fff', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  cardGeral: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  cardAdd: {
    marginStart: width * 0.05,
    marginEnd: width * 0.05,
    backgroundColor: '#fff',
    borderRadius: 15, 
    padding: 5, 
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 5,     
    borderColor: '#000'
  },
  cardView: {
    marginStart: width * 0.05,
    marginEnd: width * 0.05,
    borderRadius: 15, 
    padding: 5, 
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 5
  },
  //estilos de textos
  indexTitle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    marginBottom: height * 0.005
  },
  indexText: {
    color: '#fff',
    textAlign: 'justify',
    fontSize: 15
  },
  geralName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  geralText: {
    color: '#000'
  },
  viewTitle: {
    fontSize: 20,
    marginBottom: height * 0.01,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    marginBottom: height * 0.005,
    backgroundColor: '#fff',
    borderRadius: 5
  },
  //estilos de botões
  btn: {
    backgroundColor: '#000', 
    color: '#fff',
    borderRadius: 10, 
    padding: 10
  },
  btnGeral: {
    marginTop: height * 0.01,
    marginStart: width * 0.05,
    marginEnd: width * 0.05,
    backgroundColor: '#000', 
    borderRadius: 10, 
    padding: 5,
    elevation: 2, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  }, 
  //estilo de avatar
  avatar: {
    marginRight: 10,
    backgroundColor: '#fff'
  }
})