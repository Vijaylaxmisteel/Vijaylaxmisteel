import React from 'react';
import { Phone, Mail, Instagram, ShieldCheck } from 'lucide-react';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-container">
                <div className="top-bar-item">
                    <Phone size={14} color="var(--metallic-blue)" />
                    <a href="tel:+919054156127">+91 90541 56127</a>
                </div>
                <div className="top-bar-item">
                    <Mail size={14} color="var(--metallic-blue)" />
                    <a href="mailto:vijaylaxmisteel1@gmail.com">vijaylaxmisteel1@gmail.com</a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
