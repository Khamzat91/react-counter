import React from "react";
import './App.scss';

function App() {
  const [count, setCount] = React.useState(0);

  const handleClickPlus = () => {
    setCount(prev => prev + 1)
  }

  const handleClickMinus = () => {
    setCount(prev => prev - 1)
  }

  const handleClickReset = () => {
    setCount(0)
  }
  return (
    <div className="count">
      <div className="count__title">Count: {count}</div>
      <div className="count__buttons">
        <button onClick={handleClickPlus} className="count__buttons-plus">PLUS</button>
        <button disabled={count === 0} onClick={handleClickMinus} className="count__buttons-minus">MINUS</button>
        <button disabled={count === 0}  onClick={handleClickReset} className="count__buttons-reset">RESET</button>
      </div>
    </div>
  );
}

export default App;
