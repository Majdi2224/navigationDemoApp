import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    // disapear after 3 seconds and go to welcome screen
    const timeout = setTimeout(() => {
      // i used replace above  because we dont want the user to use back to splash screen or anything
      navigation.replace('Welcome');
    }, 3000);
    //cleartimeout to kill the timer after the welcome is loaded
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 28, fontWeight: 'bold'},
});
