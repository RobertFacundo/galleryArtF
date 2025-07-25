import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../contexts/AuthContext";

const CoinsDisplay = ()=>{
    const {user, isAuthenticated, loading} = useAuth();
    console.log("CoinsDisplay: User object from context:", user);

    if(loading){
        return null;
    }

    if(!user || !isAuthenticated) {
        return null
    }

    const userCoins = user.coins || 0;

    return (
        <div className="bg-yellow-400 text-gray-800 text-sm font-bold px-3 py-1 rounded-full flex items-center shadow-md">
            <FontAwesomeIcon icon={faCoins} className="mr-2"/>
            <span>{userCoins}</span>
        </div>
    );
};

export default CoinsDisplay