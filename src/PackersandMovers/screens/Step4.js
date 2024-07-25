import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet';

export default function Step4({navigation}) {
  const refRBSheet = useRef();
  const [selectedSlot, setSelectedSlot] = useState(null);

  const slots = ['10:00 - 12:00', '12:00 - 2:00', '2:00 - 4:00'];
  return (
    <View style={styles.container}>
      <ScrollView style={{margin: 5}} showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.headerText}>Moving details</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <AntDesign name="arrowup" size={13} color="white" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Pickup location</Text>
            <Text style={styles.subtitle}>
              Kanakara rd, 7th Block, Jayanagar, Ben....
            </Text>
          </View>
          <Entypo name="chevron-small-right" size={20} />
        </View>

        <View style={styles.dashedLineContainer}>
          <View style={styles.dashedLine}></View>
        </View>

        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate('Droplocationsearch')}>
          <View style={styles.dropicon}>
            <AntDesign name="arrowdown" size={13} color="white" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Drop location</Text>
            <Text style={styles.subtitle}>
              Kanakara rd, 7th Block, Jayanagar, Ben....
            </Text>
          </View>
          <Entypo name="chevron-small-right" size={20} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // padding: 15,
            // margin: 10,
            elevation: 2,
            // borderWidth: 1,
            height: 50,
            backgroundColor: 'white',
            marginTop: 20,
          }}>
          <Text
            style={{fontFamily: 'Poppins-Medium', color: 'black', padding: 10}}>
            4 items added & 1 Add-on
          </Text>
          <Entypo
            name="chevron-small-right"
            size={20}
            style={{marginTop: 10}}
          />
        </TouchableOpacity>

        <View>
          <TextInput placeholder="Enter referral or coupon code" />
        </View>

        <View>
          <Text
            style={{fontFamily: 'Poppins-Bold', color: 'black', marginTop: 20}}>
            Payment summary
          </Text>
          <View style={styles.ps}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: 'grey',
                fontSize: 13,
              }}>
              Quoted amount
            </Text>
            <Text>
              <FontAwesome5 name="rupee-sign" />
              1398
            </Text>
          </View>
          <View style={styles.ps}>
            <Text style={{fontFamily: 'Poppins-Medium', color: 'black'}}>
              Total amount to be paid
            </Text>
            <Text style={{fontFamily: 'Poppins-Medium', color: 'black'}}>
              <FontAwesome5 name="rupee-sign" />
              1398
            </Text>
          </View>
          <View style={styles.ps}>
            <View style={{flex: 0.8}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'black',
                }}>
                Booking amount
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: 'grey',

                  fontSize: 10,
                }}>
                An adjustable amount of Rs.500 needs to be paid for order
                confirmation
              </Text>
            </View>

            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: 'black',
                flex: 0.3,
                textAlign: 'right',
              }}>
              <FontAwesome5 name="rupee-sign" color={'black'} />
              500
            </Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          padding: 10,
          elevation: 1,
        }}
        onPress={() => refRBSheet.current.open()}>
        <View style={{flexDirection: 'row'}}>
          <MaterialCommunityIcons name="calendar-arrow-right" size={20} />
          <Text style={{color: 'black'}}>
            {''} {''} Shifting on 11 jul
          </Text>
        </View>

        <AntDesign name="edit" color={'#23527c'} size={18} />
      </TouchableOpacity>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Open Bottom Sheet"
          onPress={() => refRBSheet.current.open()}
        />
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
            container: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
          }}>
          <View style={{padding: 20}}>
            <Text style={styles.headerText}>Select the slot</Text>
            <View>
              {slots.map((slot, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.slot,
                    selectedSlot === slot && styles.selectedSlot,
                  ]}
                  onPress={() => {
                    setSelectedSlot(slot), refRBSheet.current.close();
                  }}>
                  <Text style={{color: 'black'}}>{slot}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </RBSheet>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  ps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    padding: 10,
    flex: 1,
    width: '100%',
  },
  headerText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',

    width: '100%',
  },
  iconContainer: {
    backgroundColor: 'green',
    borderRadius: 25,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 4,
  },
  dropicon: {
    backgroundColor: 'red',
    borderRadius: 25,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 4,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  subtitle: {
    color: 'gray',
  },
  dashedLineContainer: {
    alignItems: 'flex-start',
  },
  dashedLine: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'gray',
    height: 30,
    marginLeft: 14,
  },
  headerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: 'black',
  },
  slot: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: 120,
  },
  selectedSlot: {
    backgroundColor: '#d1e7fd', // Change this to your desired selected background color
    textAlign: 'center',
    color: 'black',
  },
});
