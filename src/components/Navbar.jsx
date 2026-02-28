import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Info, Package, Factory, Phone, MessageSquare, Mail, ChevronRight, ShieldCheck, Instagram } from 'lucide-react';

const Navbar = ({ isOpen, setIsOpen }) => {
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
                                zIndex: 5999
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
                                width: '85%',
                                maxWidth: '380px',
                                height: '100vh',
                                background: 'var(--charcoal-black)',
                                backdropFilter: 'blur(10px)',
                                zIndex: 6000,
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '-15px 0 50px rgba(0,0,0,0.5)'
                            }}
                        >
                            {/* TOP BAR */}
                            <div style={{
                                padding: '25px 30px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                            }}>
                                <img src="/images/logo.png" alt="Vijay Laxmi Steel" style={{ height: '35px', filter: 'brightness(1.2)' }} />
                                <div onClick={() => setIsOpen(false)} style={{ cursor: 'pointer', color: 'white', opacity: 0.8 }}>
                                    <X size={28} />
                                </div>
                            </div>

                            {/* NAVIGATION LINKS */}
                            <div style={{ padding: '30px 0', flexGrow: 1, overflowY: 'auto' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    {navLinks.map((link, idx) => (
                                        <motion.div
                                            key={link.name}
                                            initial={{ x: 20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.1 + idx * 0.05 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Link
                                                to={link.href}
                                                onClick={() => setIsOpen(false)}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '18px',
                                                    padding: '18px 30px',
                                                    textDecoration: 'none',
                                                    color: isActive(link.href) ? 'var(--metallic-blue)' : 'white',
                                                    fontWeight: 600,
                                                    fontSize: '1.2rem',
                                                    letterSpacing: '0.5px',
                                                    background: isActive(link.href) ? 'rgba(58, 122, 254, 0.08)' : 'transparent',
                                                    borderLeft: isActive(link.href) ? '4px solid var(--metallic-blue)' : '4px solid transparent',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                <span style={{
                                                    color: isActive(link.href) ? 'var(--metallic-blue)' : 'rgba(255,255,255,0.6)',
                                                    transition: 'all 0.3s ease'
                                                }}>
                                                    {link.icon}
                                                </span>
                                                {link.name}
                                                {isActive(link.href) && (
                                                    <motion.div
                                                        layoutId="active-indicator"
                                                        style={{ marginLeft: 'auto', color: 'var(--metallic-blue)' }}
                                                    >
                                                        <ChevronRight size={18} />
                                                    </motion.div>
                                                )}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* QUICK ACTION CTA SECTION (STICKY BOTTOM) */}
                            <div style={{
                                padding: '30px',
                                background: 'rgba(255,255,255,0.02)',
                                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '25px',
                                alignItems: 'center'
                            }}>
                                {/* Horizontal Icons Hook */}
                                <div style={{
                                    display: 'flex',
                                    gap: '20px',
                                    justifyContent: 'center',
                                    width: '100%'
                                }}>
                                    <a
                                        href="tel:+919054156127"
                                        title="Call Now"
                                        style={{
                                            width: '56px',
                                            height: '56px',
                                            borderRadius: '50%',
                                            background: 'var(--metallic-blue)',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 4px 15px rgba(58, 122, 254, 0.3)',
                                            transition: 'transform 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    >
                                        <Phone size={24} fill="white" />
                                    </a>
                                    <a
                                        href="https://wa.me/919054156127?text=Hello%20Vijay%20Laxmi%20Steel%2C%20I%20am%20interested%20in%20your%20products.%20Please%20provide%20more%20information."
                                        title="WhatsApp"
                                        style={{
                                            width: '56px',
                                            height: '56px',
                                            borderRadius: '50%',
                                            background: '#25D366',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                                            transition: 'transform 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    >
                                        <MessageSquare size={24} fill="white" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/vijaylaxmisteel?igsh=YTl4aW9reDNnYmc1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Instagram"
                                        style={{
                                            width: '56px',
                                            height: '56px',
                                            borderRadius: '50%',
                                            background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 4px 15px rgba(220, 39, 67, 0.3)',
                                            transition: 'transform 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    >
                                        <Instagram size={24} />
                                    </a>
                                </div>

                                <a
                                    href="mailto:vijaylaxmisteel1@gmail.com"
                                    style={{
                                        color: 'rgba(255,255,255,0.6)',
                                        textAlign: 'center',
                                        fontSize: '0.85rem',
                                        textDecoration: 'none',
                                        fontWeight: 500,
                                        letterSpacing: '0.5px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <Mail size={16} /> vijaylaxmisteel1@gmail.com
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
