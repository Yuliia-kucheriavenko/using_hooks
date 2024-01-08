import { useContext } from "react"
import { CompanyDataContext, companyDate } from "./context"

export const Company = () => {
  const {companyName, companyLocation } = useContext(CompanyDataContext)
  return (
    <>
    <h4>
      Name of company - {companyName}
    </h4>
    <p>Location of company - {companyLocation}</p>
    </>
  )
}