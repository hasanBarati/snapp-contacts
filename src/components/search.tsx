import React, { useState } from "react";

interface IsearchProps {
  onSearch: (search: string) => void;
}
const SearchForm = ({ onSearch }: IsearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  //@ts-ignore
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) =>{ 
          setSearchTerm(e.target.value)
          onSearch(e.target.value);
        }}
        placeholder="Search..."
      />

    </form>
  );
};

export default SearchForm;
