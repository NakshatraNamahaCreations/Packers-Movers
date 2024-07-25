import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const Booking = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);

  const labels = ['Moving details', 'Add Items', 'Add ons', 'Review'];
  const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 1,
    currentStepStrokeWidth: 2,
    stepStrokeCurrentColor: '#0e101a',
    stepStrokeWidth: 1,
    stepStrokeFinishedColor: 'green',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#0e101a',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: 'white',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#0e101a',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: '#ffffff',
    stepIndicatorLabelFinishedColor: 'black',
    stepIndicatorLabelUnFinishedColor: 'red',
    labelColor: '#999999',
    labelSize: 11,
    labelFontFamily: 'Arial',
    currentStepLabelColor: '#0e101a',
  };

  const renderStepIndicator = (stepStatus, stepPosition) => {
    if (stepStatus === 'finished') {
      return <Icon name="check" size={15} color="green" />;
    }

    let iconName = '';

    switch (stepPosition) {
      case 0:
        iconName = 'truck';
        break;
      case 1:
        iconName = 'list';
        break;
      case 2:
        iconName = 'gift';
        break;
      case 3:
        iconName = 'wpforms';
        break;
      default:
        iconName = 'circle';
        break;
    }

    return (
      <Icon
        name={iconName}
        size={15}
        color={stepStatus === 'current' ? '#ffffff' : 'grey'}
      />
    );
  };

  const renderStepContent = () => {
    switch (currentPosition) {
      case 0:
        return <Step1 navigation={navigation} />;
      case 1:
        return <Step2 navigation={navigation} />;
      case 2:
        return <Step3 navigation={navigation} />;
      case 3:
        return <Step4 navigation={navigation} />; // Placeholder for review step
      default:
        return <Text>Invalid Step</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
        stepCount={4}
        renderStepIndicator={params =>
          renderStepIndicator(params.stepStatus, params.position)
        }
      />
      <View style={styles.stepContainer}>{renderStepContent()}</View>

      <View style={styles.buttonContainer}>
        {currentPosition === 0 && (
          <TouchableOpacity
            onPress={() => setCurrentPosition(currentPosition + 1)}
            style={styles.fullWidthButton}>
            <Text style={styles.buttonText}>CONFIRM</Text>
          </TouchableOpacity>
        )}

        {currentPosition === 2 && (
          <TouchableOpacity
            onPress={() => setCurrentPosition(currentPosition - 1)}
            style={styles.button1}>
            <Text style={{color: 'black'}}>
              <FontAwesome5 name="rupee-sign" /> 1520
            </Text>

            <Text style={{color: 'grey'}}>4 items added</Text>
          </TouchableOpacity>
        )}

        {currentPosition === 1 && (
          <TouchableOpacity
            onPress={() => setCurrentPosition(currentPosition - 1)}
            style={styles.button1}>
            <Text style={{color: 'black'}}>4 items added</Text>
          </TouchableOpacity>
        )}

        {currentPosition < labels.length - 1 && currentPosition !== 0 && (
          <TouchableOpacity
            onPress={() => setCurrentPosition(currentPosition + 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}

        {currentPosition === labels.length - 1 && (
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.button}>
            <Text style={styles.buttonText}>
              Proceed to Pay |{' '}
              <FontAwesome5 name="rupee-sign" color={'white'} /> 500
            </Text>
          </TouchableOpacity>
        )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Successfully ordered</Text>

              <Image
                source={require('../../../assets/tsucuss.gif')}
                style={{width: 250, height: 250}}
              />
              <Pressable
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('Bottomtab');
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
  },
  stepContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#23527c',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    height: 40,
    marginHorizontal: 1, // To add space between buttons
  },
  button1: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5, // To add space between buttons
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },

  fullWidthButton: {
    backgroundColor: '#4BB543',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    marginHorizontal: 5, // To add space between buttons
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'grey',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#eee3',
    padding: 7,
    borderRadius: 10,
    width: 100,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'green',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});

export default Booking;
