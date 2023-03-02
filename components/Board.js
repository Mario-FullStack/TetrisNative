import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import BoardCell from './BoardCell';

const Board = ({ board, block }) => {

  const styles = StyleSheet.create({
    board: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#111',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
    },
  });

  const boardCells = board.map((row, rowIndex) => (
    <View style={styles.row} key={rowIndex}>
      {row.map((cell, cellIndex) => (
        <BoardCell key={cellIndex} filled={cell !== 0 && cell} />
      ))}
    </View>
  ));

  return (
    <TouchableWithoutFeedback onPress={() => console.log('tap')}>
      <View style={styles.board}>
        {boardCells}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Board;
