const API_BASE_URL = "http://localhost:3000/api/v1";

export const apiService = {
    getBreweries: async () => {
        const response = await fetch(`${API_BASE_URL}/breweries`);
        if (!response.ok) throw new Error("Erreur lors de la récupération des brasseries");
        return response.json();
    },

    getBreweryById: async (id: number) => {
        const response = await fetch(`${API_BASE_URL}/breweries/${id}`);
        if (!response.ok) throw new Error("Erreur lors de la récupération de la brasserie");
        return response.json();
    },

    getBeersByBrewery: async (id: number) => {
        const response = await fetch(`${API_BASE_URL}/breweries/${id}/beers`);
        if (!response.ok) throw new Error("Erreur lors de la récupération des bières de la brasserie");
        return response.json();
    },

    getBeers: async () => {
        const response = await fetch(`${API_BASE_URL}/beers`);
        if (!response.ok) throw new Error("Erreur lors de la récupération des bières");
        return response.json();
    },

    getBeerById: async (beerId: number) => {
        const response = await fetch(`${API_BASE_URL}/beers/${beerId}`);
        if (!response.ok) throw new Error("Erreur lors de la récupération de la bière");
        return response.json();
    }
};
