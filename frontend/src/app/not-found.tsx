'use client'

import React from "react";

const NotFound: React.FC = () => {

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center">
                {/* 404 Title */}
                <h1 className="text-6xl font-bold text-coral">404</h1>
                <p className="mt-4 text-xl text-gray-700">
                    Oops! The page you are looking for does not exist.
                </p>

                {/* Suggestion */}
                <p className="mt-2 text-lg text-gray-600">
                    It seems you’ve found a broken link or the page has been removed.
                </p>

                {/* Go Back Button */}
                <button
                    className="mt-6 px-6 py-3 bg-coral text-white rounded-md hover:bg-coral-dark transition-all"
                    onClick={() => window.history.back()}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default NotFound;
