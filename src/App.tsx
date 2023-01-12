import React, { SetStateAction, useState, ChangeEvent } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

export const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <div className="App">
      <SearchBar query={query} onSearch={(e:ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}/>
    </div>
  )
}

interface I_SearchBar_props {
  query:string;
  onSearch:(e:ChangeEvent<HTMLInputElement>) => void;
}
export const SearchBar: React.FC<I_SearchBar_props> = ({query,onSearch}) => {
  return (
    <div className="search">
      <input 
        type="text" placeholder="Search" onChange={onSearch} value={query} 
        className="input-field" name="search" id="search"
      />
      <button className="searchBtn">SEARCH</button>
      {/* <label htmlFor="search" className="input-label">Search</label> */}
    </div>
  )
}

interface I_Quote_props {
  quote:string;
}
export const Quote: React.FC<I_Quote_props> = ({quote}) => {
  return (
    <div className="card">
      <p className="quote">{quote}</p>
    </div>
  )
}