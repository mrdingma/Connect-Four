import React from 'react';
import SquareEntry from './SquareEntry.jsx';


const SquareList = ({ boardState, togglePiece }) => (
  <div>
    {
      boardState.map((row) => row.map((boardSquare) => <SquareEntry key={`${boardSquare.row}${boardSquare.col}`} togglePiece={togglePiece} squareInfo={boardSquare} />))
    }
  </div>
)


export default SquareList;