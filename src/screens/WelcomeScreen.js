import React from 'react';
import { View, Text, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome Screen</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('EnterCompanyID')}
      />
    </View>
  );
}
