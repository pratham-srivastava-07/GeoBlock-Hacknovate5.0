// Home.jsx
import React from 'react';
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-8">Welcome to Our Website</h1>
            <div className="flex">
                <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                    Login
                </button>
                </Link>
                <Link to="/signup">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Sign Up
                </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;