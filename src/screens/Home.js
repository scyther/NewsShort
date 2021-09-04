import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SwipeCards from 'react-native-swipe-cards-deck';

import CardsEnd from '../components/CardsEnd';
import Card from '../components/Card';

const Home = () => {
  const [feed, setFeed] = useState([
    {text: 'Tomato', backgroundColor: 'red'},
    {text: 'Aubergine', backgroundColor: 'purple'},
    {text: 'Courgette', backgroundColor: 'green'},
    {text: 'Blueberry', backgroundColor: 'blue'},
    {text: 'Umm...', backgroundColor: 'cyan'},
    {text: 'orange', backgroundColor: 'orange'},
  ]);

  const handleYes = card => {
    console.log(`Yup for ${card.text}`);
    return true;
  };

  const handleNo = card => {
    console.log(`No for ${card.text}`);
    return true;
  };

  return (
    <View style={styles.container}>
      {feed ? (
        <SwipeCards
          cards={feed}
          renderCard={cardData => <Card data={cardData} />}
          keyExtractor={cardData => String(cardData.text)}
          renderNoMoreCards={() => <CardsEnd text="No more Cards...." />}
          actions={{
            yup: {
              show: true,
              text: '👍',
              color: 'green',
              onAction: handleYes,
              containerStyle: styles.thumbsUp,
              textStyle: styles.emoji,
            },
            nope: {
              show: true,
              text: '👎',
              color: 'red',
              onAction: handleNo,
              containerStyle: styles.thumbDown,
              textStyle: styles.emoji,
            },
          }}
        />
      ) : (
        <CardsEnd text="Loading....." />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#242B2E',
    borderWidth: 3,
  },
  thumbsUp: {
    position: 'absolute',
    left: 200,
    borderWidth: 0,
  },
  thumbDown: {
    position: 'absolute',
    right: 100,
    borderWidth: 0,
  },
  bookmark: {
    position: 'absolute',
  },
  emoji: {
    fontSize: 100,
  },
});
