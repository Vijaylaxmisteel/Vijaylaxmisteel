import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Clock, Anchor } from 'lucide-react';

const TrustStrip = () => {
    const items = [
        { icon: <Clock />, text: "20+ Years Excellence" },
        { icon: <Anchor />, text: "Major Stockist" },
        { icon: <Truck />, text: "Global Logistics" },
        { icon: <ShieldCheck />, text: "Quality Inspected" }
    ];

    return (
        <div className="trust-strip">
            <div className="container trust-strip-container">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="trust-strip-item"
                    >
                        <div className="trust-strip-icon">
                            {React.cloneElement(item.icon, { size: 28 })}
                        </div>
                        <span className="trust-strip-text">
                            {item.text}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TrustStrip;
