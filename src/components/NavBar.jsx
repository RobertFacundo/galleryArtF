import React from "react";
import { Link } from "react-router-dom";
import CoinsDisplay from "./CoinsDisplay";

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-gray-200 text-yellow-500 p-2 shadow-lg z-50 bg-opacity-20 backdrop-blur-sm">
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/Home' className="text-2xl font-bold hover:text-yellow-600 transition duration-300 ease-in-out">Art Gallery</Link>
                <CoinsDisplay/>
                <ul className="flex space-x-10 pr-4">
                    <li>
                        <Link to='/Quiz' className="text-xl hover:text-yellow-600 transition duration-600 ease-in-out">Quiz</Link>
                    </li>
                    <li>
                        <Link to='/Profile' className="text-xl hover:text-yellow-600 transition duration-600">Profile</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;