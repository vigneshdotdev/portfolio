import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { config } from '../data/config';

const Story = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

    const storyPoints = config.story;

    return (
        <section id="story" className="section" ref={containerRef} style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <motion.h2
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', opacity, scale }}
                >
                    My <span className="gradient-text">Journey</span>
                </motion.h2>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    {/* Timeline Line */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'var(--glass-border)',
                        zIndex: 0
                    }} />

                    {storyPoints.map((point, index) => (
                        <StoryCard key={index} point={point} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const StoryCard = ({ point, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                display: 'flex',
                gap: '2rem',
                marginBottom: '4rem',
                position: 'relative',
                zIndex: 1
            }}
        >
            <div style={{
                minWidth: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--bg-primary)',
                border: '2px solid var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                boxShadow: '0 0 15px var(--accent-primary)'
            }}>
                {point.icon}
            </div>

            <div className="glass-card" style={{
                flex: 1,
                background: 'rgba(10, 10, 10, 0.6)', // Darker for contrast
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(56, 189, 248, 0.1)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Blender Effect Background */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)',
                    mixBlendMode: 'overlay',
                    pointerEvents: 'none',
                    transform: 'rotate(45deg)'
                }} />

                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{point.year}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{point.text}</p>
            </div>
        </motion.div>
    );
};

export default Story;
