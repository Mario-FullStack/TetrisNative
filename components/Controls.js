import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Controls = ({ onStart, onPause, onResume }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onStart}>
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPause}>
        <Text style={styles.text}>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onResume}>
        <Text style={styles.text}>Resume</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#2ecc71',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Controls;
