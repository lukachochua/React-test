import React from 'react';
import FooterNavigation from './FooterNavigation';
import SocialIcons from './SocialIcons';

const Footer = () => {
    const placeholderLogo = 'https://via.placeholder.com/150?text=Logo';

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <img
                        src="/logo-white.svg"
                        alt="Company Logo"
                        className="h-8 mb-4 md:mb-0"
                        onError={(e) => e.target.src = placeholderLogo}
                    />
                    <FooterNavigation />
                </div>
                <hr className="border-gray-800 my-8" />
                <div className="flex flex-wrap justify-between items-center">
                    <p className="text-gray-400 text-sm">© 2023 Company Name. All rights reserved.</p>
                    <SocialIcons />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
