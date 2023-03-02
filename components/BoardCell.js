import React from 'react';
import { View } from 'react-native';
import Block from './Block';

const BoardCell = ({ color }) => {
  return (
    <View style={styles.cell}>
      {color && <Block color={color} />}
    </View>
  );
};

const styles = {
  cell: {
    flex: 1,
    margin: 1,
    borderWidth: 1,
    borderColor: 'black',
  },
};

export default BoardCell;
