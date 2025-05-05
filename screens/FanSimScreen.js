import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function FanSimScreen() {
  const [mensagem, setMensagem] = useState('');

  const torcer = () => {
    setMensagem('VAMOS FURIAAA!!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={torcer}>
        <Text style={styles.buttonText}>TORCER!</Text>
      </TouchableOpacity>
      <Text style={styles.msg}>{mensagem}</Text>
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
  button: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  msg: {
    color: '#ffcc00',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
