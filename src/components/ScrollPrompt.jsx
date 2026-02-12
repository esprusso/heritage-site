import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const ScrollPrompt = ({
    targetId,
    color = 'var(--sub-text-color)',
    label = "Scroll Down"
}) => {
    return (
        <motion.a
            href={`#${targetId}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                color: color,
                textDecoration: 'none',
                cursor: 'pointer',
                marginTop: '4rem',
                marginBottom: '2rem'
            }}
        >
            <span style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontWeight: 500
            }}>
                {label}
            </span>
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <ArrowDown size={20} />
            </motion.div>
        </motion.a>
    );
};

export default ScrollPrompt;
