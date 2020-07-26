import React, { useState } from "react";
function Circle({ radius }) {
  return (
    <div
      style={{
        width: radius * 2,
        height: radius * 2,
        borderRadius: "50%",
        background: "red",
      }}
    ></div>
  );
}
function Rectangle({ width, height }) {
  return (
    <div
      style={{
        width: width,
        height: height,
        background: "green",
      }}
    ></div>
  );
}
function Foldable(Component) {
  function Wrapper(props) {
    const [show, setShow] = useState(false);
    function handleClick() {
      setShow((prev) => !prev);
    }
    return (
      <div>
        <button onClick={handleClick}>{!show ? "Показать" : "Скрыть"}</button>
        {show && <Component {...props} />}
      </div>
    );
  }
  return Wrapper;
}
const CircleFoldable = Foldable(Circle);
const RactangleFoldable = Foldable(Rectangle);
export function App() {
  return (
    <div>
      <CircleFoldable radius={120} />
      <RactangleFoldable height={250} width={350} />
    </div>
  );
}
