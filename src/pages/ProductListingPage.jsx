import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductListingPage = () => {
    return (
        <div className="product-listing-page" style={{ background: 'var(--bg-light)', minHeight: '100vh' }}>
            {/* Header Section */}
            <section style={{
                padding: '120px 5% 80px',
                width: '100%',
                overflow: 'hidden',
                background: 'linear-gradient(to bottom, rgba(15,17,21,0.95), rgba(15,17,21,0.8)), url("/images/hero-2.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                textAlign: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '20px', color: '#FFFFFF' }}>Industrial Product Catalog</h1>
                    <p style={{ color: '#D1D5DB', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', fontWeight: 300 }}>
                        Explore our comprehensive range of high-performance metals and alloys, engineered for precision and reliability.
                    </p>
                </motion.div>
            </section>

            {/* Grid Section */}
            <section className="section container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '30px',
                    marginTop: '20px'
                }}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Technical Support Banner */}
            <section className="container" style={{ marginBottom: '100px' }}>
                <div style={{
                    background: 'var(--primary-brand)',
                    padding: '60px',
                    borderRadius: '16px',
                    color: 'white',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#FFFDD0' }}>Need Technical Specifications?</h2>
                    <p style={{ color: '#D1D5DB', marginBottom: '40px', fontSize: '1.1rem' }}>
                        Our material specialists are available to provide detailed data sheets and CAD drawings as per your project requirements.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <button className="premium-btn btn-metallic">Request Data Sheet</button>
                        </Link>
                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <button className="premium-btn btn-outline-white">Consult Specialist</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductListingPage;
