import wallBeer from "../assets/img/wallbeer.jpg";
import SearchBar from "../components/Searchbar";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const HeroSection = ({ onSearch, beerNames }: { onSearch: (query: string) => void, beerNames: string[] }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchClick = () => {
    console.log("Search button clicked with query:", query);
    onSearch(query);
    navigate('/beerpage');
  };


  const handleSearchSubmit = (newQuery: string) => {
    setQuery(newQuery);
    console.log("Search submitted with query:", newQuery);
    onSearch(newQuery);
    navigate('/beerpage');
  };

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src={wallBeer} />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Discover your next favorite brew</h1>
          <p className="mb-8 leading-relaxed">
            Explore a world of flavors with our curated collection of beers from breweries across the globe. Whether you're a craft beer enthusiast or just starting your journey, we help you discover your next favorite brew.
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
              <label htmlFor="search-field" className="leading-7 text-lg font-extrabold text-gray-800">Looking for a particular beer?</label>
              <SearchBar onSearch={handleSearchSubmit} onQueryChange={handleQueryChange} suggestions={beerNames}/>
            </div>
            <button className="inline-flex btn-details" onClick={handleSearchClick}>Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
