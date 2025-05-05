import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PlayerCard({ player }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{player.name}</Text>
      <Text style={styles.role}>{player.role}</Text>
      <Text style={styles.kd}>K/D: {player.kd}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#111', padding: 20, margin: 10, borderRadius: 8 },
  name: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  role: { color: '#ffcc00', fontSize: 16 },
  kd: { color: '#ccc', fontSize: 16 },
});