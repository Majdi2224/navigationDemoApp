import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen'
import WelcomeScreen from '../screens/WelcomeScreen';
import EnterCompanyID from '../screens/EnterCompanyId';
import PickVoice from '../screens/PickVoice';
import MainScreen from '../screens/MainScreen';
import VoicebotScreen from '../screens/VoicebotScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function OnboardingStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
         // i used headershown: False since we dont need user to skip the splash
      />

      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerBackVisible: false }}
         // headerBackVisible: false we dont want the user to go back to splash

      />

      <Stack.Screen
        name="EnterCompanyID"
        component={EnterCompanyID}
      />

      <Stack.Screen
        name="PickVoice"
        component={PickVoice}
        options={{ presentation: 'modal'}}// presentation:'modal' for the dissmiss downward for the screen
        
      />

      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerLeft: () => null,    
          gestureEnabled: false,    // no swipe back
        }}
      />

      <Stack.Screen
        name="Voicebot"
        component={VoicebotScreen}
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}
