import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BLOCK_SIZE } from '../constants';

const NextBlock = ({ type }) => {
  const block = BLOCKS[type];
  const cells = block.rotations[0];
  const rows = cells.length;
  const cols = cells[0].length;

  const cellViews = cells.map((row, rowIndex) => {
    return row.map((cell, colIndex) => {
      if (cell === 1) {
        const key = `${rowIndex}-${colIndex}`;
        const style = {
          backgroundColor: block.color,
          left: colIndex * BLOCK_SIZE,
          top: rowIndex * BLOCK_SIZE,
        };
        return <View style={[styles.cell, style]} key={key} />;
      }
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Next:</Text>
      <View style={[styles.block, { width: cols * BLOCK_SIZE, height: rows * BLOCK_SIZE }]}>
        {cellViews}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  block: {
    position: 'relative',
    borderWidth: 1,
    borderColor: 'black',
  },
  cell: {
    position: 'absolute',
    width: BLOCK_SIZE,
    height: BLOCK_SIZE,
  },
});

export default NextBlock;
