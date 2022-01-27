import { useState } from "react";
import { Form, Input, Button, Label } from "./CSSBar";

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
    <Form onSubmit={handleSubmit}>
      <Label>
        Movies
        <Input
          value={searchQuery}
          autoComplete="off"
          autoFocus
          type="text"
          name="movie"
          onChange={inputChange}
        />
      </Label>
      <Button type="submit">Searh</Button>
    </Form>
  );
};

export default SearchForm;
