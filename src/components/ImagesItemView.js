import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ImagesItemView = ({ src }) => (
  <View style={styles.container}>
    <Image style={styles.img} source={{ uri: src }} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  img: {
    flex: 1,
    alignSelf: 'stretch',
    width,
    height: height / 3,
    resizeMode: 'cover',
  }
});

export default ImagesItemView;
