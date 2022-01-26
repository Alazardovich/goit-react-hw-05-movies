import { useState } from "react";

const SearchForm = ({ onLinkSearch }) => {
  const [searchQuery, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(searchQuery);
    onLinkSearch(searchQuery);
    setQuery("");
  };
  const inputChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Movies
        <input
          value={searchQuery}
          autoComplete="off"
          autoFocus
          type="text"
          name="movie"
          onChange={inputChange}
        />
      </label>
      <button type="submit">Searh</button>
    </form>
  );
};

export default SearchForm;
