import React, { useState, useEffect } from 'react';
import { FaTwitter, FaRedoAlt } from "react-icons/fa";

const url = 'https://type.fit/api/quotes'

function App() {
  const [quote, setQuote] = useState('')

  const getQuote = async () => {
    const response = await fetch(url);
    const data = await response.json();
    let randomNum = Math.floor(Math.random() * data.length)
    setQuote(data[randomNum])
  }
  useEffect(() => {
    getQuote()
  }, [])
  return (
    <div className='wrapper'>
      <div id='quote-box'>
        <div className='quote-text'>
          <q className='text'>{quote.text}</q>
        </div>
        <div className='quote-author'>
          <span id='author'>Author: {quote.author}</span>
        </div>
        <div className='buttons'>
          <button
            className='button'
            id='new-quote'
            onClick={getQuote}
          >
            <FaRedoAlt />
          </button>
          <a
            className="button"
            id="tweet-quote"
            href="https://twitter.com/intent/tweet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
