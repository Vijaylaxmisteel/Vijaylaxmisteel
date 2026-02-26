import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const CTASection = () => {
    return (
        <section style={{
            padding: 'clamp(60px, 10vw, 120px) 5% clamp(0px, 5vw, 120px)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: 0
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("/images/hero-2.jpg")', // Using an existing image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0
            }}>
                <div style={{ width: '100%', height: '100%', background: 'rgba(15, 17, 21, 0.95)' }} />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="container"
                style={{ position: 'relative', zIndex: 1, color: 'white', maxWidth: '850px' }}
            >
                <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', marginBottom: '30px', color: 'white' }}>
                    Ready to Secure Your <br />
                    <span style={{ color: '#F59E0B' }}>Metal Supply Chain?</span>
                </h2>
                <p style={{ color: '#D1D5DB', marginBottom: '50px', fontSize: '1.2rem', fontWeight: 300 }}>
                    Connect with Vijay Laxmi Steel experts for technical guidance and competitive bulk pricing on industrial alloys.
                </p>

                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="https://wa.me/919054156127?text=Hello%20Vijay%20Laxmi%20Steel%2C%20I%20am%20interested%20in%20your%20products.%20Please%20provide%20more%20information." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <button className="premium-btn btn-orange">
                            <MessageCircle size={18} fill="white" /> WhatsApp Enquiry
                        </button>
                    </a>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <button className="premium-btn btn-metallic">
                            <Phone size={18} /> Request Callback
                        </button>
                    </Link>
                    <a href="mailto:vijaylaxmisteel1@gmail.com" style={{ textDecoration: 'none' }}>
                        <button className="premium-btn btn-outline-white">
                            <Mail size={18} /> Contact Sales
                        </button>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default CTASection;
