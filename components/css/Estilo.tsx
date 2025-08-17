import { StyleSheet, Dimensions } from "react-native";

// Constantes das dimensões da tela
const { width, height } = Dimensions.get("window");

// Função default
export default estilo = new StyleSheet.create({
  bg: {
    flex: 1, 
    justifyContent: 'center'
  },
  bgS: {
    flex: 1, 
  },
  header: {
    textAlign: "center",
    justifyContent: "center",
  },
  title: {
    
  },
  footer: {
    height: height * 0.15, 
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    
  },
  card: {
    marginStart: width * 0.05,
    marginEnd: width * 0.05,
    backgroundColor: "#9999ff",
    borderRadius: 15, 
    padding: 10, 
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  titlecard: {
    textAlign: "center",
    color: "#fff", 
    fontSize: 20, 
    fontWeight: "bold"
  },
  textcard: {
    color: "#fff",
  },
  chat: {
    marginTop: height * 0.01,
    marginStart: width * 0.05,
    marginEnd: width * 0.05,
    backgroundColor: "#e6e6ff", 
    borderRadius: 10, 
    padding: 10,
    elevation: 2, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  chatContent: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  avatar: {
    marginRight: 10, 
  },
  chatTextContainer: {
    flex: 1, 
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000', 
  },
  textchat: {
    color: '#000000', 
  },
  profile: {
    marginTop: height * 0.01,
    marginStart: width * 0.05,
    marginEnd: width * 0.05,
    backgroundColor: "#e6e6ff", 
    borderRadius: 10, 
    padding: 10,
    elevation: 2, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  profileContent: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  chatTextContainer: {
    flex: 1, 
  },
  btn: {
    marginTop: height * 0.01,
    marginStart: width * 0.05,
    marginEnd: width * 0.05,
    backgroundColor: "#fff", 
    borderRadius: 10, 
    padding: 10,
  }, 
})