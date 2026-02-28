import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import TermsConditions from './pages/TermsConditions';
import QualityPage from './pages/QualityPage';
import './index.css';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};
function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <Router>
            <ScrollToTop />
            <div className="app">
                <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 3000 }}>
                    <TopBar />
                    <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                </header>
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/products" element={<ProductListingPage />} />
                        <Route path="/products/:slug" element={<ProductDetailPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/quality" element={<QualityPage />} />
                        <Route path="/terms" element={<TermsConditions />} />
                    </Routes>
                </div>
                <Footer />
                <WhatsAppButton isMenuOpen={isMenuOpen} />
            </div>
        </Router>
    );
}

export default App;
