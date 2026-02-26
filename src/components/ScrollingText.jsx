import React from 'react';
import { motion } from 'framer-motion';

const ScrollingText = () => {
    const words = [
        "Stainless Steel", "Special Alloys", "Precision Manufacturing",
        "Industrial Grade", "Custom Fabrication", "Trusted Supplier",
        "ISO Certified", "Engineering Excellence", "Global Supply"
    ];

    return (
        <div style={{
            background: 'var(--primary-brand)',
            padding: '50px 0',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            display: 'flex',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
            <motion.div
                animate={{ x: [0, -1200] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 25,
                        ease: "linear"
                    }
                }}
                style={{ display: 'flex', gap: '80px', alignItems: 'center' }}
            >
                {[...words, ...words].map((word, index) => (
                    <span key={index} style={{
                        color: '#fff',
                        fontSize: '1.8rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        opacity: 0.6
                    }}>
                        {word} <span style={{ color: 'var(--metallic-blue)', margin: '0 30px' }}>/</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default ScrollingText;
