import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function SocialConnectScreen() {
  const simulateConnect = (rede) => {
    Alert.alert(`${rede} vinculado com sucesso!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vincule suas redes sociais</Text>
      {['Instagram', 'Twitter', 'YouTube'].map((rede) => (
        <TouchableOpacity
          key={rede}
          style={styles.button}
          onPress={() => simulateConnect(rede)}
        >
          <Text style={styles.buttonText}>Conectar com {rede}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20, alignItems: 'center' },
  title: { color: '#ffcc00', fontSize: 20, marginBottom: 20 },
  button: { backgroundColor: '#ffcc00', padding: 12, borderRadius: 10, marginBottom: 12 },
  buttonText: { color: '#000', fontWeight: 'bold' },
});
