// shapeUtils.js

// Define las formas y posiciones de las piezas del juego
export const shapes = {
    I: {
      // La posición en el tablero donde aparecerá la pieza
      spawn: [0, 4],
      // La forma de la pieza, representada como una matriz de 4x4
      // donde los elementos con valor 1 representan los bloques que conforman la pieza
      shape: [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    },
    J: {
      spawn: [1, 4],
      shape: [
        [0, 0, 0],
        [2, 2, 2],
        [0, 0, 2],
      ],
    },
    L: {
      spawn: [1, 4],
      shape: [
        [0, 0, 0],
        [3, 3, 3],
        [3, 0, 0],
      ],
    },
    O: {
      spawn: [0, 4],
      shape: [
        [4, 4],
        [4, 4],
      ],
    },
    S: {
      spawn: [1, 4],
      shape: [
        [0, 0, 0],
        [0, 5, 5],
        [5, 5, 0],
      ],
    },
    T: {
      spawn: [1, 4],
      shape: [
        [0, 0, 0],
        [6, 6, 6],
        [0, 6, 0],
      ],
    },
    Z: {
      spawn: [1, 4],
      shape: [
        [0, 0, 0],
        [7, 7, 0],
        [0, 7, 7],
      ],
    },
  };
  
  // Devuelve una forma aleatoria
  export const randomShape = () => {
    const shapeNames = Object.keys(shapes);
    const randomIndex = Math.floor(Math.random() * shapeNames.length);
    const shapeName = shapeNames[randomIndex];
    return { name: shapeName, ...shapes[shapeName] };
  };
  