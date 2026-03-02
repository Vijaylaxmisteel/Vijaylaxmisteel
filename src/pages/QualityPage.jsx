import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, FileCheck, CheckCircle2, FlaskConical, ClipboardCheck } from 'lucide-react';

const QualityPage = () => {
    const qualityStandards = [
        {
            title: "Material Certification",
            desc: "Every batch of raw material is sourced from certified mills and accompanied by mill test certificates (MTC).",
            icon: <FileCheck className="text-metallic-blue" size={32} />
        },
        {
            title: "Precision Testing",
            desc: "Rigorous dimensional and performance testing using advanced calibrated instruments ensure zero-defect tolerance.",
            icon: <FlaskConical className="text-metallic-blue" size={32} />
        },
        {
            title: "Global Compliance",
            desc: "Our products adhere to international standards including ASTM, ASME, DIN, and ISO specifications.",
            icon: <Award className="text-metallic-blue" size={32} />
        }
    ];

    const testingProcedures = [
        "Chemical Composition Analysis (Spectro Test)",
        "Mechanical Property Testing (Tensile & Hardness)",
        "Hydrostatic and Pneumatic Testing",
        "Non-Destructive Testing (UT, DPI, MPI)",
        "Surface Finish & Roughness Measurement",
        "Visual & Dimensional Inspection",
        "All our materials are inspected and certified by an ASNT NDT Level II qualified professional."
    ];

    return (
        <div className="quality-page" style={{ background: 'var(--bg-light)', minHeight: '100vh' }}>
            {/* Hero Section */}
            <section style={{
                padding: '120px 5% 80px',
                width: '100%',
                overflow: 'hidden',
                background: 'linear-gradient(to bottom, rgba(15,17,21,0.9), rgba(15,17,21,0.7)), url("/images/products/steel coil.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                textAlign: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span style={{
                        color: 'var(--metallic-blue)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        fontSize: '0.9rem',
                        display: 'block',
                        marginBottom: '15px'
                    }}>Commitment to Excellence</span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px', color: '#FFFFFF' }}>Quality Assurance</h1>
                    <div style={{ width: '80px', height: '4px', background: 'var(--metallic-blue)', margin: '0 auto 30px' }}></div>
                    <p style={{ color: '#D1D5DB', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', fontWeight: 300 }}>
                        At Vijay Laxmi Steel, quality is not just a standard—it's our reputation. We implement rigorous quality control protocols at every stage of production and supply.
                    </p>
                </motion.div>
            </section>

            {/* Quality Standards Grid */}
            <section className="section container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '15px' }}>Our Quality Standards</h2>
                    <p style={{ color: 'var(--text-paragraph)', maxWidth: '600px', margin: '0 auto' }}>
                        We follow a comprehensive quality management system that ensures consistency and reliability across our entire product range.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {qualityStandards.map((std, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            style={{
                                padding: '40px',
                                background: 'white',
                                borderRadius: '16px',
                                border: '1px solid var(--soft-steel)',
                                textAlign: 'center',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                            }}
                        >
                            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                {std.icon}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'var(--text-heading)' }}>{std.title}</h3>
                            <p style={{ color: 'var(--text-paragraph)', lineHeight: 1.7 }}>{std.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testing Procedures Section */}
            <section style={{ background: '#0F1115', color: 'white', padding: '100px 5%' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '25px', color: 'white' }}>Rigorous Testing Procedures</h2>
                        <p style={{ color: '#9CA3AF', marginBottom: '40px', fontSize: '1.1rem', lineHeight: 1.8 }}>
                            Our dedicated quality control team conducts specialized tests to verify material integrity, durability, and compliance with project specifications.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--metallic-blue)' }}>
                                <h4 style={{ color: '#9CA3AF', marginBottom: '10px' }}>ISO Certified</h4>
                                <p style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>Operations compliant with ISO 9001:2015</p>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--metallic-blue)' }}>
                                <h4 style={{ color: '#9CA3AF', marginBottom: '10px' }}>100% Traceability</h4>
                                <p style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>Complete raw material trace-back logs</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'rgba(255,255,255,0.03)',
                            padding: '40px',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}
                    >
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {testingProcedures.map((item, idx) => (
                                <li key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    marginBottom: '20px',
                                    fontSize: '1.05rem',
                                    color: '#E5E7EB'
                                }}>
                                    <CheckCircle2 size={20} className="text-metallic-blue" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Quality Management & Sourcing */}
            <section className="section container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span style={{ color: 'var(--metallic-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>Our Methodology</span>
                    <h2 style={{ fontSize: '2.5rem', marginTop: '10px' }}>Quality Management & Sourcing</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            padding: '40px',
                            background: 'white',
                            borderRadius: '16px',
                            border: '1px solid var(--soft-steel)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                        }}
                    >
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: 'var(--text-heading)' }}>Tier-1 Sourcing</h3>
                        <p style={{ color: 'var(--text-paragraph)', lineHeight: 1.8 }}>
                            We partner exclusively with Tier-1 manufacturing mills that maintain international accreditation. Every single kilogram of material is sourced with a Mill Test Certificate (MTC) to ensure chemical and mechanical properties match our clients' exacting standards.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            padding: '40px',
                            background: 'var(--metallic-blue)',
                            color: 'white',
                            borderRadius: '16px',
                            boxShadow: '0 20px 40px rgba(58, 122, 254, 0.2)'
                        }}
                    >
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: 'white' }}>3rd Party Inspections</h3>
                        <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8 }}>
                            We offer 100% transparency by supporting third-party inspections (TPI) from renowned agencies such as TUV, DNV, BV, and Lloyd's. Our facility is equipped to facilitate witness testing for projects requiring the highest levels of safety and reliability.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            padding: '40px',
                            background: 'white',
                            borderRadius: '16px',
                            border: '1px solid var(--soft-steel)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                        }}
                    >
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: 'var(--text-heading)' }}>Zero-Defect Policy</h3>
                        <p style={{ color: 'var(--text-paragraph)', lineHeight: 1.8 }}>
                            Our quality culture is built on a zero-defect philosophy. From surface finish inspection to ultrasonic testing, we ensure that every product delivered to your site is ready for immediate deployment without the need for further on-site verification.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container" style={{ marginBottom: '100px' }}>
                <div style={{
                    background: 'var(--primary-brand)',
                    padding: '80px 40px',
                    borderRadius: '24px',
                    textAlign: 'center',
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.4, 0.3]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        style={{
                            position: 'absolute',
                            top: '-50%',
                            left: '-50%',
                            width: '200%',
                            height: '200%',
                            background: 'radial-gradient(circle, rgba(58,122,254,0.15) 0%, transparent 70%)',
                            zIndex: 0
                        }}
                    />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <ShieldCheck size={60} style={{ margin: '0 auto 30px', color: 'var(--metallic-blue)' }} />
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Trust in Every Ton</h2>
                        <p style={{ fontSize: '1.2rem', color: '#D1D5DB', maxWidth: '700px', margin: '0 auto 40px' }}>
                            We provide full documentation and technical support for all our products. Contact our quality department for specific testing requests.
                        </p>
                        <a href="/contact">
                            <button className="premium-btn btn-metallic" style={{ padding: '15px 40px' }}>
                                Contact Quality Department
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QualityPage;
