import React, { useEffect, useState } from "react";
import artworkService from "../services/artworkService";

const useArtworksCall = () => {
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await artworkService.getAllArtworks();
                console.log(data, 'log del hook gallery');
                setArtworks(data);
            } catch (err) {
                console.error('Error fetching artworks:', err);
                setError('Error while fetching artworks');
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    return {artworks, loading, error}
}

export default useArtworksCall;