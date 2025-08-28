// importando elementos
import * as React from 'react';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilo from './components/css/Estilo';

// exportando função default
export default function Splash() {
  const navigation = useNavigation();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main'); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('./assets/splash.png')}
      style={estilo.bg}>
    </ImageBackground>
  );
}