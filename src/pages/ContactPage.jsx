import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, Truck, Headphones, ExternalLink, Instagram } from 'lucide-react';
import { products } from '../data/products';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        product: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form Data:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-page" style={{ background: 'var(--bg-light)', minHeight: '100vh' }}>

            {/* 1. HERO SECTION */}
            <section style={{
                padding: '140px 5% 100px',
                width: '100%',
                overflow: 'hidden',
                background: 'linear-gradient(rgba(15, 17, 21, 0.95), rgba(15, 17, 21, 0.95)), url("/images/hero-1.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                textAlign: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '20px', fontWeight: 800, color: '#FFFFFF' }}>Contact Us</h1>
                    <p style={{ fontSize: '1.2rem', color: '#D1D5DB', maxWidth: '700px', margin: '0 auto', fontWeight: 300 }}>
                        Get in touch for specialized pricing, detailed technical specifications, or bulk industrial orders.
                    </p>
                </motion.div>
            </section>

            {/* 2. QUICK CONTACT ACTIONS */}
            <section className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    {[
                        { icon: <Instagram size={24} />, label: "Follow Us", sub: "Instagram", color: "#E1306C", link: "https://www.instagram.com/vijaylaxmisteel?igsh=YTl4aW9reDNnYmc1" },
                        { icon: <MessageSquare size={24} />, label: "WhatsApp Now", sub: "+91 90541 56127", color: "#25D366", link: "https://wa.me/919054156127?text=Hello%20Vijay%20Laxmi%20Steel%2C%20I%20am%20interested%20in%20your%20products.%20Please%20provide%20more%20information." },
                        { icon: <Phone size={24} />, label: "Call Now", sub: "+91 90541 56127", color: "var(--metallic-blue)", link: "tel:+919054156127" },
                        { icon: <Mail size={24} />, label: "Email Us", sub: "vijaylaxmisteel1@gmail.com", color: "var(--industrial-orange)", link: "mailto:vijaylaxmisteel1@gmail.com" }
                    ].map((action, i) => (
                        <motion.a
                            key={i}
                            href={action.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            style={{
                                background: 'white',
                                padding: '30px',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                border: `1px solid var(--soft-steel)`,
                                textDecoration: 'none',
                                color: 'inherit'
                            }}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                background: `${action.color}15`,
                                color: action.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {action.icon}
                            </div>
                            <div>
                                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-heading)' }}>{action.label}</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-paragraph)' }}>{action.sub}</div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>

            {/* 3 & 4. FORM & BUSINESS INFO */}
            <section className="section container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', marginTop: '40px' }}>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ background: 'white', padding: '50px', borderRadius: '20px', boxShadow: '0 30px 60px rgba(0,0,0,0.05)', border: '1px solid var(--soft-steel)' }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: 'var(--text-heading)' }}>Send an Enquiry</h2>

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{ textAlign: 'center', padding: '40px 0' }}
                        >
                            <CheckCircle2 size={60} color="var(--metallic-blue)" style={{ marginBottom: '20px' }} />
                            <h3 style={{ marginBottom: '10px' }}>Thank You!</h3>
                            <p style={{ color: 'var(--text-paragraph)' }}>Your enquiry has been received. Our team will contact you shortly.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div className="input-group">
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-heading)' }}>Full Name</label>
                                    <input type="text" name="name" required placeholder="John Doe" onChange={handleChange} style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--soft-steel)', background: 'var(--bg-light)' }} />
                                </div>
                                <div className="input-group">
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-heading)' }}>Company</label>
                                    <input type="text" name="company" placeholder="Business Name" onChange={handleChange} style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--soft-steel)', background: 'var(--bg-light)' }} />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div className="input-group">
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-heading)' }}>Phone Number</label>
                                    <input type="tel" name="phone" required placeholder="+91 00000 00000" onChange={handleChange} style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--soft-steel)', background: 'var(--bg-light)' }} />
                                </div>
                                <div className="input-group">
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-heading)' }}>Email Address</label>
                                    <input type="email" name="email" required placeholder="john@example.com" onChange={handleChange} style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--soft-steel)', background: 'var(--bg-light)' }} />
                                </div>
                            </div>

                            <div className="input-group">
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-heading)' }}>Product Interested In</label>
                                <select name="product" onChange={handleChange} style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--soft-steel)', background: 'var(--bg-light)' }}>
                                    <option value="">Select a Product</option>
                                    {products.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                                    <option value="Other">Other / Custom Requirement</option>
                                </select>
                            </div>

                            <div className="input-group">
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-heading)' }}>Message / Requirements</label>
                                <textarea name="message" rows="4" placeholder="How can we help you?" onChange={handleChange} style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--soft-steel)', background: 'var(--bg-light)', resize: 'none' }}></textarea>
                            </div>

                            <button type="submit" className="premium-btn btn-metallic" style={{ width: '100%', padding: '16px', fontSize: '1rem', marginTop: '10px' }}>
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    )}
                </motion.div>

                {/* Business Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ background: 'white', padding: '40px', borderRadius: '20px', border: '1px solid var(--soft-steel)' }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '30px', color: 'var(--text-heading)' }}>Corporate Registry</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                                <div style={{
                                    padding: '20px',
                                    borderRadius: '12px',
                                    background: 'var(--bg-light)',
                                    border: '1px solid var(--soft-steel)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                        <MapPin size={20} color="var(--metallic-blue)" />
                                        <div style={{ fontWeight: 800, color: 'var(--primary-brand)', fontSize: '0.9rem' }}>Headquarters (Mumbai)</div>
                                    </div>
                                    <div style={{ color: 'var(--text-paragraph)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                                        Shop No 5, 6th Kumbharwada, 126, <br />
                                        Trimbak Parsuram Street, <br />
                                        Girgaon, Mumbai-400004
                                    </div>
                                </div>
                                <div style={{
                                    padding: '20px',
                                    borderRadius: '12px',
                                    background: 'var(--bg-light)',
                                    border: '1px solid var(--soft-steel)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                        <MapPin size={20} color="var(--metallic-blue)" />
                                        <div style={{ fontWeight: 800, color: 'var(--primary-brand)', fontSize: '0.9rem' }}>Branch Office</div>
                                    </div>
                                    <div style={{ color: 'var(--text-paragraph)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                                        PLOT NO 239, LAD COMPLEX, <br />
                                        SHOP NO 10, GIDC UMBERGAON, <br />
                                        Gujarat - 396171
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <Clock size={24} color="var(--metallic-blue)" style={{ flexShrink: 0 }} />
                                <div>
                                    <div style={{ fontWeight: 800, color: 'var(--primary-brand)', marginBottom: '5px' }}>Business Hours</div>
                                    <div style={{ color: 'var(--text-paragraph)', fontSize: '0.95rem' }}>Monday – Saturday: 10:00 AM – 7:00 PM <br />Sunday: Closed</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <ShieldCheck size={24} color="var(--metallic-blue)" style={{ flexShrink: 0 }} />
                                <div>
                                    <div style={{ fontWeight: 800, color: 'var(--primary-brand)', marginBottom: '5px' }}>Compliance</div>
                                    <div style={{ color: 'var(--text-paragraph)', fontSize: '0.95rem' }}>GSTIN: 24ASBPD9903A1ZE <br />ISO 9001:2015 Certified</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ background: 'var(--primary-brand)', padding: '40px', borderRadius: '20px', color: 'white' }}
                    >
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Response Assurance</h4>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            Our material specialists usually respond to all technical enquiries within 24 business hours. For urgent site requirements, please use the direct WhatsApp link.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 5. MAP SECTION */}
            <section className="section" style={{ padding: '0 5% 100px' }}>
                <div style={{
                    width: '100%',
                    height: '450px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    border: '1px solid var(--soft-steel)'
                }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39666.51709852859!2d72.74694102658287!3d20.16395468085291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72b7bb3c68b0b%3A0xb50a76da7891f689!2sLad%20complex!5e0!3m2!1sen!2sin!4v1771626952673!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

            {/* 6. TRUST & ASSURANCE */}
            <section className="section" style={{ background: 'white' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
                    {[
                        { icon: <Truck size={32} />, title: "Pan-India Delivery", desc: "Reliable logistics network for timely delivery across all states." },
                        { icon: <ShieldCheck size={32} />, title: "Quality Guaranteed", desc: "All materials come with factory test certificates (TC)." },
                        { icon: <Headphones size={32} />, title: "Technical Support", desc: "Consult our engineers for material selection guidance." }
                    ].map((item, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{ color: 'var(--metallic-blue)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{item.title}</h4>
                            <p style={{ color: 'var(--text-paragraph)', fontSize: '0.9rem' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. FINAL CTA */}
            <section style={{ padding: '80px 5%', background: 'var(--industrial-orange)', color: 'white', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.2rem', color: 'var(--charcoal-black)', marginBottom: '30px' }}>Ready to optimize your supply chain?</h2>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="https://wa.me/919054156127?text=Hello%20Vijay%20Laxmi%20Steel%2C%20I%20am%20interested%20in%20your%20products.%20Please%20provide%20more%20information." target="_blank" rel="noopener noreferrer" className="premium-btn btn-metallic" style={{ color: 'white', background: 'var(--charcoal-black)', textDecoration: 'none' }}>
                        Chat with an Expert
                    </a>
                    <a href="tel:+919054156127" className="premium-btn btn-outline" style={{ borderColor: 'var(--charcoal-black)', color: 'var(--charcoal-black)', textDecoration: 'none' }}>
                        Call Sales Team
                    </a>
                </div>
            </section>

            {/* MOBILE STICKY CTAs */}
            <div className="mobile-only" style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                background: 'white',
                padding: '12px 20px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '15px',
                boxShadow: '0 -10px 20px rgba(0,0,0,0.1)',
                zIndex: 5000
            }}>
                <a href="tel:+919054156127" style={{
                    background: 'var(--primary-brand)',
                    color: 'white',
                    padding: '12px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                }}>
                    <Phone size={18} /> Call
                </a>
                <a href="https://wa.me/919054156127?text=Hello%20Vijay%20Laxmi%20Steel%2C%20I%20am%20interested%20in%20your%20products.%20Please%20provide%20more%20information." target="_blank" rel="noopener noreferrer" style={{
                    background: '#25D366',
                    color: 'white',
                    padding: '12px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                }}>
                    <MessageSquare size={18} /> WhatsApp
                </a>
            </div>

        </div>
    );
};

export default ContactPage;
