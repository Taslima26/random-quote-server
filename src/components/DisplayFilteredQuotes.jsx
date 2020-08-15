import React, {useState, useEffect} from 'react';
import {container} from 'react-bootstrap';

const DisplayFilteredQuotes = ({quotes}) => {
  const [search, setSearch] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  console.log(quotes);
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  console.log('quotes before useffect', quotes);

  useEffect(() => {
    const results = quotes.filter((p) =>
      p.quote.toLowerCase().includes(search)
    );
    setSearchResults(results);
  }, [search]);

  return (
    <div className="container">
      <input
        className="input-group input-group-lg input-group-prepend"
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
      {searchResults.map((quote) => (
        <div>
          <h4>{quote.quote}</h4>
        </div>
      ))}
    </div>
  );
};

export default DisplayFilteredQuotes;
