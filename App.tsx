//importando elementos
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome6 } from '@expo/vector-icons';

//importando elementos de outros arquivos
import index from './components';
import add from './components/add';
import view from './components/view';
import del from './components/delete';

const Tab = createBottomTabNavigator();

//exportando função default
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#000'
          },
        }}>
        <Tab.Screen
          name="Todos os funcionários"
          component={index}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return (
                  <FontAwesome6
                    name="users"
                    size={24}
                    color="#e60000"
                  />
                );
              }
              return (
                <FontAwesome6
                  name="users"
                  size={24}
                  color="#fff"
                />
              );
            },
            headerStyle: {
              backgroundColor: '#000', 
            },
            headerTintColor: '#fff'
          }}
        />
        <Tab.Screen
          name="Adicionar funcionários"
          component={add}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return (
                  <FontAwesome6
                    name="user-plus"
                    size={24}
                    color="#e60000"
                  />
                );
              }
              return (
                <FontAwesome6
                  name="user-plus"
                  size={24}
                  color="#fff"
                />
              );
            },
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff'
          }}
        />
        <Tab.Screen
          name="Pesquisar funcionários"
          component={view}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return (
                  <FontAwesome6
                    name="magnifying-glass"
                    size={24}
                    color="#e60000"
                  />
                );
              }
              return (
                <FontAwesome6
                  name="magnifying-glass"
                  size={24}
                  color="#fff"
                />
              );
            },
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff'
          }}
        />
        <Tab.Screen
          name="Excluir funcionários"
          component={del}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return (
                  <FontAwesome6
                    name="user-minus"
                    size={24}
                    color="#e60000"
                  />
                );
              }
              return (
                <FontAwesome6
                  name="user-minus"
                  size={24}
                  color="#fff"
                />
              );
            },
            headerStyle: {
              backgroundColor: '#000', 
            },
            headerTintColor: '#fff'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}