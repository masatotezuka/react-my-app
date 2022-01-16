import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const todos = [
  { id: 1, todoName: "タスク1", date: "2021-01-16" },
  { id: 2, todoName: "タスク2", date: "2021-01-15" },
  { id: 3, todoName: "タスク3", date: "2021-01-13" },
];

function ListItems(props) {
  const todo = props.todo;
  return (
    <li>
      {todo.id}: {todo.todoName} 期限 {todo.date}
    </li>
  );
}

function TodoLists(props) {
  const todos = props.todos;
  const todoLists = todos.map((todo) => (
    <ListItems todo={todo} key={todo.id} />
  ));
  return <ul>{todoLists}</ul>;
}

ReactDOM.render(<TodoLists todos={todos} />, document.getElementById("root1"));
