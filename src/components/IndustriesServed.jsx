import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Beer, FlaskConical, Fuel, Zap, Droplets, Snowflake, Car, Building2 } from 'lucide-react';

const industryData = [
    { name: "Pharmaceutical", icon: <Stethoscope size={32} /> },
    { name: "Food & Beverage", icon: <Beer size={32} /> },
    { name: "Chemical & Petrochemical", icon: <FlaskConical size={32} /> },
    { name: "Oil & Gas", icon: <Fuel size={32} /> },
    { name: "Power & Energy", icon: <Zap size={32} /> },
    { name: "Dairy Processing", icon: <Droplets size={32} /> },
    { name: "HVAC & Refrigeration", icon: <Snowflake size={32} /> },
    { name: "Automobile", icon: <Car size={32} /> },
    { name: "Infrastructure", icon: <Building2 size={32} /> }
];

const IndustriesServed = () => {
    // Duplicate data for infinite scroll effect
    const marqueeData = [...industryData, ...industryData];

    return (
        <section className="section" id="industries" style={{ background: 'var(--charcoal-black)', color: 'white', overflow: 'hidden', padding: '100px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="section-title" style={{ color: 'white', margin: 0 }}>Industries We Serve</h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '15px', maxWidth: '600px', margin: '15px auto 0' }}>
                        Providing precision-engineered stainless steel solutions for critical industrial applications worldwide.
                    </p>
                </div>
            </div>

            <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
                <motion.div
                    animate={{ x: [0, -280 * industryData.length - 20 * industryData.length] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear"
                        }
                    }}
                    style={{
                        display: 'flex',
                        gap: '20px',
                        width: 'max-content',
                        padding: '20px 0'
                    }}
                >
                    {marqueeData.map((industry, index) => (
                        <div
                            key={index}
                            style={{
                                width: '280px',
                                padding: '40px 30px',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '12px',
                                textAlign: 'center',
                                background: 'rgba(255,255,255,0.03)',
                                backdropFilter: 'blur(10px)',
                                flexShrink: 0,
                                transition: 'var(--transition)'
                            }}
                        >
                            <div style={{
                                color: 'var(--metallic-blue)',
                                marginBottom: '25px',
                                display: 'flex',
                                justifyContent: 'center',
                                opacity: 0.8
                            }}>
                                {industry.icon}
                            </div>
                            <span style={{
                                fontWeight: 700,
                                letterSpacing: '1.5px',
                                textTransform: 'uppercase',
                                fontSize: '0.9rem',
                                color: '#fff',
                                display: 'block'
                            }}>
                                {industry.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Fades for Smooth Edges */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '15%',
                    height: '100%',
                    background: 'linear-gradient(to right, var(--charcoal-black), transparent)',
                    zIndex: 2,
                    pointerEvents: 'none'
                }} />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '15%',
                    height: '100%',
                    background: 'linear-gradient(to left, var(--charcoal-black), transparent)',
                    zIndex: 2,
                    pointerEvents: 'none'
                }} />
            </div>
        </section>
    );
};

export default IndustriesServed;
