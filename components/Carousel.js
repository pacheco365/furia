import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.75;

const data = [
  { title: 'Torça com a FURIA', image: require('../assets/jogadores.png') },
  { title: 'Acompanhe jogos ao vivo', image: require('../assets/furia-logo.gif') },
];

export default function CustomCarousel() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
      layout="default"
    />
  );
}

const styles = StyleSheet.create({
  item: { backgroundColor: '#111', borderRadius: 8, alignItems: 'center', padding: 10 },
  image: { width: ITEM_WIDTH, height: 180, borderRadius: 8 },
  text: { color: '#fff', marginTop: 10, fontSize: 16, fontWeight: 'bold' },
});