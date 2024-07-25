import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';

const orders = [
  {
    id: '1',
    title: 'House Moving',
    date: '2023-07-10',
    status: 'Completed',
    amount: '₹5000',
  },
  {
    id: '2',
    title: 'Office Relocation',
    date: '2023-07-05',
    status: 'Pending',
    amount: '₹8000',
  },
  {
    id: '3',
    title: 'Furniture Moving',
    date: '2023-06-20',
    status: 'In Progress',
    amount: '₹3000',
  },
];

export default function Orders() {
  const renderItem = ({item}) => (
    <View style={styles.orderItem}>
      <View style={styles.orderDetails}>
        <Text style={styles.orderTitle}>{item.title}</Text>
        <Text style={styles.orderDate}>{item.date}</Text>
      </View>
      <View style={styles.orderStatus}>
        <Text style={styles.orderAmount}>{item.amount}</Text>
        <Text style={[styles.orderStatusText, getStatusStyle(item.status)]}>
          {item.status}
        </Text>
      </View>
    </View>
  );

  const getStatusStyle = status => {
    switch (status) {
      case 'Completed':
        return {color: 'green'};
      case 'Pending':
        return {color: 'orange'};
      case 'In Progress':
        return {color: 'blue'};
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
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  orderDetails: {
    flex: 2,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  orderDate: {
    fontSize: 14,
    color: '#777',
  },
  orderStatus: {
    flex: 1,
    alignItems: 'flex-end',
  },
  orderAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  orderStatusText: {
    fontSize: 14,
    marginTop: 4,
  },
});
