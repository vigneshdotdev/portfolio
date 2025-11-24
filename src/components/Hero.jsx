import React, { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import AnimatedBackground from './AnimatedBackground';
import { config } from '../data/config';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = config.hero.typedText[0] || '';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, [fullText]);

    return (
        <section id="about" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: 'var(--header-height)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <AnimatedBackground />

            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--accent-primary)',
                filter: 'blur(150px)',
                opacity: 0.2,
                borderRadius: '50%',
                zIndex: 0,
                animation: 'float 6s ease-in-out infinite'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '800px' }}>
                    <p style={{
                        color: 'var(--accent-primary)',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        animation: 'slideInLeft 0.8s ease-out'
                    }}>
                        Hi, I'm {config.hero.name}
                    </p>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        fontWeight: 800,
                        animation: 'slideUp 1s ease-out'
                    }}>
                        {config.hero.title.prefix} <br />
                        <span style={{ position: 'relative', display: 'inline' }}>
                            {/* Invisible placeholder to reserve space */}
                            <span style={{
                                visibility: 'hidden',
                                fontWeight: 800,
                                fontSize: 'inherit',
                                lineHeight: 'inherit'
                            }} className="gradient-text">
                                {fullText}
                            </span>
                            {/* Actual typed text overlaid on top */}
                            <span className="gradient-text" style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                fontWeight: 800,
                                fontSize: 'inherit',
                                lineHeight: 'inherit',
                                whiteSpace: 'nowrap'
                            }}>
                                {typedText}
                                <span style={{
                                    borderRight: '3px solid var(--accent-primary)',
                                    animation: 'pulse 1s infinite'
                                }}>|</span>
                            </span>
                        </span>
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        maxWidth: '600px',
                        lineHeight: 1.6,
                        animation: 'slideUp 1.2s ease-out'
                    }}>
                        {config.hero.subtitle}
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        animation: 'slideUp 1.4s ease-out',
                        flexWrap: 'wrap'
                    }}>
                        <a href={config.contact.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href="#contact" className="btn" style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                            {config.hero.cta.primary}
                        </a>
                        <a href="#experience" className="btn" style={{ background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>
                            {config.hero.cta.secondary}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
