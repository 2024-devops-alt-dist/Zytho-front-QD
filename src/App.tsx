import "./App.css";
//import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import HomePage from "./pages/HomePage";
import BeerListPage from "./pages/BeerListPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import BreweryListPage from "./pages/BreweryListPage";
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      {/* <h1>Mon premier composant</h1>
      <Button title="Mon bouton 1" text="clique-moi" />
      <Button title="Mon bouton 2" text="Now" /> */}

      <Header />
      <HeroSection />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beerpage" element={<BeerListPage />} />
        <Route path="/beerpage/:id" element={<BeerDetailsPage />} />
        <Route path="/brewerypage" element={<BreweryListPage />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;