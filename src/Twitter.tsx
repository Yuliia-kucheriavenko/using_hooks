import React, { useContext } from "react"
import { AuthorDataContext } from "./context"

export const Twitter = () => {
  const {twitter, authorName} = useContext(AuthorDataContext)
  return (
    <p>
      My Twitter: {authorName} - {twitter}
    </p>
  )
}