import React from 'react';
import { Mail, Phone, MapPin, Instagram, ShieldCheck, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="contact" style={{ background: 'var(--primary-brand)', color: 'rgba(255,255,255,0.7)', padding: 'clamp(10px, 5vw, 80px) 5% 15px', marginTop: 0 }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px' }}>
                <div>
                    {/* Logo Container for better visibility */}
                    <div style={{
                        background: 'white',
                        padding: '10px',
                        borderRadius: '4px',
                        display: 'inline-block',
                        marginBottom: '25px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                    }}>
                        <Link to="/">
                            <img src="/images/logo.png" alt="Vijay Laxmi Steel" style={{ height: '50px' }} />
                        </Link>
                    </div>
                    <p style={{ fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '400px' }}>
                        A trusted leader in the manufacturing and supply of high-grade Stainless Steel and Non-Ferrous metal products. Over 20 years of engineering excellence and industrial trust.
                    </p>
                    <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                        <a href="https://www.instagram.com/vijaylaxmisteel?igsh=YTl4aW9reDNnYmc1" target="_blank" rel="noopener noreferrer" style={{
                            color: 'white',
                            background: 'rgba(255,255,255,0.1)',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'var(--transition)'
                        }} onMouseOver={(e) => e.currentTarget.style.background = 'var(--metallic-blue)'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                            <Instagram size={18} />
                        </a>
                        <a href="https://wa.me/919054156127" target="_blank" rel="noopener noreferrer" style={{
                            color: 'white',
                            background: 'rgba(255,255,255,0.1)',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'var(--transition)'
                        }} onMouseOver={(e) => e.currentTarget.style.background = '#25D366'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                            <MessageSquare size={18} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 style={{ color: 'white', marginBottom: '30px', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Quick Navigation</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '0.95rem' }}>
                        <li><Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</Link></li>
                        <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.6)' }}>About Us</Link></li>
                        <li><Link to="/products" style={{ color: 'rgba(255,255,255,0.6)' }}>Our Products</Link></li>
                        <li><Link to="/quality" style={{ color: 'rgba(255,255,255,0.6)' }}>Quality Assurance</Link></li>
                        <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.6)' }}>Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ color: 'white', marginBottom: '30px', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Our Locations</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '0.9rem' }}>
                        <div>
                            <span style={{ color: 'white', fontWeight: 700, display: 'block', fontSize: '0.8rem', marginBottom: '5px' }}>HEAD OFFICE</span>
                            <span>Shop No 5, 6th Kumbharwada, 126, Trimbak Parsuram Street, Girgaon, Mumbai-400004</span>
                        </div>
                        <div>
                            <span style={{ color: 'white', fontWeight: 700, display: 'block', fontSize: '0.8rem', marginBottom: '5px' }}>BRANCH OFFICE</span>
                            <span>PLOT NO 239, LAD COMPLEX, SHOP NO 10, GIDC UMBERGAON, Gujarat - 396171</span>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                borderTop: '1px solid rgba(255,255,255,0.08)',
                marginTop: '60px',
                padding: '30px 0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '15px 25px',
                fontSize: '0.9rem',
                color: 'white'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldCheck size={18} color="var(--metallic-blue)" />
                    <span>GSTIN: 24ASBPD9903A1ZE</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Mail size={18} color="var(--metallic-blue)" />
                    <a href="mailto:vijaylaxmisteel1@gmail.com" style={{ color: 'inherit' }}>vijaylaxmisteel1@gmail.com</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={18} color="var(--metallic-blue)" />
                    <a href="tel:+919054156127" style={{ color: 'inherit' }}>+91 90541 56127</a>
                </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '20px', paddingTop: '15px', textAlign: 'center', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>
                <p>&copy; {new Date().getFullYear()} Vijay Laxmi Steel. All Rights Reserved. | Premium Industrial Metal Solutions</p>
            </div>
        </footer>
    );
};

export default Footer;
