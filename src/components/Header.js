import React from 'react';
import Navigation from './Navigation';
import AuthButtons from './AuthButtons';

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <img src="https://via.placeholder.com/150x50?text=Logo" alt="Company Logo" className="h-8" />
                <Navigation />
                <AuthButtons />
            </div>
        </header>
    );
};

export default Header;