import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
    return (
        <section className="section" id="about" style={{ background: 'var(--bg-light)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div style={{ width: '50px', height: '4px', background: 'var(--metallic-blue)', marginBottom: '30px' }} />
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '25px', lineHeight: 1.1, color: 'var(--text-heading)' }}>
                        Excellence in <br />
                        <span style={{ color: 'var(--primary-brand)', fontWeight: 300 }}>Metal Engineering</span>
                    </h2>
                    <p style={{ color: 'var(--text-paragraph)', marginBottom: '35px', fontSize: '1.1rem' }}>
                        Vijay Laxmi Steel carries a legacy of over two decades in manufacturing and supplying premium Stainless Steel, Non-Ferrous Metals, and Special Alloys. We are committed to technical precision and globally recognized quality standards.
                    </p>
                    <Link to="/about">
                        <button className="premium-btn btn-outline" style={{ border: '2px solid var(--primary-brand)' }}>Our Corporate Profile</button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ position: 'relative' }}
                >
                    <img
                        src="/images/home-about.jpg"
                        alt=" Vijay Laxmi Steel Manufacturing"
                        style={{ borderRadius: '12px', boxShadow: '0 30px 60px rgba(0,0,0,0.12)', border: '1px solid var(--soft-steel)' }}
                    />
                    <div style={{
                        position: 'absolute',
                        bottom: '-20px',
                        right: '0px',
                        background: 'var(--metallic-blue)',
                        color: 'white',
                        padding: '40px',
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        zIndex: 1,
                        boxShadow: '0 20px 40px rgba(58, 122, 254, 0.3)'
                    }}>
                        <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>20+</span>
                        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Years of Trust</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutPreview;
