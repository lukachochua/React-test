import React from 'react';

const ServiceCard = ({ id, title, description }) => {
    const imageUrl = `/icon-${id}.svg`;
    const placeholderImage = 'https://via.placeholder.com/150';

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <img
                src={imageUrl}
                alt={title}
                className="w-16 h-16 mx-auto mb-4"
                onError={(e) => e.target.src = placeholderImage}
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    );
};

export default ServiceCard;
