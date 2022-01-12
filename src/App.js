import React from "react";

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Hello!</h1>
//         <label htmlFor="bar">bar</label>
//         <input
//           type="text"
//           onChange={() => {
//             console.log("click!");
//           }}
//         ></input>
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>Meow!</div>;
};

export default App;
