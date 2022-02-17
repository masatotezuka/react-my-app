import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useState, useMemo } from "react";

const square = (params) => {
  const testData = [...Array(1000).keys()];
  console.log(testData);
  testData.forEach(() => {
    console.log(`計算結果Bを処理中。${testData.length}回ループ`);
  });
  return params * params;
};

const Counter = () => {
  const [countSateA, setCountA] = useState(0);
  const [countSateB, setCountB] = useState(0);

  const countResultA = () => {
    setCountA((preNumber) => preNumber + 1);
    console.log("計算結果Aを実行");
  };
  const countResultB = () => {
    setCountB((preNumber) => preNumber + 1);
    console.log("計算結果Bを実行");
  };
  // const squareArea = useMemo(() => square(countSateB), [countSateB]);

  const squareArea = square(countSateB);
  return (
    <>
      <p>計算結果A：　{countSateA} </p>
      <button onClick={countResultA}>計算：A＋１</button>
      <p>計算結果B：　{countSateB} </p>
      <button onClick={countResultB}>計算：B＋１</button>
      <p>正方形の面積</p>
      <p>計算結果B×計算結果B ={squareArea}</p>
    </>
  );
};

ReactDOM.render(<Counter />, document.getElementById("root1"));
