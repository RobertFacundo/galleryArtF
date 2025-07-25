import React from "react";

export const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-200 text-yellow-500 p-2 shadow-lg z-50 bg-opacity-20 backdrop-blur-sm">
            <div className="container mx auto flex justify-center items-center text-sm">
                Designed and developed &gt;{""}
                <a
                    href="https://github.com/RobertFacundo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 font-semibold hover:text-yellow-600 transition duration-300 ease-in-out"
                >Robert</a>
            </div>
        </footer>
    );
};

export default Footer;