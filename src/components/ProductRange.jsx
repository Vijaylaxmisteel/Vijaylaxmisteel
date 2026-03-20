import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const homeProducts = [
    { name: "Pipes & Tubes", img: "/images/products/ss tubes and pipes.jpeg", slug: "pipes-tubes" },
    { name: "Sheet / plates", img: "/images/products/steel coil.jpeg", slug: "sheet-plates" },
    { name: "Flanges", img: "/images/products/flanges.jpeg", slug: "flanges" },
    { name: "Pipe Fitting", img: "/images/products/pipe fitting.jpeg", slug: "pipe-fitting" },
    { name: "Special alloys", img: "/images/products/special alloys.jpeg", slug: "special-alloys" }
];

const ProductRange = () => {
    return (
        <section className="section" id="products" style={{ background: '#fff' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
                    <div>
                        <span style={{ color: 'var(--metallic-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Our Expertise</span>
                        <h2 style={{ fontSize: '2.5rem', marginTop: '10px' }}>Product Range</h2>
                    </div>
                    <Link to="/products" className="premium-btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        View Full Catalog <Search size={18} />
                    </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '30px' }}>
                    {homeProducts.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                borderRadius: '12px',
                                overflow: 'hidden',
                                background: 'var(--bg-light)',
                                border: '1px solid var(--soft-steel)',
                                transition: 'var(--transition)'
                            }}
                            whileHover={{
                                borderColor: 'var(--metallic-blue)',
                                transform: 'translateY(-10px)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                            }}
                        >
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '25px', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: 'var(--text-heading)' }}>{product.name}</h3>
                                <Link to={`/products/${product.slug}`}>
                                    <button className="premium-btn btn-metallic" style={{ width: '100%', padding: '12px', fontSize: '0.85rem' }}>
                                        View Technical Data
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductRange;
