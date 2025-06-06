import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function VoicebotScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Voicebot Screen</Text>
      <Button title="Dismiss" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
});
