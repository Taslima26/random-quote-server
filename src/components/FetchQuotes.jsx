import React, { useState, useEffect } from 'react';
import './FetchQuotes';
import {container} from 'react-bootstrap';

const FetchQuotes = () => {
    const [quote, setQuote] = useState({});
    const [click, setClick] = useState(0);

  useEffect (() => {
      fetch('https://cors-anywhere.herokuapp.com/https://taslima-quote-sever.glitch.me/quotes/random')
      .then (res => res.json ())
      .then (data => {
       setQuote(data)
      });
  }, [click]);
  return (
    <div className="container">
      <div>
        <h2>{quote.quote}</h2>
        <h4>{quote.author}</h4>

          </div>
          <button onClick={() => setClick(click+1)}>Get a new quote!</button>
    </div>
  );
};

export default FetchQuotes;
