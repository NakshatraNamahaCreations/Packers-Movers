import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Step1({navigation}) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [isEnabled1, setIsEnabled1] = useState(true);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [activeCategory, setActiveCategory] = useState('Within city');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  console.log('pickupLocation', pickupLocation);
  useEffect(() => {
    AsyncStorage.getItem('pickup').then(value => {
      const parsedValue = JSON.parse(value);
      setPickupLocation(parsedValue);
    });
    AsyncStorage.getItem('drop').then(value => {
      const parsedValue = JSON.parse(value);
      setDropLocation(parsedValue);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            {
              backgroundColor:
                activeCategory === 'Within city' ? '#0f337b' : 'transparent',
            },
          ]}
          onPress={() => setActiveCategory('Within city')}>
          <Text
            style={[
              styles.categoryText,
              {color: activeCategory === 'Within city' ? 'white' : 'black'},
            ]}>
            Within city
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            {
              backgroundColor:
                activeCategory === 'Between cities' ? '#0f337b' : 'transparent',
            },
          ]}
          onPress={() => setActiveCategory('Between cities')}>
          <Text
            style={[
              styles.categoryText,
              {color: activeCategory === 'Between cities' ? 'white' : 'black'},
            ]}>
            Between cities
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.locationContainer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name="arrowup"
            size={13}
            color={'white'}
            style={styles.icon}
          />
        </View>
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => navigation.navigate('Picklocationsearch')}>
          <Text style={styles.labelText}>Pickup Location</Text>
          <Text style={{height: 35, fontSize: 11}} numberOfLines={1}>
            {pickupLocation}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flr}>
        <View>
          <Text style={styles.flrhead}>Service lift available at pickup</Text>
          <Text style={styles.flrdesc}>
            A working service lift will reduce the overall quote
          </Text>
        </View>
        <Switch
          trackColor={{false: '#767577', true: 'green'}}
          thumbColor={isEnabled ? 'white' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      {!isEnabled && (
        <View style={styles.frlinput}>
          <TextInput
            style={styles.it1}
            placeholder="Floor number"
            placeholderTextColor="#999"
          />
        </View>
      )}

      <TouchableOpacity
        style={[styles.locationContainer, {marginTop: 40}]}
        onPress={() => navigation.navigate('Droplocationsearch')}>
        <View style={styles.iconContainer}>
          <View style={styles.dicon}>
            <AntDesign name="arrowdown" size={13} color={'white'} />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Drop Location</Text>
          <Text style={{height: 35, fontSize: 11}} numberOfLines={1}>
            {dropLocation}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.flr}>
        <View>
          <Text style={styles.flrhead}>Service lift available at drop</Text>
          <Text style={styles.flrdesc}>
            A working service lift will reduce the overall quote
          </Text>
        </View>
        <Switch
          trackColor={{false: '#767577', true: 'green'}}
          thumbColor={isEnabled1 ? 'white' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch1}
          value={isEnabled1}
        />
      </View>
      {!isEnabled1 && (
        <View style={styles.frlinput}>
          <TextInput
            style={styles.it1}
            placeholder="Floor number"
            placeholderTextColor="#999"
          />
        </View>
      )}

      <TouchableOpacity style={styles.frlinput} onPress={() => setOpen(true)}>
        <AntDesign name="calendar" size={22} color={'#132c57'} />
        <View>
          <Text
            style={{
              marginLeft: 10,
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
              color: 'black',
            }}>
            Shifting date
          </Text>
          <Text style={{marginLeft: 10}}>{date.toString()}</Text>
        </View>
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    height: 70,
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    backgroundColor: 'green',
    borderRadius: 25,
    padding: 3,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  dicon: {
    backgroundColor: 'red',
    borderRadius: 25,
    padding: 3,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  inputContainer: {
    flex: 1,
  },
  labelText: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  textInputContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginHorizontal: 0,
    paddingHorizontal: 0,
  },
  textInput: {
    height: 35,
    fontSize: 12,
    color: '#000',
    fontFamily: 'Poppins-Light',
    borderColor: '#ddd',
    borderRadius: 10,
  },
  listView: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    marginTop: 10,
  },
  description: {
    color: '#333',
    fontFamily: 'Poppins-Light',
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
  flr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  flrhead: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  flrdesc: {
    fontSize: 10,
    fontFamily: 'Poppins',
    color: 'black',
  },
  frlinput: {
    width: '100%',
    marginTop: 30,
    borderColor: '#ddd',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  it1: {
    flex: 1,
    height: 40,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    backgroundColor: '#e0e0e059',
    padding: 5,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 5,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
