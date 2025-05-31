import React, { useRef, useMemo } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

export default function MainScreen({ navigation }) {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['30%', '60%'], []);

  const openSettings = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main Screen</Text>
      <Button
        title="Launch Voicebot screen"
        onPress={() => navigation.navigate('Voicebot')}
      />

        {/* i didnt want to make a settingsScreen so i implemented it here */}

      <Button
        title="Open Settings"
        onPress={openSettings}
        style={{ marginTop: 20 }}
      />

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <View style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>Settings</Text>
          {/* settings options here for the future edits */}
          <Text>Option 1</Text>
          <Text>Option 2</Text>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
  sheetContent: { flex: 1, padding: 20 },
  sheetTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});
