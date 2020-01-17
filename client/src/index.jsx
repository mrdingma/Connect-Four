import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const createBoard = () => {
  let boardState = [];

  for (let row = 0; row <= 5; row++) {
    let subArr = [];
    for (let col = 0; col <= 6; col++) {
      subArr.push({
        color: null,
        row,
        col,
        x: row * 90,
        y: col * 90
      });
    }
    boardState.push(subArr);
  }
  return boardState;
}

ReactDOM.render(<App createBoard={createBoard} initBoard={createBoard()} />, document.getElementById('app'));