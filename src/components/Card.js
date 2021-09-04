/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const Card = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/img1.jpg')}
        width={300}
        height={500}
        style={styles.image}
      />
      <View style={styles.headline}>
        <Text style={styles.cardsText}>
          <Text style={styles.bold}>GTA 6 leaks:</Text> Here are the Top 3 GTA 6
          leaks we know as of now
        </Text>
        <Button title="View More" style={styles.button} />
      </View>

      <View style={styles.row}>
        <View style={styles.eContainer}>
          <Text style={styles.emoji}>👎</Text>
        </View>
        <View
          style={[
            styles.eContainer,
            {borderLeftWidth: 1, borderRightWidth: 1},
          ]}>
          <Text style={styles.emoji}>🔖</Text>
        </View>

        <View style={styles.eContainer}>
          <Text style={styles.emoji}>👍</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 650,
    borderRadius: 20,
    borderWidth: 4,
    backgroundColor: '#FAF9F6',
    borderColor: '#758283',
  },
  cardsText: {
    fontSize: 17,
    color: '#1a1a1a',
    marginBottom: 10,
    fontFamily: 'Roboto Condensed',
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    width: 320,
    height: 400,
    borderRadius: 20,
    marginTop: 'auto',
  },
  headline: {
    width: 320,
    padding: 10,
    backgroundColor: '#FAF9F6',
    height: 130,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FAF9F6',
    width: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    marginTop: 'auto',
  },
  eContainer: {
    height: 60,
    borderTopWidth: 2,
    width: 116,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 30,
  },
  button: {
    fontSize: 20,
  },
});
