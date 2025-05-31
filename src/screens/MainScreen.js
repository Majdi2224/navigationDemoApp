import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main Screen</Text>
      <Button
        title="Launch Voicebot screen"
        onPress={() => navigation.navigate('Voicebot')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
});
