import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
       // disapear after 3 seconds and go to welcome screen
    const timer = setTimeout(() => {
      navigation.replace('Welcome'); 
    }, 3000);
       // i used replace above  because we dont want the user to use back to splash screen or anything

    return () => clearTimeout(timer);  //cleartimeout to kill the timer after the welcome is loaded
  }, [navigation]);

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize: 24 }}>Splash Screen</Text>
    </View>
  );
}
