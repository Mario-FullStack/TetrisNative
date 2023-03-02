import { useState, useEffect, useCallback } from 'react';
import { useWindowDimensions } from 'react-native';

import { LINES_PER_LEVEL, SCORES } from '../constants';

const useGame = (callback) => {
  const [board, setBoard] = useState([]);
  const [currentBlock, setCurrentBlock] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [lines, setLines] = useState(0);

  const { height } = useWindowDimensions();
  const gameHeight = height - 200;

  const resetGame = useCallback(() => {
    setBoard(Array.from({ length: 20 }, () => Array(10).fill(0)));
    setCurrentBlock(null);
    setScore(0);
    setLevel(0);
    setLines(0);
  }, []);

  const updateScore = useCallback(
    (clearedLines) => {
      if (clearedLines > 0) {
        setScore((prevScore) => prevScore + SCORES[clearedLines] * (level + 1));
        setLines((prevLines) => prevLines + clearedLines);

        if ((prevLines + clearedLines) >= LINES_PER_LEVEL * (level + 1)) {
          setLevel((prevLevel) => prevLevel + 1);
        }
      }
    },
    [level]
  );

  const moveBlock = useCallback(
    (dirX, dirY, newBlock = null) => {
      if (!currentBlock) return false;

      const { x: currentX, y: currentY, blocks } = currentBlock;

      const newX = currentX + dirX;
      const newY = currentY + dirY;

      if (newX < 0 || newX >= 10 || newY < 0 || newY >= 20) return false;

      for (let y = 0; y < blocks.length; y++) {
        for (let x = 0; x < blocks[y].length; x++) {
          if (blocks[y][x] && board[y + currentY][x + currentX]) {
            return false;
          }
        }
      }

      if (newBlock) {
        setCurrentBlock(newBlock);
      } else {
        setCurrentBlock({ ...currentBlock, x: newX, y: newY });
      }

      return true;
    },
    [board, currentBlock]
  );

  const rotateBlock = useCallback(() => {
    if (!currentBlock) return false;
  
    const { blocks } = currentBlock;
  
    const newBlocks = blocks.map((row, y) =>
      row.map((_, x) => blocks[blocks.length - 1 - x][y])
    );
  
    const { x: currentX, y: currentY } = currentBlock;
  
    if (currentX + newBlocks[0].length > 10 || currentY + newBlocks.length > 20) return false;
  
    for (let y = 0; y < newBlocks.length; y++) {
      for (let x = 0; x < newBlocks[y].length; x++) {
        if (newBlocks[y][x] && board[y + currentY][x + currentX]) {
          return false;
        }
      }
    }
  
    setCurrentBlock({ ...currentBlock, blocks: newBlocks });
  
    return true;
  }, [board, currentBlock]);
  
  const dropBlock = useCallback(() => {
    if (!moveBlock(0, 1)) {
      setBoard((prevBoard) => {
        const newBoard = prevBoard.map((row) => [...row]);
        const { blocks, x: currentX, y: currentY } = currentBlock;
  
        for (let y = 0; y < blocks.length; y++) {
          for (let x = 0; x < blocks[y].length; x++) {
            if (blocks[y][x]) {
              newBoard[y + currentY][x + currentX] = blocks[y][x];
            }
          }
        }
  
        const clearedLines = newBoard.reduce((acc, row) => {
          if (row.every((cell) => cell !== 0)) {
            return acc + 1;
          }
          return acc;
        }, 0);
  
        updateScore(clearedLines);
  
        for (let i = newBoard.length - 1; i >= 0; i--) {
          if (newBoard[i].every((cell) => cell !== 0)) {
            newBoard.splice(i, 1);
          }
        }
  
        const emptyRow = Array(10).fill(0);
        for (let i = 0; i < clearedLines; i++) {
          newBoard.unshift(emptyRow);
        }
  
        return newBoard;
      });
      setCurrentBlock(null);
    }
  }, [board, currentBlock, level, lines, updateBoard, updateScore]);
  
  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(() => {
        dropBlock();
      }, 1000 / (level + 1));
  
      return () => clearInterval(intervalId);
    }
  }, [isPlaying, dropBlock, level]);
  
  return { board, currentBlock, isPlaying, resetGame, setPlaying, score, level, lines, moveBlock, rotateBlock };
}  
 export default useGame;