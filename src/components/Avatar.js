import React from 'react';
import {StyleSheet, View} from 'react-native';

import SvgUri from 'react-native-svg-uri';
const Avatar = () => {
  return (
    <View style={styles.aContainer}>
      <SvgUri
        width="200"
        height="200"
        source={{
          uri: 'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg',
        }}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  aContainer: {
    marginRight: 15,
    // backgroundColor: 'orange',
    borderRadius: 40,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
