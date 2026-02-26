import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page" style={{ background: 'var(--bg-light)', minHeight: '100vh' }}>
            <section style={{ padding: '120px 5% 80px', background: 'var(--charcoal-black)', color: 'white', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem' }}>Terms & Conditions</h1>
            </section>

            <section className="section container" style={{ maxWidth: '900px', margin: '0 auto', background: 'white', padding: '60px', borderRadius: '12px', marginTop: '-40px', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                <h3>1. Acceptance of Terms</h3>
                <p style={{ color: 'var(--text-paragraph)', marginBottom: '30px' }}>By accessing this website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.</p>

                <h3>2. Use License</h3>
                <p style={{ color: 'var(--text-paragraph)', marginBottom: '30px' }}>Permission is granted to temporarily download one copy of the materials (information or software) on Vijay Laxmi Steel's website for personal, non-commercial transitory viewing only.</p>

                <h3>3. Disclaimer</h3>
                <p style={{ color: 'var(--text-paragraph)', marginBottom: '30px' }}>The materials on Vijay Laxmi Steel's website are provided on an 'as is' basis. Vijay Laxmi Steel makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                <h3>4. Limitation of Liability</h3>
                <p style={{ color: 'var(--text-paragraph)' }}>In no event shall Vijay Laxmi Steel or its suppliers be liable for any damages arising out of the use or inability to use the materials on Vijay Laxmi Steel's website.</p>
            </section>
        </div>
    );
};

export default TermsConditions;
