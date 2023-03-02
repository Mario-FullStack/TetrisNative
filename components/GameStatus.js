import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GameStatus = ({ score, lines, level }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.label}>Score:</Text>
        <Text style={styles.value}>{score}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.label}>Lines:</Text>
        <Text style={styles.value}>{lines}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.label}>Level:</Text>
        <Text style={styles.value}>{level}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20,
  },
  info: {
    marginHorizontal: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 20,
  },
});

export default GameStatus;
