import React, { Component } from 'react';
import SquareList from './SquareList.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardState: this.props.initBoard,
      color: 'yellow'
    };

    this.togglePiece = this.togglePiece.bind(this);
    this.toggleColor = this.toggleColor.bind(this);
  }

  winCheck() {
    const boardColor = this.state.boardState.map((row) => row.map((square) => square.color));
    for (let row = 0; row < boardColor.length; row++) {
      for (let col = 0; col < boardColor[0].length; col++) {
        if (col < 4) {
          if (boardColor[row][col] !== null
            && boardColor[row][col] === boardColor[row][col + 1]
            && boardColor[row][col + 1] === boardColor[row][col + 2]
            && boardColor[row][col + 2] === boardColor[row][col + 3]) {
            return boardColor[row][col];
          }
        }
        if (row < 3) {
          if (boardColor[row][col] !== null
            && boardColor[row][col] === boardColor[row + 1][col]
            && boardColor[row + 1][col] === boardColor[row + 2][col]
            && boardColor[row + 2][col] === boardColor[row + 3][col]) {
            return boardColor[row][col];
          }
        }
        if (row < 3 && col < 4) {
          if (boardColor[row][col] !== null
            && boardColor[row][col] === boardColor[row + 1][col + 1]
            && boardColor[row + 1][col + 1] === boardColor[row + 2][col + 2]
            && boardColor[row + 2][col + 2] === boardColor[row + 3][col + 3]) {
            return boardColor[row][col];
          }
        }
        if (row > 2 && col < 4) {
          if (boardColor[row][col] !== null
            && boardColor[row][col] === boardColor[row - 1][col - 1]
            && boardColor[row - 1][col - 1] === boardColor[row - 2][col - 2]
            && boardColor[row - 2][col - 2] === boardColor[row - 3][col - 3]) {
            return boardColor[row][col];
          }
        }
      }
    }

    return false;
  }

  toggleColor() {
    this.setState({ color: this.state.color === 'yellow' ? 'red' : 'yellow' });
  }

  togglePiece(row, col) {
    const currentSquare = this.state.boardState[row][col];
    // if color of current square is null
    if (currentSquare.color === null) {
      // change color to current color
      currentSquare.color = this.state.color;
      this.state.boardState[row][col] = currentSquare;
      this.toggleColor();
      if (this.winCheck()) {
        alert(`${this.winCheck()} won!`);
        this.setState({ boardState: this.props.createBoard() });
      }
      // board Full?
    } else {
      alert('Not a valid move')
    }
  }

  render() {
    return (
      <div>
        <div>Connect Four</div>
        <div className="gameboard">
          <SquareList boardState={this.state.boardState} togglePiece={this.togglePiece} />
        </div>
      </div>
    );
  }
}

export default App;