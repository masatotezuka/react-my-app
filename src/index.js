import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: "X" })}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = "Next player: X";

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

const name = "taro";
const user = {
  firstName: "masato",
  lastName: "tezuka",
};

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function getName(name) {
  if (name) {
    return <h1>hello, {name}</h1>;
  } else {
    return <h1>No, name</h1>;
  }
}

// const element = <h1>hello, {name}</h1>;
const element1 = <h1>hello, {formatName(user)}</h1>;
const element2 = getName(name);
const element3 = <img src="../public/logo512.png" alt="no" />;
const element4 = (
  <div>
    <h1>title</h1>
    <p>Hello!</p>
  </div>
);

function changeTime() {
  const element = (
    <div>
      <h1>hello</h1>
      <p>Now Date is {new Date().toLocaleTimeString()}</p>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root4"));
}

const users = [
  { name: "taro", age: 23 },
  { name: "tezuka", age: 25 },
  { name: "yamada", age: 26 },
];

function Welcome(props) {
  // for (let i = 0; i <= users.length - 1; i++) {
  return (
    <h1>
      Hello,{props.name}, my age is {props.age}
    </h1>
  );
}
// }

function App() {
  return (
    <React.Fragment>
      <Welcome name="taro" age="24" />
      <Welcome name="masako" age="23" />
      <Welcome name="takamitsu" age="21" />
    </React.Fragment>
  );
}

setInterval(changeTime, 1000);
// ========================================
ReactDOM.render(<Game />, document.getElementById("root1"));
ReactDOM.render(element1, document.getElementById("root2"));
ReactDOM.render(element2, document.getElementById("root3"));
ReactDOM.render(element3, document.getElementById("root5"));
ReactDOM.render(element4, document.getElementById("root6"));
ReactDOM.render(<App />, document.getElementById("root7"));
