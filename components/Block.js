import React from 'react';
import { View } from 'react-native';

const BLOCK_SIZE = 20;

const Block = ({ color }) => {
  const styles = {
    block: {
      width: BLOCK_SIZE,
      height: BLOCK_SIZE,
      backgroundColor: color,
      borderWidth: 1,
      borderColor: 'black',
    },
  };

  return <View style={styles.block} />;
};

export default Block;
