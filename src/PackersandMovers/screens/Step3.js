import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default function Step3() {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={{margin: 10}}>
        <View
          style={[
            styles.header,
            {
              borderBottomWidth: 1,
              borderBottomColor: 'lightgrey',
              paddingBottom: 5,
            },
          ]}>
          <Text style={styles.head}>Base price</Text>
          <Text style={styles.price}>
            <FontAwesome5 name="rupee-sign" /> 1520
          </Text>
        </View>

        <View style={{margin: 2, marginTop: 10}}>
          <View style={styles.flex}>
            <AntDesign
              name="checkcircle"
              color="green"
              style={{marginTop: 5}}
            />
            <Text style={styles.txt}>Friendly and professional movers</Text>
          </View>
          <View style={styles.flex}>
            <AntDesign
              name="checkcircle"
              color="green"
              style={{marginTop: 5}}
            />
            <Text style={styles.txt}>Loading and unloading included</Text>
          </View>

          {showMore && (
            <>
              <View style={styles.flex}>
                <AntDesign
                  name="checkcircle"
                  color="green"
                  style={{marginTop: 5}}
                />
                <Text style={styles.txt}>
                  Transport items safely with a dedicated vehicle
                </Text>
              </View>
              <View style={styles.flex}>
                <AntDesign
                  name="checkcircle"
                  color="green"
                  style={{marginTop: 5}}
                />
                <Text style={styles.txt}>Rearrangement of big items</Text>
              </View>
            </>
          )}

          <TouchableOpacity onPress={handleToggle}>
            <Text style={styles.more}>
              {showMore ? 'View less' : 'View more'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Text style={[styles.head, {marginTop: 20}]}>
            Recommended add ons for you
          </Text>
        </View>
        <View style={styles.rao}>
          <View>
            <Text style={styles.recomhead}>Single-layer packing </Text>
            <Text style={styles.price}>
              <FontAwesome5 name="rupee-sign" /> 1520
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: 'green'}}
              thumbColor={isEnabled ? 'white' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <View style={styles.rao}>
          <View>
            <Text style={styles.recomhead}>Multi-layer packing </Text>
            <Text style={styles.price}>
              <FontAwesome5 name="rupee-sign" /> 1520
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: 'green'}}
              thumbColor={isEnabled ? 'white' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={styles.rao}>
          <View>
            <Text style={styles.recomhead}>
              Unpacking all the packed items{' '}
            </Text>
            <Text style={styles.price}>
              <FontAwesome5 name="rupee-sign" /> 1520
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: 'green'}}
              thumbColor={isEnabled ? 'white' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={styles.rao}>
          <View>
            <Text style={styles.recomhead}>
              Dismantling and reassembly of basic
            </Text>
            <Text style={styles.price}>
              <FontAwesome5 name="rupee-sign" /> 1520
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: 'green'}}
              thumbColor={isEnabled ? 'white' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: '#127f4c',
          flexDirection: 'row',
          padding: 5,
          position: 'absolute',
          bottom: 10,
          width: '100%',
        }}>
        <Feather name="info" color={'white'} size={17} />
        <Text
          style={{
            color: 'white',
            fontSize: 12,
            marginLeft: 10,
            fontFamily: 'Poppins-Light',
          }}>
          Pay booking amount of 500 to place the order
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  head: {
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  price: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    // flex: 0.2,
  },
  rao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingBottom: 15,
  },
  recomhead: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: 'black',
    // flex: 0.8,
  },
  flex: {
    flexDirection: 'row',
    gap: 5,
  },
  txt: {
    fontFamily: 'Poppins-Regular',
  },
  more: {
    marginTop: 10,
    color: 'blue',
  },
});
