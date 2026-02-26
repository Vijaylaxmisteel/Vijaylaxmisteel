import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { CheckCircle, ArrowRight, Table, Briefcase, Award, ShieldCheck } from 'lucide-react';
import ProductCard from '../components/ProductCard';

import CategoryWithVariants from '../components/CategoryWithVariants';

const ProductDetailPage = () => {
    const { slug } = useParams();
    const product = products.find((p) => p.slug === slug);

    // Unified variants data: prioritize product-specific data, then placeholder (only if needed), else empty
    const variantsData = product.variants || [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!product) {
        return (
            <div className="container" style={{ padding: '200px 5%', textAlign: 'center' }}>
                <h2>Product Not Found</h2>
                <Link to="/products" className="premium-btn btn-metallic">Back to Catalog</Link>
            </div>
        );
    }

    const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

    return (
        <div className="product-detail-page">
            {/* 1. HERO SECTION */}
            <section style={{
                padding: '140px 5% 100px',
                background: 'linear-gradient(135deg, rgba(15, 17, 21, 1) 0%, rgba(15, 17, 21, 0.8) 100%)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '60%',
                    height: '100%',
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.25,
                    zIndex: 0,
                    maskImage: 'linear-gradient(to left, black, transparent)'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{ color: 'var(--industrial-orange)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>
                            {product.category} Solutions
                        </span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '20px 0', lineHeight: 1.1, color: '#FFFFFF' }}>
                            {product.name}
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#D1D5DB', marginBottom: '40px', fontWeight: 300 }}>
                            {product.tagline}
                        </p>
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <button className="premium-btn btn-metallic">Enquire Now</button>
                            <a href="https://wa.me/919054156127?text=Hello%20Vijay%20Laxmi%20Steel%2C%20I%20am%20interested%20in%20your%20products.%20Please%20provide%20more%20information." target="_blank" rel="noopener noreferrer" className="premium-btn btn-orange" style={{ background: '#25D366', borderColor: '#25D366', textDecoration: 'none' }}>
                                WhatsApp Enquiry
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative' }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 30px 60px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* 2. PRODUCT OVERVIEW */}
            <section className="section container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div style={{ width: '40px', height: '4px', background: 'var(--metallic-blue)', marginBottom: '30px' }} />
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '25px' }}>Product Overview</h2>
                    <p style={{ color: 'var(--text-paragraph)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                        {product.description}
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ background: 'var(--bg-light)', padding: '40px', borderRadius: '12px' }}
                >
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <ShieldCheck color="var(--metallic-blue)" /> Material Highlights
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {product.benefits.map((benefit, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-heading)', fontWeight: 600 }}>
                                <CheckCircle size={18} color="var(--metallic-blue)" /> {benefit}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* 3. SPECIFICATIONS */}
            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                        <Table color="var(--metallic-blue)" size={32} />
                        <h2 style={{ fontSize: '2.2rem', margin: 0 }}>Technical Specifications</h2>
                    </div>
                    <div style={{
                        background: 'white',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        border: '1px solid var(--soft-steel)'
                    }}>
                        {product.specifications.map((spec, i) => (
                            <div key={i} style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 2fr',
                                borderBottom: i === product.specifications.length - 1 ? 'none' : '1px solid var(--soft-steel)',
                                padding: '20px 30px'
                            }}>
                                <div style={{ fontWeight: 700, color: 'var(--primary-brand)', fontSize: '0.95rem' }}>{spec.label}</div>
                                <div style={{ color: 'var(--text-paragraph)', fontSize: '0.95rem' }}>{spec.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3.5 VARIANTS & GRADES */}
            {variantsData && variantsData.length > 0 && (
                <section className="section container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                        <div style={{ width: '40px', height: '4px', background: 'var(--industrial-orange)' }} />
                        <h2 style={{ fontSize: '2.2rem', margin: 0 }}>Available Variants & Grades</h2>
                    </div>
                    <div style={{
                        background: 'white',
                        padding: '40px',
                        borderRadius: '16px',
                        border: '1px solid var(--soft-steel)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                    }}>
                        <CategoryWithVariants data={variantsData} />
                    </div>
                </section>
            )}

            {/* 4. APPLICATIONS */}
            <section className="section container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <Briefcase color="var(--metallic-blue)" size={40} style={{ marginBottom: '20px' }} />
                    <h2 style={{ fontSize: '2.5rem' }}>Industrial Applications</h2>
                    <p style={{ color: 'var(--text-paragraph)', maxWidth: '700px', margin: '20px auto 0' }}>
                        Our {product.name} are trusted across these critical industrial sectors.
                    </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    {product.applications.map((app, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            style={{
                                background: 'var(--bg-light)',
                                padding: '30px 20px',
                                borderRadius: '8px',
                                textAlign: 'center',
                                border: '1px solid var(--soft-steel)',
                                fontSize: '1rem',
                                fontWeight: 700,
                                color: 'var(--primary-brand)'
                            }}
                        >
                            {app}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 6. CTA ENQUIRY SECTION */}
            <section style={{ padding: '100px 5%', background: 'var(--primary-brand)', color: 'white', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', marginBottom: '30px' }}>
                        Get a Quote for <br /><span style={{ color: 'var(--industrial-orange)' }}>{product.name}</span>
                    </h2>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <button className="premium-btn btn-metallic">Request Callback</button>
                        </Link>
                        <a href="tel:+919054156127" className="premium-btn btn-outline-white" style={{ textDecoration: 'none' }}>Call Sales Team</a>
                    </div>
                </motion.div>
            </section>

            {/* 7. RELATED PRODUCTS */}
            <section className="section container">
                <h2 style={{ fontSize: '2rem', marginBottom: '50px', textAlign: 'center' }}>Explore Related Materials</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
                    {relatedProducts.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductDetailPage;
