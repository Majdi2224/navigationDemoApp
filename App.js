import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingStack from './src/navigation/OnboardingStack';
// linking so the app respond to links like demoapp://voicebot or something 
const linking = {
  prefixes: ['demoapp://'],
  config: {
    screens: {
      Voicebot: 'voicebot',//and this opens voicebotscreen after clicking link 
    },
  },
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <OnboardingStack />
    </NavigationContainer>
  );
}
