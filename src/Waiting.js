import React from "react";

/* function Waiting({ x }) {
  return (
    <div className="Wait" style={{ display: x, backgroundColor: "red" }}>
      Ожидание.............................................................................
      <img src={require("./45.svg")} alt="animation" />
    </div>
  );
} */
class Waiting extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    // the setTimeout just simulates an async action, after which the component will render the content
    setTimeout(() => this.setState({ loading: false }), 2000);
  }

  render() {
    const { loading } = this.state;
    if (!loading) {
      // if your component doesn't have to wait for an async action, remove this block
      return (
        <div className="sendPage">
          <div className="Title">
            Совместимость с 1 ЖК из 679 с вероятностью 91%
          </div>
          <div className="subTitle">
            Связаться напрямую с застройщиком и узнать о ценах, скидках и
            месторасположении.
          </div>
          <div className="Form">
            <div className="Field">
              <input
                type="text"
                className="phone_mask"
                placeholder="+7 (___) ___-__-__"
                name="phone"
              />
            </div>
            <div className="Agreement">
              <label className="custom-checkbox">
                <input type="checkbox" className="agreement" />
                <a href="security-policy.docx" target="blank" className="name">
                  я согласен с политикой обработки персональных данных
                </a>
              </label>
            </div>
            <div className="Bott">
              <button type="submit" className="button">
                Узнать, что это за новостройка
              </button>
            </div>
          </div>
        </div>
      ); // render null when app is not ready
    }

    return (
      <div className="Wait">
        <div className="search">Идёт поиск...</div>
        <img src={require("./45.svg")} alt="animation" />
      </div>
    );
  }
}

export default Waiting;
