import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {bedRoom, kitchen, livingRoom, others} from '../global-data';

const Step3 = () => {
  const [activeCategory, setActiveCategory] = useState('Living Room');
  const scrollViewRef = useRef(null);
  const [activeLivItem, setActiveLivItem] = useState(null);
  const [activeBathroomItem, setActiveBathroomItem] = useState(null);
  const [activeKitchenItem, setActiveKitchenItem] = useState(null);
  const [activeOthersItem, setActiveOthersItem] = useState(null);
  const showLivingItem = item => {
    setActiveLivItem(prevActiveItem =>
      prevActiveItem === item.id ? null : item.id,
    );
  };
  const showBedroomItem = item => {
    setActiveBathroomItem(prevActiveItem =>
      prevActiveItem === item.id ? null : item.id,
    );
  };
  const showKitchenItem = item => {
    setActiveKitchenItem(prevActiveItem =>
      prevActiveItem === item.id ? null : item.id,
    );
  };
  const showOthersItem = item => {
    setActiveOthersItem(prevActiveItem =>
      prevActiveItem === item.id ? null : item.id,
    );
  };
  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  const scrollToCategory = categoryRef => {
    if (categoryRef.current) {
      categoryRef.current.measureLayout(scrollViewRef.current, (x, y) => {
        scrollViewRef.current.scrollTo({y, animated: true});
      });
    }
  };

  const handleCategoryPress = (category, categoryRef) => {
    setActiveCategory(category);
    scrollToCategory(categoryRef);
  };

  const livingRoomRef = useRef(null);
  const bedroomRef = useRef(null);
  const kitchenRef = useRef(null);
  const othersRef = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() => handleCategoryPress('Living Room', livingRoomRef)}
          style={[
            styles.categoryButton,
            {
              backgroundColor:
                activeCategory === 'Living Room' ? '#0f337b' : 'transparent',
            },
          ]}>
          <Text
            style={[
              styles.categoryText,
              {color: activeCategory === 'Living Room' ? 'white' : 'black'},
            ]}>
            Living Room
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCategoryPress('Bedroom', bedroomRef)}
          style={[
            styles.categoryButton,
            {
              backgroundColor:
                activeCategory === 'Bedroom' ? '#0f337b' : 'transparent',
            },
          ]}>
          <Text
            style={[
              styles.categoryText,
              {color: activeCategory === 'Bedroom' ? 'white' : 'black'},
            ]}>
            Bedroom
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCategoryPress('Kitchen', kitchenRef)}
          style={[
            styles.categoryButton,
            {
              backgroundColor:
                activeCategory === 'Kitchen' ? '#0f337b' : 'transparent',
            },
          ]}>
          <Text
            style={[
              styles.categoryText,
              {color: activeCategory === 'Kitchen' ? 'white' : 'black'},
            ]}>
            Kitchen
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCategoryPress('Others', othersRef)}
          style={[
            styles.categoryButton,
            {
              backgroundColor:
                activeCategory === 'Others' ? '#0f337b' : 'transparent',
            },
          ]}>
          <Text
            style={[
              styles.categoryText,
              {color: activeCategory === 'Others' ? 'white' : 'black'},
            ]}>
            Others
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={24} color="grey" style={styles.icon} />
        <TextInput
          placeholder="Search..."
          style={styles.input}
          placeholderTextColor="#888"
        />
      </View>

      {renderLabel()}

      <ScrollView ref={scrollViewRef}>
        <View ref={livingRoomRef} style={styles.categorySection}>
          <Text style={styles.sectionTitle}>Living Room</Text>
          <View style={styles.itemContainer}>
            {/* <Dropdown
              style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select item' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <AntDesign
                  style={styles.icon}
                  color={isFocus ? 'blue' : 'black'}
                  name="Safety"
                  size={20}
                />
              )}
            /> */}
            {livingRoom.map((liv, livIndex) => (
              <View key={livIndex}>
                <TouchableOpacity
                  style={styles.subTextView}
                  onPress={() => showLivingItem(liv)}>
                  <Text
                    style={[
                      styles.subText,
                      {color: activeLivItem === liv.id ? '#ff8c00' : '#353535'},
                    ]}>
                    {liv.name}{' '}
                  </Text>
                  <Ionicons
                    name="chevron-down"
                    size={14}
                    style={{
                      color: activeLivItem === liv.id ? '#ff8c00' : '#353535',
                    }}
                  />
                </TouchableOpacity>
                {activeLivItem === liv.id && (
                  <>
                    {liv.itemList?.map((il, index) => (
                      <View
                        key={index}
                        style={{
                          backgroundColor: '#f9f9f9',
                          borderTopColor: '#ebebeb',
                          borderTopWidth: 1,
                        }}>
                        <View style={styles.subTextView}>
                          <View>
                            <Text style={styles.subText}>{il.itemName} </Text>
                          </View>
                          <TouchableOpacity
                            // onPress={()=>handleAddToCar()}
                            style={{
                              borderWidth: 1,
                              borderColor: '#ababab',
                              padding: 5,
                              borderRadius: 3,
                            }}>
                            <AntDesign name="plus" size={12} color="#ff8c00" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    ))}
                  </>
                )}
                <View style={styles.subTextBorder}></View>
              </View>
            ))}
          </View>
        </View>

        <View ref={bedroomRef} style={styles.categorySection}>
          <Text style={styles.sectionTitle}>Bedroom</Text>
          <View style={styles.itemContainer}>
            {bedRoom.map((bed, bedIndex) => (
              <View key={bedIndex}>
                <TouchableOpacity
                  style={styles.subTextView}
                  onPress={() => showBedroomItem(bed)}>
                  <Text
                    style={[
                      styles.subText,
                      {
                        color:
                          activeBathroomItem === bed.id ? '#ff8c00' : '#353535',
                      },
                    ]}>
                    {bed.name}{' '}
                  </Text>
                  <Ionicons
                    name="chevron-down"
                    size={14}
                    style={{
                      color:
                        activeBathroomItem === bed.id ? '#ff8c00' : '#353535',
                    }}
                  />
                </TouchableOpacity>
                {activeBathroomItem === bed.id && (
                  <>
                    {bed.itemList?.map((bd, index) => (
                      <View
                        key={index}
                        style={{
                          backgroundColor: '#f9f9f9',
                          borderTopColor: '#ebebeb',
                          borderTopWidth: 1,
                        }}>
                        <View style={styles.subTextView}>
                          <View>
                            <Text style={styles.subText}>{bd.itemName} </Text>
                          </View>
                          <TouchableOpacity
                            style={{
                              borderWidth: 1,
                              borderColor: '#ababab',
                              padding: 5,
                              borderRadius: 3,
                            }}>
                            <AntDesign name="plus" size={12} color="#ff8c00" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    ))}
                  </>
                )}
                <View style={styles.subTextBorder}></View>
              </View>
            ))}
          </View>
        </View>

        <View ref={kitchenRef} style={styles.categorySection}>
          <Text style={styles.sectionTitle}>Kitchen</Text>
          <View style={styles.itemContainer}>
            {kitchen.map((kitchen, kitchenIndex) => (
              <View key={kitchenIndex}>
                <TouchableOpacity
                  style={styles.subTextView}
                  onPress={() => showKitchenItem(kitchen)}>
                  <Text
                    style={[
                      styles.subText,
                      {
                        color:
                          activeKitchenItem === kitchen.id
                            ? '#ff8c00'
                            : '#353535',
                      },
                    ]}>
                    {kitchen.name}{' '}
                  </Text>
                  <Ionicons
                    name="chevron-down"
                    size={14}
                    style={{
                      color:
                        activeKitchenItem === kitchen.id
                          ? '#ff8c00'
                          : '#353535',
                    }}
                  />
                </TouchableOpacity>
                {activeKitchenItem === kitchen.id && (
                  <>
                    {kitchen.itemList?.map((kt, index) => (
                      <View
                        key={index}
                        style={{
                          backgroundColor: '#f9f9f9',
                          borderTopColor: '#ebebeb',
                          borderTopWidth: 1,
                        }}>
                        <View style={styles.subTextView}>
                          <View>
                            <Text style={styles.subText}>{kt.itemName} </Text>
                          </View>
                          <TouchableOpacity
                            style={{
                              borderWidth: 1,
                              borderColor: '#ababab',
                              padding: 5,
                              borderRadius: 3,
                            }}>
                            <AntDesign name="plus" size={12} color="#ff8c00" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    ))}
                  </>
                )}
                <View style={styles.subTextBorder}></View>
              </View>
            ))}
          </View>
        </View>

        <View ref={othersRef} style={styles.categorySection}>
          <Text style={styles.sectionTitle}>Others</Text>
          <View style={styles.itemContainer}>
            {others.map((other, otherIndex) => (
              <View key={otherIndex}>
                <TouchableOpacity
                  style={styles.subTextView}
                  onPress={() => showOthersItem(other)}>
                  <Text
                    style={[
                      styles.subText,
                      {
                        color:
                          activeOthersItem === other.id ? '#ff8c00' : '#353535',
                      },
                    ]}>
                    {other.name}{' '}
                  </Text>
                  <Ionicons
                    name="chevron-down"
                    size={14}
                    style={{
                      color:
                        activeOthersItem === other.id ? '#ff8c00' : '#353535',
                    }}
                  />
                </TouchableOpacity>
                {activeOthersItem === other.id && (
                  <>
                    {other.itemList?.map((oth, index) => (
                      <View
                        key={index}
                        style={{
                          backgroundColor: '#f9f9f9',
                          borderTopColor: '#ebebeb',
                          borderTopWidth: 1,
                        }}>
                        <View style={styles.subTextView}>
                          <View>
                            <Text style={styles.subText}>{oth.itemName} </Text>
                          </View>
                          <TouchableOpacity
                            style={{
                              borderWidth: 1,
                              borderColor: '#ababab',
                              padding: 5,
                              borderRadius: 3,
                            }}>
                            <AntDesign name="plus" size={12} color="#ff8c00" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    ))}
                  </>
                )}
                <View style={styles.subTextBorder}></View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    width: '90%',
  },
  categoryButton: {
    padding: 5,
    borderRadius: 5,
  },
  categoryText: {
    fontSize: 11,
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
  categorySection: {
    // paddingVertical: 20,
    // paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ebebeb',
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 14,
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 1,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    padding: 10,
    // marginBottom: 10,
  },
  subTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  subText: {
    // borderBottomColor: '#d9d9d9',
    // borderBottomWidth: 1,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  subTextBorder: {
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 1,
  },
  itemContainer: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    // marginHorizontal: 10,
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    fontSize: 16,
    color: '#333',
  },
});

export default Step3;
