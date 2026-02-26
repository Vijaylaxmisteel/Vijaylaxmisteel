import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            style={{
                background: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--soft-steel)',
                transition: 'var(--transition)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'var(--metallic-blue)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                }}>
                    {product.category}
                </div>
            </div>

            <div style={{ padding: '25px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--text-heading)' }}>{product.name}</h3>
                <p style={{ color: 'var(--text-paragraph)', fontSize: '0.9rem', marginBottom: '25px', lineHeight: 1.6, flexGrow: 1 }}>
                    {product.tagline}
                </p>

                <Link
                    to={`/products/${product.slug}`}
                    className="product-link"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--metallic-blue)',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}
                >
                    View Details <ArrowRight size={16} />
                </Link>
            </div>
        </motion.div>
    );
};

export default ProductCard;
