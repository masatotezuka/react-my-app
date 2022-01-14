import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const sayHello = () => {
  console.log("hello");
};

const handleSubmit = function (e) {
  e.preventDefault();
  console.log("You clicked submit.");
};

function Form() {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">submit</button>
      </form>
      <button onClick={sayHello}>Button</button>
    </div>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

function test() {
  console.log(this);
}
var obj = {};
obj.test = test;

obj.test();

const foo = {
  name: "FOO object",
  age: "ddd",
  dump() {
    console.log(this);
  },
};

foo.dump();
// ========================================

ReactDOM.render(<Form />, document.getElementById("root2"));
ReactDOM.render(<Toggle />, document.getElementById("root3"));
