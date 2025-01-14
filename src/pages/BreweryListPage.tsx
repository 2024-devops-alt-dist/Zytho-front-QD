import { useState, useEffect } from "react";
import "../assets/css/BreweryList.css";
import breweryImage from "../assets/img/brewery.jpg"
import { Brewery } from "../interfaces/IBrewery";
import { Link } from "react-router-dom";
function BreweryListPage() {

    const [breweries, setBreweries] = useState<Brewery[]>([]);

    useEffect(() => {
        fetchBreweries();
    }, []);

    const fetchBreweries = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/breweries");

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            setBreweries(data.data);
        } catch (error) {
            console.error("Error fetching breweries:", error);
        }
    };

    return (
        <div>
            <h1>Breweries List</h1>
            <div className="brewery-list">
                {breweries.map((brewery) => (
                    <div className="brewery-card" key={brewery.id}>
                        <img
                            className="brewery-card-img"
                            src={breweryImage}
                            alt={brewery.name}
                        />
                        <div className="brewery-card-content">
                            <h2 className="category">{brewery.category}</h2>
                            <h1>{brewery.name}</h1>
                            <p>{brewery.description}</p>
                            <p><strong>City:</strong> {brewery.city}</p>
                            <p><strong>Country:</strong> {brewery.country}</p>
                            <Link
                                to={`/brewerypage/${brewery.id}`}
                                className="btn-details"
                            >
                                See more ...
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BreweryListPage;
