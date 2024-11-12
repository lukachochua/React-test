import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;