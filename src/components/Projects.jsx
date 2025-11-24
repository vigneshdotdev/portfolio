import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import ScrollReveal from './ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="section">
            <div className="container">
                <ScrollReveal>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                </ScrollReveal>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projectsData.map((project, index) => (
                        <ScrollReveal key={project.id} delay={index * 100}>
                            <div
                                className="glass-card"
                                style={{
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setSelectedProject(project)}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(56, 189, 248, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <h3 style={{
                                    fontSize: '1.3rem',
                                    marginBottom: '1rem',
                                    color: 'var(--text-primary)'
                                }}>
                                    {project.title}
                                </h3>

                                <p style={{
                                    color: 'var(--text-secondary)',
                                    marginBottom: '1.5rem',
                                    lineHeight: 1.6,
                                    flex: 1
                                }}>
                                    {project.description}
                                </p>

                                <div style={{ marginBottom: '1rem' }}>
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '0.5rem',
                                        marginBottom: '1rem'
                                    }}>
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx} style={{
                                                padding: '0.3rem 0.8rem',
                                                background: 'rgba(56, 189, 248, 0.1)',
                                                border: '1px solid var(--accent-primary)',
                                                borderRadius: '1rem',
                                                fontSize: '0.8rem',
                                                color: 'var(--accent-primary)'
                                            }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div style={{ marginTop: 'auto', color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: '600' }}>
                                    Click for details →
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.8)',
                            backdropFilter: 'blur(5px)',
                            zIndex: 10000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass-card"
                            style={{
                                maxWidth: '800px',
                                width: '100%',
                                maxHeight: '90vh',
                                overflowY: 'auto',
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--accent-primary)',
                                position: 'relative'
                            }}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--text-secondary)',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer'
                                }}
                            >
                                ×
                            </button>

                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                {selectedProject.title}
                            </h2>

                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                                {selectedProject.technologies.map((tech, idx) => (
                                    <span key={idx} style={{
                                        padding: '0.3rem 0.8rem',
                                        background: 'rgba(56, 189, 248, 0.1)',
                                        border: '1px solid var(--accent-primary)',
                                        borderRadius: '1rem',
                                        fontSize: '0.8rem',
                                        color: 'var(--accent-primary)'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'grid', gap: '2rem' }}>
                                <div>
                                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Problem</h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{selectedProject.problem}</p>
                                </div>

                                <div>
                                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Solution</h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{selectedProject.solution}</p>
                                </div>

                                <div>
                                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Why this approach?</h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{selectedProject.reasoning}</p>
                                </div>

                                <div>
                                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Key Highlights</h3>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {selectedProject.highlights.map((highlight, idx) => (
                                            <li key={idx} style={{
                                                color: 'var(--text-secondary)',
                                                marginBottom: '0.5rem',
                                                paddingLeft: '1.5rem',
                                                position: 'relative'
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
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
