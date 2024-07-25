import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import GetLocation from 'react-native-get-location';
import Geocoder from 'react-native-geocoding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
export default function Header({navigation}) {
  const [address, setAddress] = useState('');
  const [latitude, setlatitude] = useState('');
  const [longitude, setlongitude] = useState('');
  const firstLineRef = React.createRef();

  useEffect(() => {
    Geocoder.init('AIzaSyBF48uqsKVyp9P2NlDX-heBJksvvT_8Cqk');
  }, []);
  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        const location = await GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 60000,
        });

        const {latitude, longitude} = location;
        setlatitude(latitude);
        setlongitude(longitude);
        fetchAddress(latitude, longitude);
      } catch (error) {
        const {code, message} = error;
        console.warn(code, message);
      }
    };

    const fetchAddress = async (latitude, longitude) => {
      try {
        const response = await Geocoder.from(latitude, longitude);
        const address = response.results[0].formatted_address;
        AsyncStorage.setItem('pickup', JSON.stringify(address));
        setAddress(address);
      } catch (error) {
        console.error('Error fetching address: ', error);
      }
    };

    getCurrentLocation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.subhead}>
          <TouchableOpacity
            style={styles.direction}
            onPress={() =>
              navigation.navigate('Location', {
                latitude: latitude,
                longitude: longitude,
              })
            }>
            <Image
              source={require('../../../assets/location.gif')}
              style={styles.gif}
            />
            <View style={{flexDirection: 'row', flex: 0.7}}>
              <View>
                <Text style={styles.headtitle}>Pick up from</Text>
                {address ? (
                  <Text style={styles.location} numberOfLines={1}>
                    {address}
                  </Text>
                ) : (
                  <ShimmerPlaceholder
                    ref={firstLineRef}
                    stopAutoRun
                    duration={100}
                  />
                )}
              </View>
            </View>
            <Octicons
              size={18}
              name="chevron-down"
              style={styles.icon}
              color={'black'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e6e638',
    height: 100,
  },
  header: {
    height: 60,
    backgroundColor: '#04c',
  },
  subhead: {
    margin: 10,
  },
  direction: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 22,
    padding: 10,
    width: '100%',
    borderRadius: 20,
    alignItems: 'center', // Align items vertically
  },
  location: {
    color: 'black',
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    // width: '50%',
  },
  headtitle: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    // marginLeft: 5,
  },
  gif: {
    width: 40,
    height: 40,
    flex: 0.15,
  },
  icon: {
    alignSelf: 'center',
    marginLeft: 10,
    marginTop: 20,
    flex: 0.1,
  },
});
