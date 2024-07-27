import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

const orders = [
  {
    id: '1',
    title: 'Office Relocation',
    date: '2024-05-06T14:43:00.000Z',
    status: 'Pending',
    amount: '8000',
    vehicleType: 'Ashok Leyland Dost',
  },
  {
    id: '2',
    title: 'House Moving',
    date: '2024-07-20T09:41:00.000Z',
    status: 'Completed',
    amount: '5000',
    vehicleType: 'Tata Ace',
  },
  {
    id: '3',
    title: 'Furniture Moving',
    date: '2024-07-25T10:41:00.000Z',
    status: 'In Progress',
    amount: '3000',
    vehicleType: 'Mini truck',
  },
];

export default function Orders() {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          padding: 15,
          marginVertical: 3,
          borderRadius: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        }}
        onPress={() => navigation.navigate('OrderDetails', {orders: item})}>
        <View style={styles.orderItem}>
          <View
            style={{
              flex: 0.2,
            }}>
            <Image
              source={require('../../../assets/Images/delivery-truck.png')}
              style={{width: 50, height: 50}}
            />
          </View>
          <View style={styles.orderDetails}>
            <Text style={styles.orderTitle}>
              {moment(item.date).format('llll')}
            </Text>
            <Text style={styles.orderDate}>{item.vehicleType}</Text>
          </View>
          <View style={styles.orderStatus}>
            <Feather name="chevron-right" size={20} color="#313131" />
            {/* <Text style={styles.orderAmount}>{item.amount}</Text>
        <Text style={[styles.orderStatusText, getStatusStyle(item.status)]}>
          {item.status}
        </Text> */}
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#f9f9f9',
            padding: 10,
            marginVertical: 10,
            borderRadius: 5,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 0.1}}>
              <FontAwesome6 name="location-dot" size={15} color="#009688" />
            </View>
            <View style={{flex: 0.9}}>
              <Text
                style={{
                  fontSize: 11,
                  color: '#565656',
                  fontFamily: 'Poppins-Regular',
                }}>
                560, 3rd Floor, 9th A Main, Indiranagar, behind Coffee Day,
                Bengaluru, Karnataka 560038, India
              </Text>
            </View>
          </View>
          <View style={{marginLeft: 3}}>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                fontFamily: 'Poppins-Medium',
              }}>
              |
            </Text>
            {/* <Entypo name="flow-line" size={20} color="#3f51b5" /> */}
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 0.1}}>
              <FontAwesome6 name="location-dot" size={15} color="#e91e63" />
            </View>
            <View style={{flex: 0.9}}>
              <Text
                style={{
                  fontSize: 11,
                  color: '#565656',
                  fontFamily: 'Poppins-Regular',
                }}>
                No. 279, 5th Main Rd, MS Ramaiah City Layout, 8th Phase,
                Arekere, Bengaluru, Karnataka 560078, India
              </Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.orderStatusText, getStatusStyle(item.status)]}>
            {item.status}
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );

  const getStatusStyle = status => {
    switch (status) {
      case 'Completed':
        return {color: 'green', backgroundColor: '#a6ffa663'};
      case 'Pending':
        return {color: 'orange', backgroundColor: '#ffe0a86b'};
      case 'In Progress':
        return {color: 'blue', backgroundColor: '#b0b0ff59'};
      default:
        return {color: 'black'};
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    flex: 1,
    padding: 3,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',

    // justifyContent: 'space-between',

    // elevation: 2,
  },
  orderDetails: {
    flex: 0.7,
  },
  orderTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
  },
  orderDate: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
  orderStatus: {
    flex: 0.1,
    alignItems: 'flex-end',
  },
  orderAmount: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#333',
  },
  orderStatusText: {
    fontSize: 10,
    fontFamily: 'Poppins-SemiBold',
    // backgroundColor: 'yellow',
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});
