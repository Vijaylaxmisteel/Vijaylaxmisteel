import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            padding: '160px 5% 100px'
        }}>
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("/images/hero-1.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0
            }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to right, rgba(15, 17, 21, 0.9) 0%, rgba(15, 17, 21, 0.4) 100%)'
                }} />
            </div>

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '850px', color: 'white' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        background: 'rgba(58, 122, 254, 0.15)',
                        border: '1px solid rgba(58, 122, 254, 0.3)',
                        borderRadius: '4px',
                        color: '#3A7AFE',
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}
                >
                    Trusted Manufacturer & Supplier
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, marginBottom: '25px', color: 'white' }}
                >
                    Precision Stainless Steel <br />
                    <span style={{ color: '#3A7AFE' }}>& Alloy Solutions</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', marginBottom: '45px', color: '#D1D5DB', fontWeight: 300, maxWidth: '650px' }}
                >
                    Manufacturer, Stockist & Supplier of Stainless Steel & Non-Ferrous Metals, including Special Alloys like Inconel, Incoloy, Duplex Steel, Cupro Nickel, Hastelloy, Zirconium & Titanium.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', position: 'relative', zIndex: 10 }}
                >
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <button className="premium-btn btn-metallic">
                            Get a Quote <ArrowRight size={18} />
                        </button>
                    </Link>
                    <a href="https://wa.me/919054156127?text=Hello%20Vijay%20Laxmi%20Steel%2C%20I%20am%20interested%20in%20your%20products.%20Please%20provide%20more%20information." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <button className="premium-btn btn-outline-white">
                            <MessageCircle size={18} color="#25D366" /> Chat on WhatsApp
                        </button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
