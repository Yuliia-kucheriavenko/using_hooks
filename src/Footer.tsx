import React from "react"

type FooterProps = {
  copyright: string,
  author: string
}

export const Footer: React.FC<FooterProps> = ({copyright, author}) => {
  const year = new Date().getFullYear();
  return (
    <h2> Write by {author} in {year}. C - {copyright} </h2>
  )
}