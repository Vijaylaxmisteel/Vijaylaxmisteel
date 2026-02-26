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
        <div style={{ background: '#fff', padding: '45px 5%', borderBottom: '1px solid var(--soft-steel)' }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '40px',
                flexWrap: 'wrap'
            }}>
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            flex: '1 1 240px',
                            paddingLeft: '20px',
                            borderLeft: index === 0 ? 'none' : '1px solid var(--soft-steel)'
                        }}
                    >
                        <div style={{ color: 'var(--metallic-blue)' }}>
                            {React.cloneElement(item.icon, { size: 28 })}
                        </div>
                        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-brand)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            {item.text}
                        </span>
                    </motion.div>
                ))}
            </div>
            <style jsx>{`
        @media (max-width: 991px) {
          div > div > div { border-left: none !important; border-bottom: 1px solid var(--soft-steel); padding-bottom: 20px; }
          div > div > div:last-child { border-bottom: none !important; }
        }
      `}</style>
        </div>
    );
};

export default TrustStrip;
