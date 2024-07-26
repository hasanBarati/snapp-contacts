import React, { useEffect, useState } from "react";
import useDebounce from "./debounce";

interface IsearchProps {
  onSearch: (search: string) => void;
}
const SearchForm = ({ onSearch }: IsearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce<string>(searchTerm);

  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue]);


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />
    </form>
  );
};

export default SearchForm;
