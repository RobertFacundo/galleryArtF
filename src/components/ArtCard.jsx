import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import useAddArtwork from "../hooks/useAddArtwork";

const ArtCard = ({ artwork }) => {
    const { handleAddItemClick, isLoading, isArtworkInGallery, user, error, successMessage } = useAddArtwork();

    if (!artwork) {
        return null;
    }

    const isInGallery = isArtworkInGallery(artwork.id);

    return (
        <div className="relative group overflow-hidden rounded-lg bg-transparent cursor-pointer transform transition-transform duration-600 hover:scale-105">
            <div className="w-full h-72 md:h-64 lg:h-80 xl:h-96 overflow-hidden">
                <img src={artwork.image_url} alt={artwork.title}
                    className="w-full h-full object-contain transition-opacity duration-600 "
                />
            </div>
            <div className="absolute top-3 right-3 bg-yellow-400 text-gray-800 text-sm font-bold px-3 py-1 rounded-full flex items-center shadow-md">
                <FontAwesomeIcon icon={faCoins} className="mr-1" />
                <span>{artwork.price}</span>
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out">
                <h3 className="text-xl font-bold text-center mb-2">{artwork.title}</h3>
                <p className="text-sm text-center italic">{artwork.artist_name}</p>
                {user && (
                    isInGallery ? (
                        <span className="text-green-400 font-bold py-2 px-4 rounded-full cursor-pointer">
                            Added to Gallery
                        </span>
                    ) : (
                        <button onClick={() => handleAddItemClick(artwork.id, artwork.title)}>
                            {isLoading ? 'Loading...' : 'Add to Gallery'}
                        </button>
                    )
                )}
                {error && <p className="bg-white text-red-500 text-sm mt-2">{error}</p>}
                {successMessage && !error && <p className="bg-white text-green-400 text-sm mt-2">{successMessage}</p>}   
            </div>
        </div>
    )
}

export default ArtCard;