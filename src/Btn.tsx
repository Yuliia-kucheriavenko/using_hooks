import React from "react";

type BtnProps = {
  onClick: (val: string) => void
}

export const Btn: React.FC<BtnProps> = ({onClick}) => {
  return (
    <button onClick = {() => onClick('Hello Ketrin')}>Click</button>
  )
}