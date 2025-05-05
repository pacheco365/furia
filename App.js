import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import PlayersScreen from './screens/PlayersScreen';
import PlayerDetailScreen from './screens/PlayerDetailScreen';
import FanSimScreen from './screens/FanSimScreen';
import LiveMatchScreen from './screens/LiveMatchScreen';
import UploadScreen from './screens/UploadScreen';
import SocialConnectScreen from './screens/SocialConnectScreen';
import LinkValidationScreen from './screens/LinkValidationScreen';
import AdminPanelScreen from './screens/AdminPanelScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PlayersScreen" component={PlayersScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PlayerDetailScreen" component={PlayerDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FanSimScreen" component={FanSimScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LiveMatchScreen" component={LiveMatchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UploadScreen" component={UploadScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SocialConnectScreen" component={SocialConnectScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LinkValidationScreen" component={LinkValidationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AdminPanelScreen" component={AdminPanelScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
