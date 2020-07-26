import React, { useState } from "react";
import Ansver from "./Ansver.js";
function Questions({
  quest,
  ansver,
  questions,
  turnPage,
  show,
  setShow,
  setTurnPage,
  setResultObject,
}) {
  function handleNext() {
    if (collection.length === 0) {
      return;
    }
    setShow((prev) => prev + 1);
    console.log(show);
    setResultObject((prev) => [...prev, [quest, collection]]);
  }
  function handlePrev() {
    setShow((prev) => prev - 1);
    if (show === 0) {
      setTurnPage((prev) => !prev);
    }
  }
  const [collection, setCollection] = useState([]);
  console.log(collection);
  return (
    <div
      className="folder"
      style={
        turnPage && show === questions.indexOf(quest)
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <div className="question">{quest}</div>
      <div className="answers">
        {ansver.map((x) => (
          <Ansver x={x} collection={collection} setCollection={setCollection} />
        ))}
      </div>
      <div className="footer">
        <button className="button_prev" onClick={handlePrev}>
          Назад
        </button>
        <span className="info">
          {questions.indexOf(quest) + 1} \ {questions.length}
        </span>
        <button className="button_next" onClick={handleNext}>
          Далее
        </button>
      </div>
    </div>
  );
}

export default Questions;
