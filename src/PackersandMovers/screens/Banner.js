import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function Banner() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/b2.jpg')} style={styles.bimg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: '#e6e6e638', marginTop: 10},
  bimg: {
    width: '90%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
