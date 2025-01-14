import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import beerImage from "../assets/img/bieres_img.avif";
import { Beer } from "../interfaces/IBeer";
function BeerDetailsPage() {

    const { id } = useParams();

    const [beer, setBeer] = useState<Beer | null>(null);

    const fetchBeerDetails = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/v1/beers/${id}`);
            const data = await response.json();
            setBeer(data.data); // Assurez-vous que la structure de réponse correspond bien
            console.log("Bière récupérée avec succès :", data.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des détails de la bière :", error);
        }
    };

    useEffect(() => {
        fetchBeerDetails();
        }, [id]);

        if (!beer) {
            return <p>Chargement des détails de la bière...</p>;
        }
        
    return(
        <div>
            <h1>Détails de la bière {beer.id}</h1>

            <img src={beerImage} alt={beer.name} style={{ width: '200px', height: 'auto' }} />

            <p><strong>Nom:</strong> {beer.name}</p>
            <p><strong>Description:</strong> {beer.description}</p>
            <p><strong>Catégorie:</strong> {beer.category}</p>
            <p><strong>ABV (Alcool par volume):</strong> {beer.abv}%</p>
            <p><strong>Acidité:</strong> {beer.acidity}</p>
            <p><strong>Amertume:</strong> {beer.bitterness}</p>
            <p><strong>Douceur:</strong> {beer.sweetness}</p>
            <p><strong>Type de contenant:</strong> {beer.container_type}</p>
            <p><strong>Volume de la bière (ml):</strong> {beer.beer_volume}</p>
            <p><strong>Bière biologique:</strong> {beer.organic_beer ? 'Oui' : 'Non'}</p>
         
        </div>
    );

}

export default BeerDetailsPage;
