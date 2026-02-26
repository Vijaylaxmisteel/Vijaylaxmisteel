import React from 'react';
import { motion } from 'framer-motion';
import {
    Settings,
    BarChart,
    Truck,
    DollarSign,
    Heart,
    Globe,
    ShieldCheck,
    Leaf
} from 'lucide-react';

const WhyChooseUs = () => {
    const points = [
        { icon: <Settings />, title: "Advanced Facilities", desc: "State-of-the-art manufacturing units ensuring precision." },
        { icon: <BarChart />, title: "Custom Solutions", desc: "Tailored products as per technical drawings and standards." },
        { icon: <Truck />, title: "Timely Delivery", desc: "Efficient supply chain management for on-time fulfillment." },
        { icon: <DollarSign />, title: "Competitive Pricing", desc: "Best-in-class pricing without compromising on quality." },
        { icon: <ShieldCheck />, title: "ISO Compliance", desc: "Strict adherence to international quality and ISO standards." },
        { icon: <Globe />, title: "Pan-India Logistics", desc: "Seamless supply and support across all states in India." },
        { icon: <Leaf />, title: "Ethical Sourcing", desc: "Committed to sustainable and ethically sourced metal alloys." },
        { icon: <Heart />, title: "Customer Focus", desc: "Dedicated support ensuring maximum client satisfaction." }
    ];

    return (
        <section className="section" style={{ background: 'var(--bg-light)' }}>
            <div className="container">
                <h2 className="section-title">Why Choose Us</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                    gap: '25px',
                    marginTop: '50px'
                }}>
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '40px 30px',
                                border: '1px solid var(--soft-steel)',
                                borderRadius: '8px',
                                textAlign: 'center',
                                background: '#fff',
                                transition: 'var(--transition)'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.borderColor = 'var(--metallic-blue)';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.borderColor = 'var(--soft-steel)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{
                                color: 'var(--metallic-blue)',
                                marginBottom: '20px',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                {React.cloneElement(point.icon, { size: 36 })}
                            </div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: 'var(--text-heading)' }}>{point.title}</h3>
                            <p style={{ color: 'var(--text-paragraph)', fontSize: '0.95rem' }}>{point.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
