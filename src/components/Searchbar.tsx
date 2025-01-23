import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onQueryChange: (query: string) => void;
}

const SearchBar = ({ onSearch, onQueryChange }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onQueryChange(newQuery);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);  // Transmit the search query to the parent component (Hero)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="search-field"
        value={query}
        onChange={handleChange}
        placeholder="Search for a beer"
        className="w-full p-2 border rounded-md"
      />
    </form>
  );
};

export default SearchBar;
