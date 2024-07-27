import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
// import Zigzag from '../../../assets/kirushape.svg';
// import Arrow4 from '../../../assets/Arrow-04.svg';

export default function OrdersDetails({navigation, route}) {
  const orders = route.params.orders;
  console.log('orders>>>>>>>>>>', orders);
  const deviceWidth = Dimensions.get('window').width;
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // padding: 15,
          paddingVertical: 8,
          paddingHorizontal: 10,
          backgroundColor: '#0000003d',
          // elevation: 4,
        }}>
        <View>
          <TouchableOpacity>
            <Ionicons
              name="chevron-back-sharp"
              size={20}
              color="black"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 20}}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins-Medium',
              color: '#333',
            }}>
            {moment(orders.date).format('llll')}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontFamily: 'Poppins-Regular',
              color: 'green',
            }}>
            <FontAwesome5 name="truck-moving" size={10} color="green" />{' '}
            {orders.vehicleType}
          </Text>
        </View>
      </View>

      <ScrollView>
        <View style={{width: deviceWidth}}>
          <Image
            source={require('../../../assets/map-for-refereene.png')}
            style={{width: '100%', height: 150}}
          />
        </View>
        <View style={{backgroundColor: 'white', height: '100%'}}>
          <View style={{paddingHorizontal: 15, paddingTop: 15}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <View>
                <Image
                  source={require('../../../assets/Images/delivery-truck.png')}
                  style={{width: 50, height: 50}}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: 'Poppins-SemiBold',
                    backgroundColor:
                      orders.status === 'Pending'
                        ? '#ffe0a86b'
                        : orders.status === 'Completed'
                        ? '#a6ffa663'
                        : orders.status === 'In Progress'
                        ? '#b0b0ff59'
                        : 'gray',
                    paddingHorizontal: 8,
                    paddingVertical: 3,
                    borderRadius: 5,
                    color:
                      orders.status === 'Pending'
                        ? 'orange'
                        : orders.status === 'Completed'
                        ? 'green'
                        : orders.status === 'In Progress'
                        ? 'blue'
                        : 'black',
                  }}>
                  {orders.status}
                </Text>
              </View>
            </View>
            <View style={{marginVertical: 10, marginHorizontal: 50}}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                  color: '#333',
                  marginBottom: 5,
                }}>
                You rated
              </Text>
              <View style={{flexDirection: 'row'}}>
                {Array.from({length: 5}).map((_, index) => (
                  <AntDesign
                    key={index}
                    name="star"
                    size={12}
                    color="#e1e1e1"
                    style={{padding: 3}}
                  />
                ))}
              </View>
            </View>
            <View
              style={{
                borderBottomColor: '#d3d3d3',
                borderBottomWidth: 0.2,
              }}></View>
            <View style={{marginVertical: 15}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Ionicons
                  name="speedometer-outline"
                  size={30}
                  color="#ababab"
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-SemiBold',
                    color: '#333',
                  }}>
                  <FontAwesome5 name="rupee-sign" size={11} color="#333" /> 1954
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-SemiBold',
                    color: '#333',
                  }}>
                  14 km
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-SemiBold',
                    color: '#333',
                  }}>
                  1 hr 53 min
                </Text>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: '#d3d3d3',
                borderBottomWidth: 0.2,
              }}></View>
            <View style={{marginVertical: 20}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 0.1}}>
                  <FontAwesome6 name="location-dot" size={15} color="#009688" />
                </View>
                <View style={{flex: 0.9}}>
                  <Text
                    style={{
                      fontSize: 10,
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
                      fontSize: 10,
                      color: '#565656',
                      fontFamily: 'Poppins-Regular',
                    }}>
                    No. 279, 5th Main Rd, MS Ramaiah City Layout, 8th Phase,
                    Arekere, Bengaluru, Karnataka 560078, India
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: '#d3d3d3',
                borderBottomWidth: 0.2,
              }}></View>
            <View style={{marginVertical: 15}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Poppins-SemiBold',
                  color: '#333',
                }}>
                Bill Details
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 10,
                }}>
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: 'Poppins-Regular',
                    color: '#333',
                  }}>
                  Your trip
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: 'Poppins-Medium',
                    color: '#333',
                  }}>
                  <FontAwesome5 name="rupee-sign" size={10} color="#333" />{' '}
                  1951.28
                </Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#d3d3d3',
                  borderBottomWidth: 0.2,
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 10,
                }}>
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: 'Poppins-Regular',
                    color: '#333',
                  }}>
                  Rounded Off
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: 'Poppins-Medium',
                    color: '#333',
                  }}>
                  <FontAwesome5 name="rupee-sign" size={10} color="#333" /> 0.73
                </Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#d3d3d3',
                  borderBottomWidth: 0.2,
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 10,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontFamily: 'Poppins-SemiBold',
                      color: '#333',
                    }}>
                    Total Bill
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: 'Poppins-Light',
                      color: '#333',
                    }}>
                    Includes{' '}
                    <FontAwesome5 name="rupee-sign" size={7} color="black" />{' '}
                    67.19 Taxes
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontFamily: 'Poppins-SemiBold',
                      color: '#333',
                    }}>
                    <FontAwesome5 name="rupee-sign" size={9} color="#333" />{' '}
                    1952
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#d3d3d3',
                  borderBottomWidth: 0.2,
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-SemiBold',
                    color: '#333',
                  }}>
                  Total Payable
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-SemiBold',
                    color: '#333',
                  }}>
                  <FontAwesome5 name="rupee-sign" size={11} color="#333" /> 1954
                </Text>
              </View>
            </View>
          </View>
          {/* <Zigzag width={220} height={100} /> */}
          <Image
            source={require('../../../assets/kiru-shape-05.png')}
            style={{
              width: deviceWidth,
              height: 14,
              position: 'Relative',
              bottom: 10,
            }}
          />
          <View style={{paddingHorizontal: 15}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Poppins-SemiBold',
                color: '#333',
              }}>
              Payment
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-Regular',
                    color: '#333',
                  }}>
                  Paid by UPI
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-Regular',
                    color: '#333',
                  }}>
                  kiruthikamani@oksbi
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-Medium',
                    color: '#333',
                  }}>
                  <FontAwesome5 name="rupee-sign" size={10} color="#333" />{' '}
                  1951.28
                </Text>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: '#d3d3d3',
                borderBottomWidth: 0.2,
              }}></View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-Regular',
                    color: '#333',
                  }}>
                  Get invoice copy
                </Text>
              </View>
              <View>
                <FontAwesome name="angle-right" size={15} color="#333" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
