import React, { useState, useEffect } from "react";
import Questions from "./Questions.js";
import Waiting from "./Waiting.js";
function App() {
  const [show, setShow] = useState(null);
  const [waited, setWaited] = useState(false);
  const [resultObject, setResultObject] = useState([]);
  console.log(resultObject);
  const arr = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];
  const ansver1 = [
    "Хочу с аренды переехать в свою",
    "Хочу еще одну квартиру",
    "Хочу больше комнат",
    "Для детей или родителей",
    "Переезжаю из другого города",
    "Для сдачи в аренду или перепродажу",
  ];
  const ansver2 = [
    "Гулять в парке",
    "Гулять по городу",
    "Выезжать за город",
    "Ходить в кафе и рестораны",
    "Посещать вечеринки",
    "Сидеть дома",
  ];
  const ansver3 = ["Север", "Запад", "Центр", "Юг", "Восток", "Все варианты"];
  const ansver4 = [
    "Внутри Садового",
    "Внутри Третьего Транспортного Кольца",
    "Между МКАД и Третьим Транспортным кольцом",
    "За МКАД до 5 км",
    "За МКАД далее 5 км",
    "Москву не знаю",
  ];
  const ansver5 = [
    "Я - романтик, нужна природа, парки и красивый вид",
    "Я - прагматик, нужна инфраструктура и транспортная доступность",
    "Я - родитель, важны школы, сады и детская инфраструктура",
  ];
  const quest1 = "Для чего приобретаете квартиру?";
  const quest2 = "Что Вам нравиться больше?";
  const quest3 = "Какое направление рассматриваете?";
  const quest4 = "Какая удаленность от центра приемлема?";
  const quest5 = "Что Вам важнее?";
  const questions = [quest1, quest2, quest3, quest4, quest5];
  const ansvers = [
    [quest1, ansver1],
    [quest2, ansver2],
    [quest3, ansver3],
    [quest4, ansver4],
    [quest5, ansver5],
  ];
  const [turnPage, setTurnPage] = useState(false);

  function handleClick() {
    setTurnPage(true);
    setShow(0);
  }
  useEffect(() => {
    if (show === questions.length) {
      setWaited(true);
    }
  }, [show, questions]);
  function handleMainPage() {
    setTurnPage(false);
    setShow(null);
    setWaited(false);
  }

  return (
    <div className="Main">
      <div className="logo" onClick={handleMainPage}>
        Mind Flat
      </div>
      <div
        className="page_main"
        style={!turnPage ? { display: "flex" } : { display: "none" }}
      >
        <div className="description">
          Поиск новостроек на основании Ваших <u>психологических</u>{" "}
          особенностей
        </div>
        <span className="description-2">
          Лучший способ найти квартиру в Москве
        </span>
        <div className="icons">
          <div className="icon1">
            <div className="buildings"></div>
            <span>679</span>
            <div>проанализированных</div>
            <div>новостроек</div>
          </div>
          <div className="icon2">
            <div className="target"></div>
            <span>до 92%</span>
            <div>точности</div>
          </div>
          <div className="icon3">
            <div className="sale"></div>
            <span>Все скидки</span>
            <div>и акции {arr[new Date().getMonth()]}</div>
          </div>
        </div>
        <button type="button" className="button" onClick={handleClick}>
          Начать подбор квартиры
        </button>
      </div>
      {ansvers.map((x) => (
        <Questions
          quest={x[0]}
          ansver={x[1]}
          questions={questions}
          turnPage={turnPage}
          show={show}
          setShow={setShow}
          setTurnPage={setTurnPage}
          setResultObject={setResultObject}
        />
      ))}
      {waited && <Waiting setTurnPage={setTurnPage} turnPage={turnPage} />}
    </div>
  );
}

export default App;
