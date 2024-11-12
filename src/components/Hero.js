import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Unleash Your Potential with Our Innovative Solutions
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Discover how our cutting-edge technology can transform your business and drive success in today's competitive landscape.
                </p>
                <div className="flex justify-center space-x-4">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Get started
                    </button>
                    <button className="px-6 py-3 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100">
                        Learn more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;