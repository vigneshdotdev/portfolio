import React from 'react';
import { experienceData } from '../data/experience';

import ScrollReveal from './ScrollReveal';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <ScrollReveal>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                </ScrollReveal>



                {experienceData.map((exp, index) => (
                    <ScrollReveal key={exp.id} delay={index * 100}>
                        <div className="glass-card" style={{ marginBottom: '2rem' }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                marginBottom: '1.5rem'
                            }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exp.role}</h3>
                                    <p style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>{exp.company}</p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{exp.location}</p>
                                </div>
                                <div style={{ color: 'var(--text-secondary)' }}>
                                    {exp.duration}
                                </div>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {exp.achievements.map((achievement, idx) => (
                                    <li key={idx} style={{
                                        marginBottom: '1rem',
                                        paddingLeft: '1.5rem',
                                        position: 'relative',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: 0,
                                            top: '0.6rem',
                                            width: '6px',
                                            height: '6px',
                                            borderRadius: '50%',
                                            background: 'var(--accent-primary)'
                                        }} />
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export default Experience;
