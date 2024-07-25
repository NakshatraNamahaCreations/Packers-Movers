import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';

function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clear the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Video
        source={require('../../../assets/loader.mp4')}
        style={{
          width: 150,
          height: 150,
        }}
        muted={false}
        repeat={true}
        resizeMode="contain"
        paused={false}
      />
    </View>
  );
}

export default Loader;
