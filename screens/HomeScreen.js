
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  Linking,
  Modal,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const noticias = [
  { id: '1', titulo: 'FURIA vence clássico contra NAVI', imagem: require('../assets/jogo1.png') },
  { id: '2', titulo: 'KSCERATO fala sobre nova formação', imagem: require('../assets/jogadores.png') },
  { id: '3', titulo: 'FURIA revela novo uniforme para 2025', imagem: require('../assets/jogo1.png') },
  { id: '4', titulo: 'Rocket League: FURIA avança para semifinais', imagem: require('../assets/jogadores.png') },
];

const galeria = [
  require('../assets/torcida1.png'),
  require('../assets/torcida2.png'),
  require('../assets/torcida3.png'),
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [interesses, setInteresses] = useState('');

  const handleCadastro = () => {
    setNome('');
    setEmail('');
    setCpf('');
    setEndereco('');
    setInteresses('');
    setTimeout(() => setModalVisible(false), 1500);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.cadastroBtn}>
          <Text style={styles.cadastroText}>Cadastrar-se</Text>
        </TouchableOpacity>
        <Image source={require('../assets/Furia_Esports_logo.png')} style={styles.logo} resizeMode="contain" />
        <View style={styles.redes}>
          <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com/furiagg')}>
            <Image source={require('../assets/instagram.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://x.com/furia?s=21')}>
            <Image source={require('../assets/twitter.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com/furiagg')}>
            <Image source={require('../assets/youtube.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Últimas Notícias</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {noticias.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={item.imagem} style={styles.cardImage} resizeMode="cover" />
              <Text style={styles.cardTitle}>{item.titulo}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Interaja com a FURIA</Text>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.smallButton} onPress={() => navigation.navigate('LiveMatchScreen')}>
            <Text style={styles.buttonText}>Jogos Ao Vivo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton} onPress={() => navigation.navigate('PlayersScreen')}>
            <Text style={styles.buttonText}>Jogadores</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton} onPress={() => navigation.navigate('FanSimScreen')}>
            <Text style={styles.buttonText}>Torcida Virtual</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton} onPress={() => navigation.navigate('UploadScreen')}>
            <Text style={styles.buttonText}>Upload Documento</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton} onPress={() => navigation.navigate('SocialConnectScreen')}>
            <Text style={styles.buttonText}>Redes Sociais</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton} onPress={() => navigation.navigate('LinkValidationScreen')}>
            <Text style={styles.buttonText}>Validar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton} onPress={() => navigation.navigate('AdminPanelScreen')}>
            <Text style={styles.buttonText}>Painel Admin</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📸 Galeria da Torcida</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {galeria.map((img, index) => (
            <Image key={index} source={img} style={styles.galeriaImg} resizeMode="cover" />
          ))}
        </ScrollView>
      </View>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Cadastrar Torcedor</Text>
            <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={styles.input} placeholderTextColor="#999" />
            <TextInput placeholder="E-mail" value={email} onChangeText={setEmail} style={styles.input} placeholderTextColor="#999" keyboardType="email-address" />
            <TextInput placeholder="CPF" value={cpf} onChangeText={setCpf} style={styles.input} placeholderTextColor="#999" keyboardType="numeric" />
            <TextInput placeholder="Endereço" value={endereco} onChangeText={setEndereco} style={styles.input} placeholderTextColor="#999" />
            <TextInput placeholder="Interesses (ex: CS, Valorant)" value={interesses} onChangeText={setInteresses} style={styles.input} placeholderTextColor="#999" />
            <TouchableOpacity style={styles.confirmBtn} onPress={handleCadastro}>
              <Text style={styles.confirmText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ color: '#fff', marginTop: 10 }}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#000', paddingVertical: 20, paddingHorizontal: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 },
  cadastroBtn: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8, backgroundColor: '#ffcc00' },
  cadastroText: { color: '#000', fontWeight: 'bold' },
  redes: { flexDirection: 'row', gap: 10 },
  socialIcon: { width: 24, height: 24 },
  logo: { width: 70, height: 70, marginBottom: 70, alignSelf: 'center', marginTop: 10 },
  section: { marginBottom: 30 },
  sectionTitle: { color: '#fff', fontSize: 18, fontWeight: '600', marginBottom: 10 },
  card: { backgroundColor: '#1a1a1a', borderRadius: 10, marginRight: 12, overflow: 'hidden', width: 240 },
  cardImage: { width: '100%', height: 120 },
  cardTitle: { color: '#fff', padding: 10, fontWeight: 'bold' },
  smallButton: { backgroundColor: '#ffcc00', paddingVertical: 10, borderRadius: 8, marginBottom: 10, alignItems: 'center' },
  buttonText: { color: '#000', fontSize: 14, fontWeight: 'bold' },
  buttonGroup: { gap: 10 },
  galeriaImg: { width: 300, height: 180, marginRight: 10, borderRadius: 10 },
  modalContainer: { flex: 1, backgroundColor: '#000000aa', justifyContent: 'center', alignItems: 'center' },
  modalBox: { backgroundColor: '#1a1a1a', padding: 20, borderRadius: 12, width: '85%', alignItems: 'center' },
  modalTitle: { fontSize: 18, fontWeight: 'bold', color: '#ffcc00', marginBottom: 10 },
  input: { width: '100%', backgroundColor: '#333', color: '#fff', padding: 10, borderRadius: 8, marginBottom: 10 },
  confirmBtn: { backgroundColor: '#ffcc00', padding: 12, borderRadius: 10, width: '100%', alignItems: 'center' },
  confirmText: { color: '#000', fontWeight: 'bold' },
})
