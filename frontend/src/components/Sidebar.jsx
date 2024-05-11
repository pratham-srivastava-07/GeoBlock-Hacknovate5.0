// Sidebar.jsx
import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-gray-800 w-64 fixed top-0 left-0 h-full">
            <div className="p-6">
                <h2 className="text-white text-xl font-semibold">Dashboard</h2>
                <p className="mt-1 text-gray-300">Welcome, User!</p>
            </div>
            <nav className="mt-6">
                <a href="/dashboard" className="block p-4 text-gray-400 hover:bg-gray-700 hover:text-white">Dashboard</a>
                <a href="/upload" className="block p-4 text-gray-400 hover:bg-gray-700 hover:text-white">Upload</a>
                <a href="/transactions" className="block p-4 text-gray-400 hover:bg-gray-700 hover:text-white">Transactions</a>
                {/* <a href="#" className="block p-4 text-gray-400 hover:bg-gray-700 hover:text-white">Blocks</a> */}
                <a href="/settings" className="block p-4 text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
            </nav>
        </div>
    );
};

export default Sidebar;