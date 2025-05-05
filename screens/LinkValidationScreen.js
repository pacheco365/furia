import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function LinkValidationScreen() {
  const [link, setLink] = useState('');
  const [resultado, setResultado] = useState('');

  const validarLink = () => {
    if (link.includes('hltv') || link.includes('liquipedia')) {
      setResultado('✅ Perfil relacionado à e-sports!');
    } else {
      setResultado('❌ Não parece ser um perfil de e-sports.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Validar link de perfil externo</Text>
      <TextInput
        placeholder="Cole aqui o link do perfil"
        value={link}
        onChangeText={setLink}
        style={styles.input}
        placeholderTextColor="#999"
      />
      <Button title="Validar" onPress={validarLink} />
      {resultado && <Text style={styles.result}>{resultado}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  title: { color: '#ffcc00', fontSize: 18, marginBottom: 10 },
  input: { backgroundColor: '#222', color: '#fff', padding: 10, borderRadius: 8, marginBottom: 12 },
  result: { color: '#0f0', marginTop: 20, fontSize: 16 },
});
