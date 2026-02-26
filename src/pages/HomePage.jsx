import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import AboutPreview from '../components/AboutPreview';
import ScrollingText from '../components/ScrollingText';
import ProductRange from '../components/ProductRange';
import WhyChooseUs from '../components/WhyChooseUs';
import IndustriesServed from '../components/IndustriesServed';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <TrustStrip />
            <AboutPreview />
            <ScrollingText />
            <ProductRange />
            <WhyChooseUs />
            <IndustriesServed />
            <Testimonials />
            <CTASection />
        </main>
    );
};

export default HomePage;
