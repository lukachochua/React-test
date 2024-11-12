import React from 'react';

const SocialIcons = () => {
    const placeholderImage = 'https://via.placeholder.com/24'; 

    return (
        <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Twitter">
                <img
                    src="/twitter-icon.svg"
                    alt="Twitter"
                    className="h-6 w-6"
                    onError={(e) => e.target.src = placeholderImage} 
                />
            </a>
            <a href="#" aria-label="LinkedIn">
                <img
                    src="/linkedin-icon.svg"
                    alt="LinkedIn"
                    className="h-6 w-6"
                    onError={(e) => e.target.src = placeholderImage} 
                />
            </a>
            <a href="#" aria-label="Facebook">
                <img
                    src="/facebook-icon.svg"
                    alt="Facebook"
                    className="h-6 w-6"
                    onError={(e) => e.target.src = placeholderImage}
                />
            </a>
        </div>
    );
};

export default SocialIcons;
