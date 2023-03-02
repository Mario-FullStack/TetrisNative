import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

const ScoreBoard = ({ score, lines }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Score:</Text>
        <Text style={styles.value}>{score}</Text>
      </View>
      <View>
        <Text style={styles.label}>Lines:</Text>
        <Text style={styles.value}>{lines}</Text>
      </View>
    </View>
  );
};

export default ScoreBoard;
