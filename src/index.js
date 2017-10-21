import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Square Component
class Square extends React.Component {
//Add a constructor tot he class to initialize the state:
constructor(props){
  super(props);
  this.state = {
    value: "",
  };
}

  render() {
    return (
      //Create a button with the value of this.renderSquare(n)
      //if you press on the square you get an alert
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}


//Board
class Board extends React.Component {

  //Here i'm rendering the Square on the board.
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Siguiente jugador: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

//Game is the main class
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

//Render all the content in the id root !
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
