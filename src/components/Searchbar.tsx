import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onQueryChange: (query: string) => void;
  suggestions: string[];
}

const SearchBar = ({ onSearch, onQueryChange, suggestions}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onQueryChange(newQuery);

    const filtered = suggestions
      .filter((suggestion) => suggestion.toLowerCase().includes(newQuery.toLowerCase()))
      .slice(0, 5);

    setFilteredSuggestions(filtered);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setFilteredSuggestions([]);
    onQueryChange(suggestion);
    onSearch(suggestion);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);  // Transmit the search query to the parent component (Hero)
  };

  return (
    <div>
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
      {filteredSuggestions.length > 0 && (
        <ul className="suggestions-list">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
