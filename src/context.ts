import { createContext } from "react";

export const authorDate = {
  authorName: 'natino',
  twitter: '@dnatinoTypl',
}

export const AuthorDataContext = createContext(authorDate);

export const companyDate = {
  companyName: 'Metaplex',
  companyLocation: 'Ukraine, Natino',
}
export const CompanyDataContext = createContext(companyDate);