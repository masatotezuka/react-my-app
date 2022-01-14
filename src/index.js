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
    <h1>hello!</h1>
    <div>
      <h1>title</h1>
      <p>Hello!</p>
    </div>
  </div>
);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <p>Now Date is {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log("Hi, I am a ", this.name + "." + this.age);
  }
}

const parent = new Parent("taro", 24);
console.log(parent);
parent.sayName();

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.name = name;
    this.age = age;
  }
}

const child = new Child("yamada", 25);
console.log(child);

child.sayName();

const users = [
  { name: "taro", age: 23 },
  { name: "tezuka", age: 25 },
  { name: "yamada", age: 26 },
];

//子
function Welcome(props) {
  return (
    <h1>
      Hello,{props.name}, my age is {props.age} years old.
    </h1>
  );
}

//親
function App() {
  return (
    <React.Fragment>
      {users.map((user, index) => {
        return <Welcome name={user.name} age={user.age} key={index} />;
      })}
    </React.Fragment>
  );
}

ReactDOM.render(<Clock />, document.getElementById("root8"));

// ========================================
ReactDOM.render(<Game />, document.getElementById("root1"));
ReactDOM.render(element1, document.getElementById("root2"));
ReactDOM.render(element2, document.getElementById("root3"));
ReactDOM.render(<Clock />, document.getElementById("root4"));
ReactDOM.render(element3, document.getElementById("root5"));
ReactDOM.render(element4, document.getElementById("root6"));
ReactDOM.render(<App />, document.getElementById("root7"));
