import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import breweryImage from "../assets/img/brewery.jpg";
import "../assets/css/BreweryDetails.css"
import { Brewery } from "../interfaces/IBrewery";
import { Link } from "react-router-dom";
function BreweryDetailsPage() {

    const { id } = useParams();

    const [brewery, setbrewery] = useState<Brewery | null>(null);

    const fetchBreweryDetails = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/v1/breweries/${id}`);
            const data = await response.json();
            setbrewery(data.data); // Assurez-vous que la structure de réponse correspond bien
            
        } catch (error) {
            console.error("Erreur lors de la récupération des détails de la brasserie :", error);
        }
    };

    useEffect(() => {
        fetchBreweryDetails();
        }, [id]);

        if (!brewery) {
            return <p>Chargement des détails de la bière...</p>;
        }

    return(
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
   
        </div>
    );

}

export default BreweryDetailsPage;
