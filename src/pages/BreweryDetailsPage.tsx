import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import breweryImage from "../assets/img/brewery.jpg";
import beerImage from "../assets/img/bieres_img.avif";
import "../assets/css/BreweryDetails.css"
import { Brewery } from "../interfaces/IBrewery";
import { Beer } from "../interfaces/IBeer";
import { Link } from "react-router-dom";
import { apiService } from "../services/ApiServices";
function BreweryDetailsPage() {

    const { id } = useParams();

    const [brewery, setbrewery] = useState<Brewery | null>(null);
    const [beers, setBeers] = useState<Beer[]>([]);

    const fetchBreweryDetails = async () => {
        try {
            // récupère les brasseries
            const breweryResponse = await apiService.getBreweryById(Number(id));
            setbrewery(breweryResponse.data);
            
            // récupère les bières de la brasserie
            const beersResponse = await apiService.getBeersByBrewery(Number(id));
            setBeers(beersResponse.data);

        } catch (error) {
            console.error("Erreur lors de la récupération des détails de la brasserie :", error);
        }
    };

    useEffect(() => {
        fetchBreweryDetails();
        }, [id]);

        if (!brewery) {
            return <p>Chargement des détails de la brasserie ...</p>;
        }

    return(
        <div>
            <div className="brewery-details-container">
                <Link className="btn-details" to='/brewerypage'> back
                </Link>
                <h1>Beer's Details: {brewery.name}</h1>

                <img src={breweryImage} alt={brewery.name}/>

                <p><strong>Name:</strong> {brewery.name}</p>
                <p><strong>Description:</strong> {brewery.description}</p>
                <p><strong>Address:</strong> {brewery.address}</p>
                <p><strong>City:</strong> {brewery.city}</p>
                <p><strong>Country:</strong> {brewery.country}</p>
                <p><strong>Category:</strong> {brewery.category}</p>
                <p><strong>Product organic beer:</strong> {brewery.organic_beer ? 'Yes' : 'No'}</p>
                <p><strong>History:</strong> {brewery.history}</p>
            </div>

            <h2>The beers of this brewery</h2>
            {beers.length > 0 ? (
                <div className="beer-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {beers.map(beer => (
                        <div className="beer-card" key={beer.id}>
                            <img className="beer-card-img" src={beerImage} alt={beer.name} />
                            <div className="beer-card-content">
                                <h2 className="category">{beer.category}</h2> 
                                <h1>{beer.name}</h1>
                                <p>{beer.description}</p>
                                <Link to={`/beerpage/${beer.id}`} className="btn-details">
                                    See more...
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Aucune bière trouvée pour cette brasserie.</p>
            )}
        </div>
    );

}

export default BreweryDetailsPage;
