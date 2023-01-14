import React, { useState } from "react";

function App() {
  // // useState使う場合
  // const [counter, setCounter] = useState(0);

  // // counterを+1する関数を定義する。
  // const countUp = () => {
  //   setCounter(counter + 1);
  // };

  // // counterを-1する関数を定義する。
  // const countDown = () => {
  //   setCounter(counter - 1);
  // };

  // return (
  //   <>
  //     <p>現在の数値は{counter}です。</p>
  //     <div>
  //       <button onClick={countUp}>+1</button>
  //       <button onClick={countDown}>-1</button>
  //     </div>
  //   </>
  // );

  //useState使わない場合(レンダリングのたびにcounterがリセットされる)
  const counter = 0;
  console.log(counter);

  // counterを+1する関数を定義する。
  const countUp = (counter) => {
    counter += 1;
    console.log(counter);
  };

  // counterを-1する関数を定義する。
  const countDown = (counter) => {
    counter -= 1;
    console.log(counter);
  };

  return (
    <>
      <p>現在の数値は{counter}です。</p>
      <div>
        {/* 関数を渡さないと( () => という形式　)勝手に動作する */}
        <button onClick={() => countUp(counter)}>+1</button>
        <button onClick={() => countDown(counter)}>-1</button>
      </div>
    </>
  );
}

export default App;
