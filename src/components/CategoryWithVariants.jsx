import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, MoreHorizontal } from 'lucide-react';

/**
 * CategoryWithVariants Component
 * 
 * @param {Array} data - Array of categories with variants.
 * Example: [{ name: "Category Name", variants: ["V1", "V2", "..."] }]
 * @param {Number} threshold - Number of variants to show before displaying "...and more"
 */
const CategoryWithVariants = ({ data = [] }) => {
    if (!data || data.length === 0) return null;

    return (
        <div className="categories-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', width: '100%' }}>
            {data.map((category, index) => (
                <CategoryRow
                    key={index}
                    name={category.name}
                    variants={category.variants}
                />
            ))}
        </div>
    );
};

const CategoryRow = ({ name, variants = [] }) => {
    return (
        <div className="category-card" style={{
            width: '100%',
            background: 'white',
            borderRadius: '12px',
            border: '1px solid var(--soft-steel)',
            padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            transition: 'var(--transition)'
        }}>
            {/* Category Header */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
            }}>
                <div style={{
                    width: '3px',
                    height: '18px',
                    background: 'var(--metallic-blue)',
                    borderRadius: '2px'
                }}></div>
                <h3 style={{
                    fontSize: '1rem',
                    color: 'var(--text-heading)',
                    margin: 0,
                    fontWeight: 700,
                    fontFamily: 'Montserrat, sans-serif',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase'
                }}>
                    {name}
                </h3>
            </div>

            {/* Vertical Scrollable List */}
            <div style={{
                maxHeight: '180px',
                overflowY: 'auto',
                paddingRight: '8px'
            }} className="custom-v-scroll">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    {variants.map((variant, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.02 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '10px 0',
                                borderBottom: idx === variants.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.04)',
                                fontSize: '0.85rem',
                                color: 'var(--text-paragraph)',
                                fontWeight: 500
                            }}
                        >
                            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--metallic-blue)', opacity: 0.4, flexShrink: 0 }} />
                            {variant}
                        </motion.div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .category-card:hover {
                    border-color: var(--metallic-blue);
                    transform: translateY(-5px);
                    box-shadow: 0 12px 30px rgba(58, 122, 254, 0.08);
                }
                .custom-v-scroll::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-v-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-v-scroll::-webkit-scrollbar-thumb {
                    background: var(--soft-steel);
                    border-radius: 10px;
                }
                .custom-v-scroll:hover::-webkit-scrollbar-thumb {
                    background: var(--metallic-blue);
                }
            `}} />
        </div>
    );
};

export default CategoryWithVariants;
