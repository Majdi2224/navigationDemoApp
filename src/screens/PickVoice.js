import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const voices = [
  { id: '1', name: 'Alexa', language: 'English (US)' },
  { id: '2', name: 'Google', language: 'English (UK)' },
  { id: '3', name: 'Salma', language: 'Arabic (Lebanon)' },
];

const PickVoice = ({ onSelect, onClose }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick a Voice Assistant</Text>
      <FlatList
        data={voices}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.voiceItem} onPress={() => onSelect(item)}>
            <Text style={styles.voiceName}>{item.name}</Text>
            <Text style={styles.voiceLang}>{item.language}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
        <Text style={styles.closeText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PickVoice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    margin: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  voiceItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  voiceName: {
    fontSize: 16,
    fontWeight: '500',
  },
  voiceLang: {
    fontSize: 14,
    color: '#666',
  },
  closeBtn: {
    marginTop: 20,
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeText: {
    color: '#fff',
    fontWeight: '500',
  },
});
