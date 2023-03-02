import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Cell = ({ row, col, size, value, updateBoard }) => {
  const handlePress = () => {
    updateBoard(row, col);
  };

  const styles = StyleSheet.create({
    cell: {
      width: size,
      height: size,
      backgroundColor: value || '#f2f2f2',
      borderWidth: 1,
      borderColor: '#ddd',
    },
  });

  return (
    <TouchableOpacity style={styles.cell} onPress={handlePress} />
  );
};

export default Cell;
