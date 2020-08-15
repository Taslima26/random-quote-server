import React, {useState, useEffect} from 'react';
import DisplayFilteredQuotes from './DisplayFilteredQuotes';

const SearchQuote = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://taslima-quote-sever.glitch.me/quotes`
    )
      .then((res) => res.json())
      .then((res) => {
        setQuotes(res);
      });
  }, []);

  console.log(quotes);
  return (
    <div>
      <DisplayFilteredQuotes quotes={quotes} />

      {/* {quotes.map((quote) => <div><h4>{quote.quote}</h4><h6>{quote.author}</h6></div>)} */}
    </div>
  );
};

export default SearchQuote;
