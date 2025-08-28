// importando elementos
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome6 } from '@expo/vector-icons';
import { Conexao } from '../conf/Banco';
import Splash from '../Splash';
import index from './index';
import geral from './geral';
import add from './add';
import view from './view';
import edit from './edit';

// constantes de navegação
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// funções de navegação
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#000' },
      }}
    >
      <Tab.Screen
        name="Sistema Gerenciador de Funcionários"
        component={index}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="house"
              size={24}
              color={focused ? '#e60000' : '#fff'}
            />
          ),
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="SGF  ->  Todos os funcionários"
        component={geral}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="users"
              size={24}
              color={focused ? '#e60000' : '#fff'}
            />
          ),
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="SGF  ->  Adicionar funcionários"
        component={add}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="user-plus"
              size={24}
              color={focused ? '#e60000' : '#fff'}
            />
          ),
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="SGF  ->  Pesquisar funcionários"
        component={view}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="magnifying-glass"
              size={24}
              color={focused ? '#e60000' : '#fff'}
            />
          ),
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
        }}
      />
    </Tab.Navigator>
  );
}

// exportando função default
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Edit" component={edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}