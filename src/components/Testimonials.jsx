import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    { text: "Vijay Laxmi Steel has been our primary supplier for SS Pipes. Their commitment to quality and delivery timelines is unmatched.", author: "Project Director, Chemical Infrastructure" },
    { text: "Precision manufacturing at its best. The special alloy fittings we ordered were perfect as per our technical drawings.", author: "Head of Engineering, HVAC Solutions" },
    { text: "Excellent customer service and competitive pricing. Highly recommended for industrial metal requirements.", author: "Procurement Head, Pharma Manufacturing" }
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="section" style={{ background: '#fff' }}>
            <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
                <h2 className="section-title">Industrial Partnerships</h2>
                <div style={{ position: 'relative', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-light)', borderRadius: '12px', padding: '40px', border: '1px solid var(--soft-steel)' }}>
                    <Quote size={60} style={{ position: 'absolute', top: '20px', left: '20px', opacity: 0.05, color: 'var(--primary-brand)' }} />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p style={{ fontSize: '1.4rem', fontStyle: 'italic', marginBottom: '30px', color: 'var(--text-paragraph)', lineHeight: 1.6 }}>
                                "{testimonials[index].text}"
                            </p>
                            <div style={{ width: '40px', height: '2px', background: 'var(--industrial-orange)', margin: '0 auto 20px' }} />
                            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {testimonials[index].author}
                            </h4>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '40px' }}>
                    {testimonials.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setIndex(i)}
                            style={{
                                width: i === index ? '30px' : '10px',
                                height: '10px',
                                borderRadius: '5px',
                                background: i === index ? 'var(--metallic-blue)' : 'var(--soft-steel)',
                                cursor: 'pointer',
                                transition: 'var(--transition)'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
