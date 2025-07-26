import React from "react";
import { useAuth } from '../contexts/AuthContext'
import ArtCard from "./ArtCard";

const PersonalGallery = () => {
    const { user, loading } = useAuth()

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <Loader size="lg" color="yellow" />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-xl text-gray-500">Please, log in to see your personal gallery!</p>
            </div>
        );
    }

    const personalGallery = user?.personal_gallery

    const artworks = personalGallery?.artworks || [];

    if (artworks.length === 0) {
        return (
            <div className="font-sans max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg text-center my-8">
                <h1 className="text-3l font-bold text-gray-800 mb-4">{personalGallery.name}</h1>
                <p className="text-lg text-gray-600">You haven't add any art to your personal gallery!</p>
                <p className="text-lg text-gray-600 mt-2">Explore and add your favorites!</p>
            </div>
        )
    }

    return (
        <div className="font-sans max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-2xl border border-gray-100 my-8 sm: my-12 md:my-16 lg:my-20">
            <h1 className="text-4xl font-extrabold text-yellow-500 mb-8 drop-shadow-sm text-center">{personalGallery.name}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md-cols-3 lg:grid-cols-4 gap-6">
                {artworks.map((artwork, index) => (
                    <ArtCard key={artwork.id || index} artwork={artwork} />
                ))}
            </div>
        </div>
    )
};

export default PersonalGallery;