//Importing a Component from a Library
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    /*Props stands for “properties,” 
    to send data from one React component to another React component.*/
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white'
  }
});

export default Card;
