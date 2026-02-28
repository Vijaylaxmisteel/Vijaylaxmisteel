import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = ({ isMenuOpen }) => {
    return (
        <AnimatePresence>
            {!isMenuOpen && (
                <motion.a
                    href="https://wa.me/919054156127?text=Hello%20Vijay%20Laxmi%20Steel%2C%20I%20am%20interested%20in%20your%20products.%20Please%20provide%20more%20information."
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        position: 'fixed',
                        bottom: '30px',
                        right: '30px',
                        background: '#25D366',
                        color: 'white',
                        padding: '15px',
                        borderRadius: '50%',
                        boxShadow: '0 10px 30px rgba(37, 211, 102, 0.4)',
                        zIndex: 2000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <MessageCircle size={30} fill="white" />
                </motion.a>
            )}
        </AnimatePresence>
    );
};

export default WhatsAppButton;
