import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BookmarkItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.cardsText}>
          <Text style={styles.bold}>GTA 6 leaks:</Text> Here are the Top 3 GTA 6
          leaks we know as of now
        </Text>
      </View>

      <TouchableOpacity>
        <Icon name="newspaper-o" size={40} />
      </TouchableOpacity>
    </View>
  );
};

export default BookmarkItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  cardsText: {
    fontSize: 17,
    color: '#1a1a1a',
    marginBottom: 10,
    fontFamily: 'Roboto Condensed',
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  textContainer: {
    flex: 2,
  },
});
