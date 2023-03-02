import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useGame } from '../hooks/useGame';
import { colors, styles } from '../styles';

export const GameOverModal = ({ visible, restartGame }) => {
  const { score, lines, level } = useGame();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={localStyles.centeredView}>
        <View style={localStyles.modalView}>
          <Text style={localStyles.modalText}>Game Over!</Text>
          <Text style={[styles.text, localStyles.scoreText]}>Score: {score}</Text>
          <Text style={[styles.text, localStyles.scoreText]}>Lines: {lines}</Text>
          <Text style={[styles.text, localStyles.scoreText]}>Level: {level}</Text>
          <TouchableOpacity style={localStyles.button} onPress={restartGame}>
            <Text style={[styles.text, localStyles.buttonText]}>Restart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const localStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.modalBackground,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.modalForeground,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  scoreText: {
    marginVertical: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: colors.buttonBackground,
    marginTop: 10,
  },
  buttonText: {
    color: colors.buttonText,
    textAlign: 'center',
  },
});
