import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Service 1',
            description: 'Description of Service 1 and its benefits for your business.'
        },
        {
            id: 2,
            title: 'Service 2',
            description: 'Description of Service 2 and its benefits for your business.'
        },
        {
            id: 3,
            title: 'Service 3',
            description: 'Description of Service 3 and its benefits for your business.'
        },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;