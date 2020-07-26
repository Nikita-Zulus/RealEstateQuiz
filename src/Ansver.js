import React, { useState } from "react";

function Ansver({ x, setCollection }) {
  const [selection, setSelection] = useState(false);
  function handleSelect(e) {
    setSelection((prev) => !prev);
    //console.log(e.target.value);
    let z = [e.target.value];
    if (!selection) {
      setCollection((prev) => prev.concat(z));
    }
    if (selection) {
      setCollection((prev) => {
        prev.splice(prev.indexOf(z[0]), 1);
        return prev;
      });
    }
  }
  return (
    <label
      className="answer"
      style={
        !selection
          ? { color: "#595959", backgroundColor: "#e5e5e5" }
          : { background: "#ff7f32", color: "#fff" }
      }
    >
      {x}
      <input type="text" className="ans" value={x} onClick={handleSelect} />
    </label>
  );
}

export default Ansver;
