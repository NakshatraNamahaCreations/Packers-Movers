import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import Banner from './Banner';
import Category from './Category';
import Howitworks from './Howitworks';
import Exclusiveoffer from './Exclusiveoffer';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Servicedetails from './Servicedetails';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Home({navigation}) {
  const deviceWidth = Dimensions.get('window').width;
  const [showQuote, setShowQuote] = useState(false);

  const openModal = () => setShowQuote(true);
  const closeModal = () => setShowQuote(false);

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
    <>
      <ScrollView style={styles.container}>
        <Header navigation={navigation} />
        <Banner />
        {/* <Category navigation={navigation} /> */}
        <Servicedetails navigation={navigation} />
        {/* <Exclusiveoffer navigation={navigation} /> */}
        <Howitworks />
      </ScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          bottom: 50,
          right: 20,
          width: 70,
          height: 70,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          elevation: 2,
          borderColor: 'black',
          borderWidth: 1,
        }}
        onPress={openModal}>
        <View>
          <Image
            source={require('../../../assets/information.gif')}
            style={{width: 35, height: 35, alignSelf: 'center'}}
          />
          <Text
            style={{
              fontSize: 11,
              fontFamily: 'Poppins-Medium',
              color: '#4ec7cd',
              textAlign: 'center',
            }}>
            Quote
          </Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationIn="slideInUp"
        isVisible={showQuote}
        deviceWidth={deviceWidth}
        style={{
          margin: 5,
          position: 'absolute',
          width: '100%',
          backgroundColor: 'white',
          shadowColor: '#000',
          marginTop: '15%',
        }}
        transparent={true}>
        <TouchableOpacity
          style={{position: 'absolute', right: '50%', top: -30}}
          onPress={closeModal}>
          <AntDesign
            name="closecircleo"
            color={'white'}
            size={25}
            onPress={closeModal}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: 'black',
            textAlign: 'center',
            padding: 10,
            fontFamily: 'Poppins-Medium',
            // letterSpacing: 1,
          }}>
          Schedule your quote
        </Text>
        <View style={{paddingLeft: 10, alignItems: 'left'}}>
          <Text
            style={{
              fontSize: 13,
              color: 'black',
              fontFamily: 'Poppins-Medium',
              // letterSpacing: 1,
            }}>
            Fill up the Form
          </Text>
          <TextInput
            placeholder="Name"
            placeholderTextColor="#a3a3a3"
            style={{
              borderRadius: 10,
              width: '90%',
              // height: 50,
              padding: 5,
              color: 'black',
              fontFamily: 'Poppins-Medium',
              paddingLeft: 16,
              borderColor: '#d7d7d7',
              borderWidth: 1,
              marginTop: 5,
              // letterSpacing: 1,
            }}
          />
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor="#a3a3a3"
            style={{
              borderRadius: 10,
              width: '90%',
              // height: 50,
              padding: 5,
              color: 'black',
              fontFamily: 'Poppins-Medium',
              paddingLeft: 16,
              borderColor: '#d7d7d7',
              borderWidth: 1,
              marginTop: 5,
              // letterSpacing: 1,
            }}
          />
          <TextInput
            placeholder="Name of the Service"
            placeholderTextColor="#a3a3a3"
            style={{
              borderRadius: 10,
              width: '90%',
              // height: 50,
              padding: 5,
              color: 'black',
              fontFamily: 'Poppins-Medium',
              paddingLeft: 16,
              borderColor: '#d7d7d7',
              borderWidth: 1,
              marginTop: 5,
              // letterSpacing: 1,
            }}
          />
          <View style={{marginHorizontal: 40, marginVertical: 10}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#ceffa4',
                padding: 10,
                borderRadius: 7,
                // flexDirection: 'row',
                // alignContent: 'center',
                // justifyContent: 'space-between',
                width: '90%',
              }}
              onPress={closeModal}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontFamily: 'Poppins-SemiBold',
                  // letterSpacing: 1,
                  textAlign: 'center',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
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
