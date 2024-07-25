import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

export default function Howitworks() {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>How it Works?</Text>

      <View style={styles.subcon}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="document-text-outline"
            size={22}
            color={'#0044cc91'}
            style={styles.icon}
          />
          <View style={styles.dashLine}></View>
        </View>
        <View style={styles.f2}>
          <Text style={styles.txt}>Share your shifting requirement</Text>
          <Text style={styles.desc}>
            Help us by providing when and where do you want to move{' '}
          </Text>
        </View>
      </View>

      <View style={styles.subcon}>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name="request-quote"
            size={22}
            color={'#0044cc91'}
            style={styles.icon}
          />
          <View style={styles.dashLine}></View>
        </View>
        <View style={styles.f2}>
          <Text style={styles.txt}>Receive Free instant Quote</Text>
          <Text style={styles.desc}>
            Get guaranteed lowest priced quote for your shifting instantly{' '}
          </Text>
        </View>
      </View>

      <View style={styles.subcon}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="calendar-clock"
            size={22}
            color={'#0044cc91'}
            style={styles.icon}
          />
          <View style={styles.dashLine}></View>
        </View>
        <View style={styles.f2}>
          <Text style={styles.txt}>Assign Quality Service Expert</Text>
          <Text style={styles.desc}>
            To ensure safe relocation, a quality service expert will be allotted
            for your movement{' '}
          </Text>
        </View>
      </View>

      <View style={styles.subcon}>
        <View style={styles.iconContainer}>
          <Feather
            name="truck"
            size={22}
            color={'#0044cc91'}
            style={styles.icon}
          />
        </View>
        <View style={styles.f2}>
          <Text style={styles.txt}>Leave the Heavy Lifting to Us</Text>
          <Text style={styles.desc}>
            Enjoy hassle-free on-time movement of your household goods
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  head: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: 'black',
  },
  subcon: {
    flexDirection: 'row',
    marginTop: 5,
  },
  iconContainer: {
    flex: 0.2,
    alignItems: 'center',
  },
  f1: {
    flex: 0.2,
    borderRadius: 25,
    alignSelf: 'center',
    padding: 5,
  },
  f2: {
    flex: 0.8,
  },
  txt: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  desc: {
    color: 'grey',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  icon: {
    textAlign: 'center',
    backgroundColor: 'lightgrey',
    width: 50,
    height: 50,
    padding: 5,
    borderRadius: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    lineHeight: 35,
  },
  dashLine: {
    width: 1,
    height: 30,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 5,
  },
});
