import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const numbers = [1, 2, 3, 4, 5];
const doubuledNumbers = numbers.map((number) => number * 2);
console.log(doubuledNumbers);
//単一行は{},return省略可能
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions

const listItems = numbers.map((number, index) => <li key={index}>{number}</li>);

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  console.log(listItems);
  return <ul>{listItems}</ul>;
}

const todos = ["タスク1", "タスク2", "タスク3", "タスク4"];
function TodoLists(props) {
  const todos = props.todos;
  const todoLists = todos.map((todo, index) => <li key={index}>{todo}</li>);
  console.log(todoLists);
  return <ul>{todoLists}</ul>;
}
// 要素の並び順が変更される可能性がある場合、インデックスを key として使用することはお勧めしません

ReactDOM.render(<ul>{listItems}</ul>, document.getElementById("root1"));
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root2")
);

ReactDOM.render(<TodoLists todos={todos} />, document.getElementById("root3"));
