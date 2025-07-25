import React, { useEffect, useState } from "react";
import useArtworksCall from "../hooks/useArtworksCall";
import ArtCard from "./ArtCard";
import Masonry from "react-masonry-css";
import Loader from "./Loader";

const GalleryDisplay = () => {
    const { artworks, loading, error } = useArtworksCall();

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <Loader size="lg" color="yellow" />
            </div>
        )
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!artworks || artworks.length === 0) return <p>No data available</p>

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {artworks.map((artwork) => (
                <ArtCard key={artwork.id} artwork={artwork}></ArtCard>
            ))}
        </Masonry>
    )
}

export default GalleryDisplay;