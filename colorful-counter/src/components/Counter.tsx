import React from "react";
import "./Counter.css";

export type CounterProps = {
  value: Number;
  color: string;
  onIncrement: Function;
  onDecrement: Function;
};

const Counter = ({ value, color, onIncrement, onDecrement }: CounterProps) => {
  return (
    <div className="Counter">
      <h1 style={{ color }}>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default Counter;
