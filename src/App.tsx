import React, { useEffect, useState, ChangeEvent } from 'react'
import './css/App.css'

import { SearchBar } from './components/SearchBar';
import { I_Quote, Quote } from './components/Quote';

export const App = () => {
  const [query, setQuery] = useState<string>("");
  const [quotes, setQuotes] = useState<I_Quote[]>([]);
  const [author, setAuthor] = useState<string>("");
  const [quote, setQuote] = useState<string>("");

  // When Page Loads
  useEffect(() => {
    fetch("https://usu-quotes-mimic.vercel.app/api/random")
    .then(result => result.json())
    .then(json => {
      setQuote(json.content);
      setAuthor(json.author);
    });

    return () => {};
  }, []);

  useEffect(() => {
    fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${query}`)
    .then(result => result.json())
    .then(json => setQuotes(json.results));
  }, [query]);

  return (
    <div className="App">
      <h1 className="header">Quote Search</h1>
      <SearchBar query={query} setQuery={setQuery}/>
      {quotes.length == 0 ? <Quote _id="random" content={quote} author={author}/> : ""}
      {
        quotes.map(item => <Quote key={item._id} _id={item._id} content={item.content} author={item.author}/>)
      }
    </div>
  )
}