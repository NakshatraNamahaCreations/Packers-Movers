import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Step3 = () => {
  const [activeCategory, setActiveCategory] = useState('Living Room');
  const scrollViewRef = useRef(null);

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
            <Text>Table</Text>
            <Text>TV/Monitor</Text>
            <Text>Sofa</Text>
            <Text>Chair</Text>
            <Text>Table</Text>
            <Text>TV/Monitor</Text>
            <Text>Sofa</Text>
          </View>
        </View>

        <View ref={bedroomRef} style={styles.categorySection}>
          <Text style={styles.sectionTitle}>Bedroom</Text>
          <View style={styles.itemContainer}>
            <Text>Tables</Text>
            <Text>Table</Text>
            <Text>Mattress</Text>
            <Text>Bed frame</Text>
            <Text>Tables</Text>
            <Text>Table</Text>
            <Text>Mattress</Text>
            <Text>Bed frame</Text>
          </View>
        </View>

        <View ref={kitchenRef} style={styles.categorySection}>
          <Text style={styles.sectionTitle}>Kitchen</Text>
          <View style={styles.itemContainer}>
            <Text>Fridge</Text>
            <Text>Electrical</Text>
            <Text>Cabinet</Text>
            <Text>Fridge</Text>
            <Text>Electrical</Text>
            <Text>Cabinet</Text>
          </View>
        </View>

        <View ref={othersRef} style={styles.categorySection}>
          <Text style={styles.sectionTitle}>Others</Text>
          <View style={styles.itemContainer}>
            <Text>Gunny bag</Text>
            <Text>Vehicle</Text>
            <Text>Plant</Text>
            <Text>Gunny bag</Text>
            <Text>Vehicle</Text>
            <Text>Plant</Text>
            <Text>Gunny bag</Text>
            <Text>Vehicle</Text>
            <Text>Plant</Text>
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
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 14,

    fontFamily: 'Poppins-Medium',
    color: 'black',
    marginBottom: 10,
  },
  itemContainer: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
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
