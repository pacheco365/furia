import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LiveMatchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Partida Ao Vivo</Text>
      <Text style={styles.score}>FURIA 10 - 8 NAVI</Text>
      <Text style={styles.subtitle}>Rodada 19 - Inferno</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 8,
  },
  score: {
    color: '#ffcc00',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ccc',
    fontSize: 14,
  },
});