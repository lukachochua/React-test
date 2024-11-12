import React from 'react';

const FooterNavigation = () => {
    return (
        <nav className="w-full md:w-auto mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300">About</a></li>
                <li><a href="#" className="hover:text-gray-300">Services</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
        </nav>
    );
};

export default FooterNavigation;