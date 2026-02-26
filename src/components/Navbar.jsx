import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Info, Package, Factory, Phone, MessageSquare, Mail, ChevronRight, ShieldCheck, Instagram } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', href: '/', icon: <Home size={20} /> },
        { name: 'About Us', href: '/about', icon: <Info size={20} /> },
        { name: 'Products', href: '/products', icon: <Package size={20} /> },
        { name: 'Quality', href: '/quality', icon: <ShieldCheck size={20} /> },
        { name: 'Contact Us', href: '/contact', icon: <Phone size={20} /> },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            style={{
                position: 'relative',
                width: '100%',
                zIndex: 2000,
                padding: '10px 5%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: scrolled ? 'rgba(15, 17, 21, 0.98)' : 'rgba(15, 17, 21, 0.9)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease',
                boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.3)' : 'none'
            }}
        >
            {/* Logo Section */}
            <Link to="/" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/images/logo.png" alt="Vijay Laxmi Steel" style={{ height: '45px' }} />
            </Link>

            {/* Desktop Links (lg: 1024px+) */}
            <div className="desktop-only" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href}
                        style={{
                            fontWeight: 600,
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            color: isActive(link.href) ? 'var(--metallic-blue)' : 'white',
                            textDecoration: 'none',
                            transition: 'var(--transition)'
                        }}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link to="/contact">
                    <button className="premium-btn btn-metallic" style={{ padding: '10px 20px', fontSize: '0.75rem' }}>
                        Get Quote
                    </button>
                </Link>
            </div>

            {/* Mobile Right-Side Hamburger */}
            <div className="mobile-only" onClick={() => setIsOpen(true)} style={{ cursor: 'pointer', color: 'white' }}>
                <Menu size={28} />
            </div>

            {/* Mobile/Tablet Slide-in Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100vh',
                                background: 'rgba(0,0,0,0.7)',
                                backdropFilter: 'blur(4px)',
                                zIndex: 3000
                            }}
                        />

                        {/* Right Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                width: '80%',
                                maxWidth: '400px',
                                height: '100vh',
                                background: '#FFFFFF',
                                zIndex: 3001,
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '-10px 0 30px rgba(0,0,0,0.2)'
                            }}
                        >
                            {/* TOP BAR */}
                            <div style={{
                                padding: '20px',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                borderBottom: '1px solid #EEEEEE'
                            }}>
                                <div onClick={() => setIsOpen(false)} style={{ cursor: 'pointer', color: 'var(--charcoal-black)' }}>
                                    <X size={28} />
                                </div>
                            </div>

                            {/* NAVIGATION LINKS */}
                            <div style={{ padding: '20px 0', flexGrow: 1, overflowY: 'auto' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    {navLinks.map((link) => (
                                        <motion.div key={link.name} whileTap={{ scale: 0.98 }}>
                                            <Link
                                                to={link.href}
                                                onClick={() => setIsOpen(false)}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '15px',
                                                    padding: '16px 25px',
                                                    textDecoration: 'none',
                                                    color: isActive(link.href) ? 'var(--metallic-blue)' : 'var(--charcoal-black)',
                                                    fontWeight: 700,
                                                    fontSize: '1.1rem',
                                                    background: isActive(link.href) ? 'rgba(58, 122, 254, 0.05)' : 'transparent',
                                                    transition: 'all 0.2s ease'
                                                }}
                                            >
                                                <span style={{ color: isActive(link.href) ? 'var(--metallic-blue)' : 'var(--text-paragraph)', opacity: 0.8 }}>
                                                    {link.icon}
                                                </span>
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* QUICK ACTION CTA SECTION (STICKY BOTTOM) */}
                            <div style={{
                                padding: '25px',
                                background: '#F9FAFB',
                                borderTop: '1px solid #EEEEEE',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px'
                            }}>
                                <a
                                    href="https://www.instagram.com/vijaylaxmisteel?igsh=YTl4aW9reDNnYmc1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        background: '#E1306C',
                                        color: 'white',
                                        padding: '14px',
                                        borderRadius: '8px',
                                        textAlign: 'center',
                                        textDecoration: 'none',
                                        fontWeight: 700,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px'
                                    }}
                                >
                                    <Instagram size={18} /> Instagram
                                </a>
                                <a
                                    href="https://wa.me/919054156127?text=Hello%20Vijay%20Laxmi%20Steel%2C%20I%20am%20interested%20in%20your%20products.%20Please%20provide%20more%20information."
                                    style={{
                                        background: '#25D366',
                                        color: 'white',
                                        padding: '14px',
                                        borderRadius: '8px',
                                        textAlign: 'center',
                                        textDecoration: 'none',
                                        fontWeight: 700,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px'
                                    }}
                                >
                                    <MessageSquare size={18} /> WhatsApp Now
                                </a>
                                <a
                                    href="tel:+919054156127"
                                    style={{
                                        background: 'var(--primary-brand)',
                                        color: 'white',
                                        padding: '14px',
                                        borderRadius: '8px',
                                        textAlign: 'center',
                                        textDecoration: 'none',
                                        fontWeight: 700,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px'
                                    }}
                                >
                                    <Phone size={18} /> Call Now
                                </a>
                                <a
                                    href="mailto:vijaylaxmisteel1@gmail.com"
                                    style={{
                                        color: 'var(--text-paragraph)',
                                        textAlign: 'center',
                                        fontSize: '0.9rem',
                                        marginTop: '5px',
                                        textDecoration: 'none',
                                        fontWeight: 600
                                    }}
                                >
                                    Email Us: vijaylaxmisteel1@gmail.com
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
