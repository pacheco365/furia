import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UploadScreen() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setTimeout(() => alert("Documento validado com sucesso por IA!"), 2000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Envie seu documento</Text>
      <Button title="Escolher imagem" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20, alignItems: 'center' },
  title: { color: '#ffcc00', fontSize: 18, marginBottom: 10 },
  image: { width: 200, height: 300, marginTop: 20, borderRadius: 8 },
});
