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
import Arrow3 from '../../../assets/Arrows-03.svg';
import {opacity} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import DatePicker from 'react-native-date-picker';

export default function Home({navigation}) {
  const deviceWidth = Dimensions.get('window').width;
  const [showQuote, setShowQuote] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

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
        onPress={openModal}
        style={{
          position: 'absolute',
          backgroundColor: 'orange',
          bottom: 50,
          right: 20,
          width: 60,
          height: 60,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          elevation: 2,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <View
          style={{
            // position: 'absolute',
            backgroundColor: 'white',
            // bottom: 50,
            // right: 20,
            width: 50,
            height: 50,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            // borderWidth: 1,
            // borderColor: 'black',
          }}>
          <View>
            <Image
              source={require('../../../assets/information-unscreen.gif')}
              style={{width: 20, height: 20, alignSelf: 'center'}}
            />
            <Text
              style={{
                fontSize: 8,
                fontFamily: 'Poppins-Medium',
                color: 'black',
                textAlign: 'center',
              }}>
              Quote
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <Modal
        animationIn="slideInUp"
        isVisible={showQuote}
        // deviceWidth={deviceWidth}
        style={{
          // margin: 10,
          position: 'absolute',
          width: deviceWidth - 35,
          backgroundColor: 'white',
          shadowColor: '#000',
          marginTop: '15%',
          borderRadius: 20,
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
            color: 'black',
            textAlign: 'center',
            padding: 10,
            fontFamily: 'Poppins-Medium',
            marginTop: 15,
            // letterSpacing: 1,
          }}>
          Get quotes on your shipment
        </Text>
        <View style={{paddingLeft: 20, alignItems: 'left'}}>
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
              fontSize: 13,
              // height: 50,
              padding: 5,
              color: 'black',
              fontFamily: 'Poppins-Medium',
              paddingLeft: 16,
              borderColor: '#d7d7d7',
              borderWidth: 1,
              marginTop: 15,
              // letterSpacing: 1,
            }}
          />
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor="#a3a3a3"
            keyboardType="numeric"
            maxLength={10}
            style={{
              borderRadius: 10,
              fontSize: 13,
              width: '90%',
              // height: 50,
              padding: 5,
              color: 'black',
              fontFamily: 'Poppins-Medium',
              paddingLeft: 16,
              borderColor: '#d7d7d7',
              borderWidth: 1,
              marginTop: 15,
              // letterSpacing: 1,
            }}
          />
          <View style={{position: 'absolute', right: -20, bottom: 70}}>
            <Arrow3 style={{opacity: 0.5}} width={220} height={90} />
          </View>
          <TextInput
            placeholder="Name of the Service"
            placeholderTextColor="#a3a3a3"
            style={{
              borderRadius: 10,
              fontSize: 13,
              width: '90%',
              // height: 50,
              padding: 5,
              color: 'black',
              fontFamily: 'Poppins-Medium',
              paddingLeft: 16,
              borderColor: '#d7d7d7',
              borderWidth: 1,
              marginTop: 15,
              // letterSpacing: 1,
            }}
          />
          {/* <TouchableOpacity onPress={() => setOpen(true)}>
            <TextInput
              placeholder="Shifting date"
              placeholderTextColor="#a3a3a3"
              value={date}
              style={{
                borderRadius: 10,
                fontSize: 13,
                width: '90%',
                // height: 50,
                padding: 5,
                color: 'black',
                fontFamily: 'Poppins-Medium',
                paddingLeft: 16,
                borderColor: '#d7d7d7',
                borderWidth: 1,
                marginTop: 15,
                // letterSpacing: 1,
              }}
            />
          </TouchableOpacity>
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          /> */}
          <View style={{marginHorizontal: 40, marginVertical: 10}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'orange',
                padding: 10,
                borderRadius: 7,
                // flexDirection: 'row',
                // alignContent: 'center',
                // justifyContent: 'space-between',
                width: '90%',
                marginVertical: 15,
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
