import React from 'react';
import { skillsData } from '../data/skills';
import ScrollReveal from './ScrollReveal';
import { FaCode, FaServer, FaDatabase, FaNetworkWired, FaCertificate } from 'react-icons/fa';

const iconMap = {
    FaCode: <FaCode />,
    FaNetworkWired: <FaNetworkWired />,
    FaServer: <FaServer />,
    FaDatabase: <FaDatabase />,
    FaCertificate: <FaCertificate />
};

const Skills = () => {
    return (
        <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <ScrollReveal>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                </ScrollReveal>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {skillsData.map((category, index) => (
                        <ScrollReveal key={category.id} delay={index * 100}>
                            <div
                                className="glass-card"
                                style={{
                                    background: 'var(--bg-primary)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(56, 189, 248, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <span style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>
                                        {iconMap[category.icon]}
                                    </span>
                                    <h3 style={{ color: 'var(--accent-primary)', margin: 0 }}>
                                        {category.title}
                                    </h3>
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                    {category.skills.map((skill, idx) => (
                                        <span key={idx} style={{
                                            padding: '0.5rem 1rem',
                                            background: 'rgba(255,255,255,0.05)',
                                            borderRadius: '2rem',
                                            fontSize: '0.9rem',
                                            border: '1px solid var(--glass-border)',
                                            transition: 'all 0.3s ease'
                                        }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)';
                                                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
