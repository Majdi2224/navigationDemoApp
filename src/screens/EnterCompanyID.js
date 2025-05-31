import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function EnterCompanyID({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Company ID Screen</Text>
      <Button
        title="Continue"
        onPress={() => navigation.push('PickVoice')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
});
