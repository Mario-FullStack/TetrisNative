import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import './Piece.css';

const Piece = ({ type, color, width, height, position }) => {
  const style = {
    width: width,
    height: height,
    top: position.y * height,
    left: position.x * width,
    backgroundColor: color,
  };

  const classes = ['Piece'];
  if (type === 0) classes.push('square');
  if (type === 1) classes.push('line');
  if (type === 2) classes.push('t-shape');
  if (type === 3) classes.push('l-shape');
  if (type === 4) classes.push('reverse-l-shape');
  if (type === 5) classes.push('s-shape');
  if (type === 6) classes.push('reverse-s-shape');

  return (
    <View style={[style, { position: 'absolute' }]}>
      <View style={classes.join(' ')} />
    </View>
  );
};

Piece.propTypes = {
  type: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  position: PropTypes.object.isRequired,
};

export default Piece;
