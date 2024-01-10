import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value, name, luckyNumber }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubs = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2 data-testid="test-title">{name}</h2>
      <h3>{counter}</h3>
      <p>{luckyNumber}</p>
      {/* <p>{value}</p> */}
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubs}>-</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
  name: PropTypes.string.isRequired,
};

CounterApp.defaultProps = {
  // name: "Gabriela",
  luckyNumber: "6",
};
