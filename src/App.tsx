import "./App.css";
//import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import HomePage from "./pages/HomePage";
import BeerListPage from "./pages/BeerListPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import BreweryListPage from "./pages/BreweryListPage";
import BreweryDetailsPage from "./pages/BreweryDetailsPage";
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";

const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query); // This will trigger the search update in BeerListPage
  };

  return (
    <>
      {/* <h1>Mon premier composant</h1>
      <Button title="Mon bouton 1" text="clique-moi" />
      <Button title="Mon bouton 2" text="Now" /> */}

      <Header />
      <HeroSection onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beerpage" element={<BeerListPage searchQuery={searchQuery} />} />
        <Route path="/beerpage/:id" element={<BeerDetailsPage />} />
        <Route path="/brewerypage" element={<BreweryListPage />} />
        <Route path="/brewerypage/:id" element={<BreweryDetailsPage />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;