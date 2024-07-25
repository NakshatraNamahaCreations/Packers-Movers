import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import Header from './Header';
import Banner from './Banner';
import Category from './Category';
import Howitworks from './Howitworks';
import Exclusiveoffer from './Exclusiveoffer';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Servicedetails from './Servicedetails';

export default function Home({navigation}) {
  useEffect(() => {
    AsyncStorage.getItem('pickup').then(value => {
      const parsedValue = JSON.parse(value);
      console.log('pickupLocation', parsedValue);
    });
    AsyncStorage.getItem('drop').then(value => {
      const parsedValue = JSON.parse(value);
      console.log('dropLocation', parsedValue);
    });
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />
      <Banner />
      {/* <Category navigation={navigation} /> */}
      <Servicedetails navigation={navigation} />
      {/* <Exclusiveoffer navigation={navigation} /> */}
      <Howitworks />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#FCF8F3',
    flex: 1,
  },
  animation: {
    width: 200,
    height: 200,
  },
});
