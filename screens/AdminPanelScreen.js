import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mockUsers = [
  { id: '1', nome: 'Vitor', email: 'vitor@email.com', interesses: 'CS, Valorant' },
  { id: '2', nome: 'Maria', email: 'maria@email.com', interesses: 'Free Fire' },
];

export default function AdminPanelScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fãs cadastrados</Text>
      <FlatList
        data={mockUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.nome}</Text>
            <Text style={styles.info}>{item.email}</Text>
            <Text style={styles.info}>Interesses: {item.interesses}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  title: { color: '#ffcc00', fontSize: 22, marginBottom: 16 },
  card: { backgroundColor: '#111', padding: 14, marginBottom: 12, borderRadius: 10 },
  name: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  info: { color: '#ccc', fontSize: 14 },
});
