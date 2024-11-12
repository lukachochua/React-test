import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Hero />
                <Services />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;