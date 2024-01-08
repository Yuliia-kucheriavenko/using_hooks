import React from "react"

type BtnProps = {
  text: string | number,
  onClick: () => void
}

export const AppBtn: React.FC<BtnProps> = ({text, onClick}) => {
  return (
    <button className="btn btn-prime" type="button" onClick={onClick}>{text}</button>
  )
}