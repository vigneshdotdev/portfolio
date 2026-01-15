import React, { useState, useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import { config } from '../data/config';
import { FaLinkedin, FaGithub, FaCode, FaDownload, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = config.contact.emailjs.serviceId;
        const TEMPLATE_ID = config.contact.emailjs.templateId;
        const PUBLIC_KEY = config.contact.emailjs.publicKey;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <ScrollReveal>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        I'm always open to discussing new opportunities, interesting projects, or just having a chat about distributed systems.
                    </p>
                </ScrollReveal>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start'
                }}>

                    {/* Contact Info & Socials */}
                    <ScrollReveal delay={100}>
                        <div className="glass-card">
                            <h3 style={{ marginBottom: '2rem', color: 'var(--text-primary)' }}>Find me on</h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <a href={config.contact.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    <FaLinkedin size={24} color="#0077b5" />
                                    <span>LinkedIn</span>
                                </a>

                                <a href={config.contact.social.github} target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    <FaGithub size={24} color="#ffffff" />
                                    <span>GitHub</span>
                                </a>

                                {/* <a href={config.contact.social.leetcode} target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    <FaCode size={24} color="#f89f1b" />
                                    <span>LeetCode</span>
                                </a> */}
                            </div>

                            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
                                <a href={config.contact.resume} download className="btn" style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <FaDownload /> Download Resume
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Contact Form */}
                    <ScrollReveal delay={200}>
                        <form ref={form} onSubmit={sendEmail} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Send a Message</h3>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Name</label>
                                <input type="text" name="user_name" required style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '0.5rem',
                                    color: 'var(--text-primary)',
                                    outline: 'none'
                                }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Email</label>
                                <input type="email" name="user_email" required style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '0.5rem',
                                    color: 'var(--text-primary)',
                                    outline: 'none'
                                }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>I am a...</label>
                                <select name="user_role" style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '0.5rem',
                                    color: 'var(--text-primary)',
                                    outline: 'none'
                                }}>
                                    <option value="Recruiter" style={{ color: 'black' }}>Recruiter</option>
                                    <option value="Developer" style={{ color: 'black' }}>Developer</option>
                                    <option value="Founder" style={{ color: 'black' }}>Founder</option>
                                    <option value="Other" style={{ color: 'black' }}>Other</option>
                                </select>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Message</label>
                                <textarea name="message" rows="4" required style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '0.5rem',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    resize: 'vertical'
                                }}></textarea>
                            </div>

                            <button type="submit" className="btn" disabled={status === 'sending'} style={{ marginTop: '1rem', justifyContent: 'center' }}>
                                {status === 'sending' ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
                            </button>

                            {status === 'success' && <p style={{ color: '#4dff4d', textAlign: 'center' }}>Message sent successfully!</p>}
                            {status === 'error' && <p style={{ color: '#ff4d4d', textAlign: 'center' }}>Failed to send. Please try again.</p>}
                        </form>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
};

export default Contact;
