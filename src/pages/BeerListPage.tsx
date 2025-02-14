import { useState, useEffect } from "react";
import "../assets/css/BeerList.css";
import beerImage from "../assets/img/bieres_img.avif";
import { Link } from "react-router-dom";
import { Beer } from "../interfaces/IBeer";
import { apiService } from "../services/ApiServices";
interface BeerListPageProps {
    searchQuery: string;
    onBeerNamesFetched: (names: string[]) => void;
  }
function BeerListPage({ searchQuery, onBeerNamesFetched }: BeerListPageProps) {

    const [beers, setBeers] = useState<Beer[]>([]);
    const [filteredBeers, setFilteredBeers] = useState<Beer[]>([]);
 

    useEffect(() => {
        fetchBeers();
    }, []);

    useEffect(() => {
        setFilteredBeers(
            beers.filter(
                (beer) =>
                    beer.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery, beers]);

    const fetchBeers = async () => {
        try {
            const response = await apiService.getBeers();
            setBeers(response.data);
            setFilteredBeers(response.data);
            onBeerNamesFetched(response.data.map((beer: Beer) => beer.name));
        } catch (error) {
            console.error("Error fetching beers:", error);
        }
    };

    return (
        <div>
            <h1>Beer List</h1>
                <div className="beer-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {filteredBeers.map((beer) => (
                        <div className="beer-card" key={beer.id}>
                            <img className="beer-card-img" src={beerImage} alt={beer.name} />
                            <div className="beer-card-content">
                                <h2 className="category">{beer.category}</h2>
                                <h1>{beer.name}</h1>
                                <p>{beer.description}</p>
                                <Link to={`/beerpage/${beer.id}`} className="btn-details">
                                    See more ...
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
        </div >
    );
}

export default BeerListPage;
