import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useState } from "react";

const Button = React.memo(({ value, countState, state }) => {
  console.log(`${value}が押されました`);
  return (
    <>
      <p>
        {value}:{state}
      </p>
      <button onClick={countState}> {value}</button>
    </>
  );
});

// const Button = ({ value, countState, state }) => {
//   console.log(`${value}が押されました`);
//   return (
//     <>
//       <p>
//         {value}:{state}
//       </p>
//       <button onClick={countState}> {value}</button>
//     </>
//   );
// };

const Counter = () => {
  const [countStateA, setCountA] = useState(0);
  const [countStateB, setCountB] = useState(0);

  // const countResultA = useCallback(() => {
  //   setCountA(countStateA + 1);
  //   console.log("計算結果Aを実行");
  // }, [countStateA]);

  // const countResultB = useCallback(() => {
  //   setCountB(countStateB + 1);
  //   console.log("計算結果Bを実行");
  // }, [countStateB]);

  const countResultA = () => {
    setCountA(countStateA + 1);
    console.log("計算結果Aを実行");
  };

  const countResultB = () => {
    setCountB(countStateB + 1);
    console.log("計算結果Bを実行");
  };

  return (
    <>
      <Button
        countState={countResultA}
        value="Aボタン"
        state={countStateA}
      ></Button>
      <Button
        countState={countResultB}
        value="Bボタン"
        state={countStateB}
      ></Button>
    </>
  );
};

ReactDOM.render(<Counter />, document.getElementById("root1"));
