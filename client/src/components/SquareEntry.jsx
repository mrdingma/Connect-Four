import React from 'react';


const SquareEntry = ({ togglePiece, squareInfo }) => (
  <div className="gamepiece" style={{ top: squareInfo.x, left: squareInfo.y }}>
    <div className={squareInfo.color} onClick={() => togglePiece(squareInfo.row, squareInfo.col)}></div>
  </div>
);

export default SquareEntry;