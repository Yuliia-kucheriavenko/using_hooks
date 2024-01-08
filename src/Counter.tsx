import React from "react";

type CounterProps = {
  counter: number,
  onCount: () => void,
}

export const Counter: React.FC<CounterProps> = ({counter, onCount}) => {
  return (
    <button onClick={onCount}>Clicked {counter} times</button>
  )
}