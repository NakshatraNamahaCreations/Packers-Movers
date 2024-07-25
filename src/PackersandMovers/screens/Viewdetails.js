import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Video from 'react-native-video';
import YoutubePlayer from 'react-native-youtube-iframe';
import Svg, {Defs, Path} from 'react-native-svg';

export default function Viewdetails({route}) {
  const deviceWidth = Dimensions.get('window').width;
  const service = route.params.serviceData;
  const serviceIncluded = [
    {
      text: 'Packaging and unpacking of goods.',
    },
    {
      text: 'Loading and unloading of goods.',
    },
    {
      text: 'Includes carton boxes.',
    },
    {
      text: 'Bubble or cargo sheet wrapping will be done for electronic goods.',
    },
  ];
  const serviceExclueded = [
    {
      text: 'Rs. 60 will be charged if carton boxes are not returned.',
    },
    {
      text: 'Extra costs will be applicable if a lift is not available.',
    },
    {
      text: 'Packaging materials like carton boxes will be taken back on the same day once delivery is done',
    },
  ];
  const [serviceIncludes, setServiceIncludes] = useState(true);
  const [serviceExcludes, setServiceExcludes] = useState(false);

  console.log('service data>>', service);
  const background1 =
    'https://vijayahomeservices.b-cdn.net/Thoughtful%20creation%20video/Pest%20Control%20Video%20New%20(2).mp4';
  const background2 =
    'https://vijayahomeservices.b-cdn.net/Thoughtful%20creation%20video/Paint%201320.mp4';
  const testimonial = 'https://youtu.be/cNtoymcg154?si=AMPGinyqVIkvZtow';

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        source={{uri: service.serviceImage}}
        style={{width: deviceWidth, height: 250, resizeMode: 'stretch'}}
      />
      <ScrollView
        style={{
          padding: 15,
          backgroundColor: 'white',
          height: '100%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'relative',
          top: -10,
        }}>
        {/* <ScrollView> */}
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 12,
            color: 'red',
          }}>
          Up to 20% Off
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 25,
            color: 'black',
          }}>
          {service.serviceName}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <AntDesign name={'star'} size={15} color="#f1c139" />
          </View>
          <View style={{marginTop: 4, marginLeft: 2}}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 15,
                color: 'black',
              }}>
              4.3
            </Text>
          </View>
          <View style={{marginTop: 4, marginLeft: 2}}>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: 13,
                color: 'black',
              }}>
              (1.3M Shiftings Completed)
            </Text>
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 17,
              color: 'black',
            }}>
            Description
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
              color: 'black',
              //   letterSpacing: 0.6,
            }}>
            {service.serviceDescription}
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: '#ebebeb',
            }}>
            <View style={{flex: 0.6}}>
              <TouchableOpacity
                onPress={() => {
                  setServiceIncludes(true);
                  setServiceExcludes(false);
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 14,
                    textAlign: 'center',
                    color: serviceIncludes ? 'darkred' : '#8d8d8d',
                    fontWeight: serviceIncludes ? '800' : '',
                    letterSpacing: 0.6,
                  }}>
                  Service Includes
                </Text>
                <View
                  style={{
                    borderBottomColor: serviceIncludes
                      ? 'darkred'
                      : 'transparent',
                    borderBottomWidth: serviceIncludes ? 3 : 0,
                    position: 'relative',
                    top: 2,
                  }}></View>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.6}}>
              <TouchableOpacity
                onPress={() => {
                  setServiceIncludes(false);
                  setServiceExcludes(true);
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 14,
                    color: serviceExcludes ? 'darkred' : '#8d8d8d',
                    textAlign: 'center',
                    fontWeight: serviceExcludes ? '800' : '',
                    letterSpacing: 0.6,
                  }}>
                  Service Excludes
                </Text>
                <View
                  style={{
                    borderBottomColor: serviceExcludes
                      ? 'darkred'
                      : 'transparent',
                    borderBottomWidth: serviceExcludes ? 3 : 0,
                    position: 'relative',
                    top: 2,
                  }}></View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            {serviceIncludes ? (
              <View>
                {serviceIncluded.map(item => (
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      fontSize: 12,
                      color: 'black',
                      marginBottom: 5,
                      letterSpacing: 0.6,
                    }}>
                    <AntDesign name={'checkcircle'} size={15} color="green" />{' '}
                    {item.text}
                  </Text>
                ))}
              </View>
            ) : serviceExcludes ? (
              <View>
                {serviceExclueded.map(item => (
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      fontSize: 12,
                      color: 'black',
                      marginBottom: 5,
                      letterSpacing: 0.6,
                    }}>
                    <AntDesign name={'star'} size={15} color="#1628a7" />{' '}
                    {item.text}
                  </Text>
                ))}
              </View>
            ) : null}
          </View>
        </View>
        <View style={{marginVertical: 5}}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 17,
              color: 'black',
            }}>
            Thoughtful curations
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 13,
              color: 'darkred',
            }}>
            Of our finest experiences
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Video
              source={{uri: background1}}
              style={{width: 150, height: 200, borderRadius: 10}}
              resizeMode="cover"
              repeat={true}
            />
          </View>
          <View>
            <Video
              source={{uri: background2}}
              style={{width: 150, height: 200}}
              resizeMode="cover"
              repeat={true}
            />
          </View>
        </View>
        <View style={{marginVertical: 15}}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 17,
              color: 'black',
            }}>
            Testimonial Video
          </Text>
          <View style={{marginTop: 10}}>
            {/* <Video
              source={{uri: testimonial}}
              style={{width: deviceWidth, height: 200}}
              resizeMode="cover"
              repeat={true}
            /> */}
            <YoutubePlayer height={180} play={true} videoId={'YZXneUfb4hU'} />
          </View>
        </View>
        <View style={{marginVertical: 15}}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 17,
              color: 'black',
            }}>
            How we Work
          </Text>
          <View style={{marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'red',
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign name={'star'} size={50} color="white" />
              </View>

              <View>
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 15,
                    color: 'black',
                  }}>
                  Trained Professional
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Light',
                    fontSize: 13,
                    color: 'black',
                  }}>
                  Trained Professional
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 15,
                    color: 'black',
                  }}>
                  Trained Professional
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Light',
                    fontSize: 13,
                    color: 'black',
                  }}>
                  Trained Professional
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'red',
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign name={'star'} size={50} color="white" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
