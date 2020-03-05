import React from 'react';
import './config/ReactotronConfig';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Teste Serasa',
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
          name="Main"
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
