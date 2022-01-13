import React from "react";

const App = () => {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "hanako", age: 23 },
    { name: "yamada" },
  ];

  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      Hi, I am {props.name}, and {props.age} years old!
    </div>
  );
};

User.defaultProps = {
  age: 1,
};

export default App;

var items = [1, 2, 3, 4, 5];

//mapは配列を返す
var result = items.map(function (value) {
  return value * 2;
});

console.log(result);
