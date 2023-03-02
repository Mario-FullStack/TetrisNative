import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GameOver = ({ score, resetGame }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over</Text>
      <Text style={styles.subtitle}>Final Score: {score}</Text>
      <TouchableOpacity style={styles.button} onPress={resetGame}>
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#0066CC',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default GameOver;
