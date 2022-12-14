import React from "react";
import { DebounceInput } from "react-debounce-input";

const SearchBox = ({ input, setInput }) => {
  return (
    <DebounceInput
      type="text"
      name="Photo Search"
      placeholder="Search for any photos..."
      className="searchBox"
      minLength={3}
      debounceTimeout={300}
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

export default SearchBox;
