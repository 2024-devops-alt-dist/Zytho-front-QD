import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import beerImage from "../assets/img/bieres_img.avif";
import { Beer } from "../interfaces/IBeer";
import "../assets/css/BeerDetails.css"
import { Link } from "react-router-dom";
import { apiService } from "../services/ApiServices";
import { Brewery } from "../interfaces/IBrewery";
function BeerDetailsPage() {

    const { id } = useParams<{ id: string }>();

    const [beer, setBeer] = useState<Beer | null>(null);
    const [breweries, setBreweries] = useState<Brewery[]>([]);

    const fetchBeerDetails = async (beerId: number) => {
        try {
            const response = await apiService.getBeerById(beerId);
            setBeer(response.data);
            console.log("Bière récupérée avec succès :", response.data);

            const breweriesResponse = await apiService.getBreweriesByBeerId(beerId);
            console.log("Brasseries associées :", breweriesResponse.data);
            setBreweries(breweriesResponse.data);
            console.log("Brasseries associées :", breweriesResponse.data);
            setBreweries(Array.isArray(breweriesResponse) ? breweriesResponse : []);
            }

        catch (error) {
            console.error("Erreur lors de la récupération des détails de la bière :", error);
            setBreweries([]);
        }
    };

    useEffect(() => {
        fetchBeerDetails(Number(id));
    }, [id]);

    if (!beer) {
        return <p>Chargement des détails de la bière...</p>;
    }

    return (
        <div className="beer-details-container">
            <Link className="btn-details" to='/beerpage'> back
            </Link>
            <h1>Beer's Details: {beer.name}</h1>

            <img src={beerImage} alt={beer.name} style={{ width: '200px', height: 'auto' }} />

            <p><strong>Name:</strong> {beer.name}</p>
            <p><strong>Description:</strong> {beer.description}</p>
            <p><strong>Category:</strong> {beer.category}</p>
            <p><strong>ABV (Alcool par volume):</strong> {beer.abv}%</p>
            <p><strong>Acidity:</strong> {beer.acidity}</p>
            <p><strong>Bitterness:</strong> {beer.bitterness}</p>
            <p><strong>Sweetness:</strong> {beer.sweetness}</p>
            <p><strong>Container type:</strong> {beer.container_type}</p>
            <p><strong>Beer volume (ml):</strong> {beer.beer_volume}</p>
            <p><strong>Organic beer:</strong> {beer.organic_beer ? 'Yes' : 'No'}</p>

            {breweries.length > 0 ? (
                <div>
                    <h2>Brasseries produisant cette bière :</h2>
                    <ul>
                        {breweries.map(brewery => (
                            <li key={brewery.id}>
                                <Link to={`/brewerypage/${brewery.id}`}>{brewery.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Aucune brasserie associée.</p>
            )}
        </div>
    );

}

export default BeerDetailsPage;
