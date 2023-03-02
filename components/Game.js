import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Board from './Board';
import GameStatus from './GameStatus';
import { generateNewBlock } from './business/generator';
import { getNextBlock, checkGameOver } from './business/game';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from './constants/screen';

const Game = () => {
  const [board, setBoard] = useState([]);
  const [currentBlock, setCurrentBlock] = useState(null);
  const [nextBlock, setNextBlock] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const initialBoard = Array.from({ length: 20 }, () => Array.from({ length: 10 }, () => 0));
    setBoard(initialBoard);
    setCurrentBlock(generateNewBlock());
    setNextBlock(generateNewBlock());
  }, []);

  useEffect(() => {
    if (checkGameOver(board)) {
      setGameOver(true);
    }
  }, [board]);

  const updateBoard = (newBoard) => {
    setBoard(newBoard);
  };

  const updateScore = (clearedLines) => {
    const newScore = score + (clearedLines * 10);
    setScore(newScore);
  };

  const handleNextBlock = () => {
    setCurrentBlock(nextBlock);
    setNextBlock(generateNewBlock());
  };

  rotateBlock = () => {
    const rotatedBlock = this.state.currentBlock.rotate();
    const isColliding = this.state.board.isColliding(rotatedBlock);
  
    if (!isColliding) {
      this.setState(prevState => ({
        currentBlock: rotatedBlock,
      }));
    }
  }

  const [lines, setLines] = useState(0);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    // Calcula la puntuación, líneas y nivel en función del número de líneas eliminadas
    const updateScore = () => {
      let lines = 0;
      gameBoard.forEach(row => {
        // Si la fila no tiene ningún valor de celda vacío, significa que está llena y se puede eliminar
        if (!row.includes(0)) {
          // Se elimina la fila
          gameBoard.splice(gameBoard.indexOf(row), 1);
          // Se añade una nueva fila vacía al principio del tablero
          gameBoard.unshift(new Array(boardWidth).fill(0));
          // Se incrementa el contador de líneas eliminadas
          lines++;
        }
      });
      // Se actualiza el estado de líneas y puntuación en función del número de líneas eliminadas
      setLines(prevLines => prevLines + lines);
      setScore(prevScore => prevScore + lines * 10);
      setLevel(Math.floor(lines / 10) + 1);
    }
  
    // Se llama a la función de actualización de puntuación cada vez que se actualiza el tablero de juego
    updateScore();
  
  }, [gameBoard]);
  
  

  return (
    <View style={styles.container}>
      {gameOver ? (
        <Text style={styles.gameOverText}>Game Over</Text>
      ) : (
        <>
          <Board board={board} currentBlock={currentBlock} updateBoard={updateBoard} handleNextBlock={handleNextBlock} updateScore={updateScore} />
          <View style={styles.scoreContainer}>
            <GameStatus score={score} lines={lines} level={level} />
            <Text style={styles.scoreText}>Score: {score}</Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   container: {
    flex: 1,
    flexDirection: 'row',
  },
  right: {
    marginLeft: 20,
  },
  gameOverText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
  },
  scoreContainer: {
    position: 'absolute',
    top: SCREEN_HEIGHT / 2 - 50,
    left: SCREEN_WIDTH - 100,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  scoreText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Game;
