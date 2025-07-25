import { useState, useCallback, useEffect } from 'react';
import artworkService from '../services/artworkService';
import { useAuth } from '../contexts/AuthContext';

const useAddArtwork = () => {
    const { user, setUser } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        let timer;
        if (successMessage || error) {
            timer = setTimeout(() => {
                setSuccessMessage(null);
                setError(null);
            }, 3000)
        }
        return () => clearTimeout(timer);
    }, [successMessage, error])

    const addArtwork = useCallback(async (artworkId, artworkTitle) => {
        setIsLoading(true);
        setError(null);
        setSuccessMessage(null);

        try {
            const response = await artworkService.addArtwork(artworkId);

            console.log(response, "Response from backend for addArtwork:");

            if (response) {
                setUser(response)
                setSuccessMessage(`"${artworkTitle}" added to your gallery!`);
            } else {
                setSuccessMessage(`"${artworkTitle}" added successfully!`);
                console.warn("Backend did not return updated user object on artwork addition.")
            }
            return true;
        } catch (err) {
            console.error("Error adding artwork:", err.response?.data || err.message);
            setError(err.response?.data?.error || 'Failed to add artwork');
            return false;
        } finally {
            setIsLoading(false);
        }
    }, []);

    const isArtworkInGallery = useCallback((artworkId) => {
        return user?.personal_gallery?.artworks?.some(
            (item) => item.id === artworkId
        );
    }, [user]);

    const handleAddItemClick = useCallback(async (artworkId, artworkTitle) => {
        const success = await addArtwork(artworkId, artworkTitle);

        if (success) {
            if (successMessage) {
                alert(successMessage);
            }
        } else if (error) {
            alert(`Error: ${error}`);
        }
    }, [addArtwork]);

    return {
        handleAddItemClick,
        isLoading,
        error,
        successMessage,
        isArtworkInGallery,
        user
    };
};

export default useAddArtwork;