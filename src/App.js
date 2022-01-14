import React from "react";

const App = () => <Counter number={1} />;

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handlePlusButton = () => {
    this.setState({ count: this.state.count + this.props.number });
    console.log(this.state.conut);
  };
  handleMinusButton = () => {
    this.setState({ count: this.state.count - this.props.number });
  };

  render() {
    return (
      <React.Fragment>
        <div>count is {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
