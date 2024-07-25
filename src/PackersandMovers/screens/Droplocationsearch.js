import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default function Droplocation({navigation}) {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search your locality"
        onPress={(data, details = null) => {
          if (details) {
            const {lat, lng} = details.geometry.location;
            navigation.navigate('DropLocation', {
              latitude: lat,
              longitude: lng,
            });
            console.log(`Latitude: ${lat}, Longitude: ${lng}`);
          }
        }}
        query={{
          key: 'AIzaSyBF48uqsKVyp9P2NlDX-heBJksvvT_8Cqk',
          language: 'en',
        }}
        fetchDetails={true} // Ensure details are fetched
        styles={{
          textInputContainer: {
            width: '100%',
          },
          textInput: {
            height: 40,
            color: 'back',
            fontSize: 14,
            fontFamily: 'Poppins-Light',
          },
          listView: {
            backgroundColor: 'darkgrey', // Background color for the dropdown list
          },
          description: {color: 'black', fontFamily: 'Poppins-Light'},
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
        nearbyPlacesAPI="GooglePlacesSearch" // Optional: Use the 'GooglePlacesSearch' API
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
