import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    History,
    Target,
    MapPin,
    Package,
    Settings,
    Award,
    CheckCircle,
    TrendingUp,
    Eye,
    Users,
    Briefcase
} from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="about-page">
            {/* 1. HERO / INTRO SECTION */}
            <section style={{
                minHeight: '60vh',
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '140px 5% 100px',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("/images/hero-3.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                    overflow: 'hidden'
                }}>
                    <div style={{ width: '100%', height: '100%', background: 'rgba(15, 17, 21, 0.85)' }} />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', marginBottom: '20px' }}>
                        About Vijay Laxmi Steel
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#D1D5DB', maxWidth: '800px', margin: '0 auto', fontWeight: 300 }}>
                        Trusted Manufacturers & Suppliers of Stainless Steel and Special Alloy Products
                    </p>
                </motion.div>
            </section>

            {/* 2. COMPANY OVERVIEW SECTION */}
            <section className="section container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ width: '50px', height: '4px', background: 'var(--metallic-blue)', marginBottom: '30px' }} />
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '25px', lineHeight: 1.2 }}>Over Two Decades of <br /><span style={{ color: 'var(--metallic-blue)', fontWeight: 300 }}>Industrial Leadership</span></h2>
                    <p style={{ color: 'var(--text-paragraph)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                        Vijay Laxmi Steel is a reputed name in the stainless steel industry with over two decades of experience in manufacturing, stockholding, and supplying quality stainless steel products. We have built a strong business presence across Gujarat, Maharashtra, and South India, serving diverse industrial sectors with unwavering commitment.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="/images/home-about.jpg" alt="About Overview" style={{ borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                </motion.div>
            </section>

            {/* 3. WHAT WE DO SECTION */}
            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <h2 className="section-title">What We Do</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px', marginTop: '50px' }}>
                        {[
                            { icon: <Settings />, title: "Manufacturing", desc: "State-of-the-art production of high-grade steel components." },
                            { icon: <Package />, title: "Stockholding", desc: "Ready inventory of diverse metal products for urgent supply." },
                            { icon: <Briefcase />, title: "Custom Fabrication", desc: "Tailored manufacturing based on technical drawings and standards." },
                            { icon: <Target />, title: "Material Supply", desc: "Specialists in Stainless Steel, Non-Ferrous Metals & Alloys." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{ background: '#fff', padding: '40px 30px', borderRadius: '8px', border: '1px solid var(--soft-steel)', textAlign: 'center' }}
                                whileHover={{ y: -5, borderColor: 'var(--metallic-blue)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                            >
                                <div style={{ color: 'var(--metallic-blue)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                    {React.cloneElement(item.icon, { size: 36 })}
                                </div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-paragraph)', fontSize: '0.95rem' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. OUR PRODUCT & MATERIAL EXPERTISE */}
            <section className="section container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Material <span style={{ color: 'var(--metallic-blue)' }}>Expertise</span></h2>
                        <p style={{ color: 'var(--text-paragraph)', marginBottom: '30px' }}>Our deep understanding of metallurgy allows us to provide specialized alloys for the most demanding environments.</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                            {[
                                "Stainless Steel", "Inconel", "Incoloy", "Duplex Steel",
                                "Cupro Nickel", "Hastelloy", "Zirconium", "Titanium"
                            ].map((mat, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', fontWeight: 600, color: 'var(--primary-brand)' }}>
                                    <div style={{ width: '8px', height: '8px', background: 'var(--metallic-blue)', borderRadius: '50%' }} />
                                    {mat}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <img src="/images/hero-4.jpg" alt="Materials" style={{ borderRadius: '12px', border: '1px solid var(--soft-steel)' }} />
                    </motion.div>
                </div>
            </section>

            {/* 5. QUALITY & COMMITMENT SECTION */}
            <section className="section" style={{ background: 'var(--charcoal-black)', color: 'white' }}>
                <div className="container">
                    <h2 className="section-title" style={{ color: 'white' }}>Quality & Commitment</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginTop: '50px' }}>
                        {[
                            { icon: <CheckCircle />, title: "Quality Assurance", desc: "Rigorous testing and certification for all dispatched materials." },
                            { icon: <TrendingUp />, title: "Reliability", desc: "Consistent performance and material integrity across batches." },
                            { icon: <History />, title: "Timely Delivery", desc: "Optimized supply chain to meet your critical project timelines." },
                            { icon: <Users />, title: "Customer Success", desc: "Tailored support to help you achieve your industrial goals." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                style={{ textAlign: 'center' }}
                            >
                                <div style={{ color: 'var(--metallic-blue)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                    {React.cloneElement(item.icon, { size: 40 })}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', color: 'white' }}>{item.title}</h3>
                                <p style={{ color: '#D1D5DB', fontSize: '0.95rem' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. REGIONAL PRESENCE */}
            <section className="section container">
                <h2 className="section-title">Regional Presence</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
                    {[
                        { region: "Gujarat", desc: "Major industrial hub with active supply networks." },
                        { region: "Maharashtra", desc: "Strategic presence in Mumbai and across the state." },
                        { region: "South India", desc: "Growing foothold in Karnataka, Tamil Nadu & beyond." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{ flex: '1 1 300px', padding: '30px', background: 'var(--bg-light)', borderRadius: '8px', borderLeft: '4px solid var(--metallic-blue)' }}
                        >
                            <h3 style={{ marginBottom: '10px' }}>{item.region}</h3>
                            <p style={{ color: 'var(--text-paragraph)' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 7. EXPERIENCE STATS SECTION */}
            <section className="section" style={{ background: 'var(--primary-brand)', color: 'white' }}>
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', textAlign: 'center' }}>
                    {[
                        { val: "20+", label: "Years of Experience" },
                        { val: "500+", label: "Product Varieties" },
                        { val: "1000+", label: "Industries Served" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h2 style={{ fontSize: '3.5rem', color: 'var(--metallic-blue)', marginBottom: '10px' }}>{stat.val}</h2>
                            <p style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#D1D5DB' }}>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 8. MISSION & VISION SECTION */}
            <section className="section container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ padding: '40px', background: 'var(--bg-light)', borderRadius: '12px', position: 'relative', overflow: 'hidden' }}
                    >
                        <Eye size={100} style={{ position: 'absolute', top: '10px', right: '10px', opacity: 0.05 }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <Target color="var(--metallic-blue)" /> Our Mission
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-paragraph)', lineHeight: 1.6 }}>
                            "To deliver high-quality stainless steel and alloy products that meet international standards and customer requirements."
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ padding: '40px', background: 'var(--charcoal-black)', color: 'white', borderRadius: '12px', position: 'relative', overflow: 'hidden' }}
                    >
                        <Award size={100} style={{ position: 'absolute', bottom: '10px', right: '10px', opacity: 0.1 }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px', color: 'white' }}>
                            <TrendingUp color="var(--metallic-blue)" /> Our Vision
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: '#D1D5DB', lineHeight: 1.6 }}>
                            "To be a trusted and leading industrial metal supplier known for quality, reliability, and customer satisfaction."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 9. CTA SECTION */}
            <section style={{ padding: '100px 5%', textAlign: 'center', background: 'linear-gradient(rgba(15, 17, 21, 0.95), rgba(15, 17, 21, 0.95)), url("/images/cta-bg.jpg")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', marginBottom: '30px' }}>
                        Partner with a <span style={{ color: 'var(--metallic-blue)' }}>Trusted Steel Supplier</span>
                    </h2>
                    <p style={{ color: '#D1D5DB', fontSize: '1.2rem', marginBottom: '50px', maxWidth: '700px', margin: '0 auto 50px' }}>
                        Get in touch with Vijay Laxmi Steel experts for technical consultation and project enquiries.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <button className="premium-btn btn-metallic">Get a Quote</button>
                        </Link>
                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <button className="premium-btn btn-outline-white">Contact Us</button>
                        </Link>
                        <a href="https://wa.me/919054156127?text=Hello%20Vijay%20Laxmi%20Steel%2C%20I%20am%20interested%20in%20your%20products.%20Please%20provide%20more%20information." target="_blank" rel="noopener noreferrer" className="premium-btn btn-orange" style={{ background: '#25D366', borderColor: '#25D366', textDecoration: 'none' }}>
                            WhatsApp Now
                        </a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutPage;
