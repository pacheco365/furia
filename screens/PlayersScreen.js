import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';

const jogadores = {
  'CS:GO': [
    { id: '1', nome: 'KSCERATO', funcao: 'Rifler', imagem: require('../assets/kscerato.png') },
    { id: '2', nome: 'yuurih', funcao: 'Entry Fragger', imagem: require('../assets/yuurih.png') },
    { id: '3', nome: 'chelo', funcao: 'Support', imagem: require('../assets/chelo.png') },
  ],
  'Rocket League': [
    { id: '4', nome: 'CaioTG1', funcao: 'Ofensivo', imagem: require('../assets/caiotg1.png') },
    { id: '5', nome: 'Card', funcao: 'Defensivo', imagem: require('../assets/card.png') },
  ],
  'Valorant': [
    { id: '6', nome: 'qck', funcao: 'Duelista', imagem: require('../assets/qck.png') },
    { id: '7', nome: 'mwzera', funcao: 'Sentinela', imagem: require('../assets/mwzera.png') },
  ],
  'Free Fire': [
    { id: '8', nome: 'Modestia', funcao: 'Rush', imagem: require('../assets/modestia.png') },
    { id: '9', nome: 'Kauan', funcao: 'Suporte', imagem: require('../assets/kauan.png') },
  ],
};

export default function PlayersScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.keys(jogadores).map((time) => (
        <View key={time} style={styles.section}>
          <Text style={styles.sectionTitle}>{time}</Text>
          <FlatList
            horizontal
            data={jogadores[time]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={item.imagem} style={styles.playerImage} resizeMode="cover" />
                <Text style={styles.name}>{item.nome}</Text>
                <Text style={styles.role}>{item.funcao}</Text>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ))}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#000',
    paddingBottom: 30,
  },
  
  section: {
    marginTop: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    color: '#ffcc00',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 10,
    marginRight: 12,
    width: 160,
    alignItems: 'center',
  },
  playerImage: {
    width: 140,
    height: 140,
    borderRadius: 10,
    marginBottom: 8,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  role: {
    color: '#ccc',
    fontSize: 12,
  },
});