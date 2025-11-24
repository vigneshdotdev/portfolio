import React from 'react';
import { config } from '../data/config';

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem 0',
            borderTop: '1px solid var(--glass-border)',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
        }}>
            <div className="container">
                <p style={{ marginBottom: '0.5rem' }}>&copy; {new Date().getFullYear()} {config.footer.copyright}. Built with React & Vanilla CSS.</p>
                <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                    Vibe coded with <a href="https://antigravity.google/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Google's Antigravity 🤖</a>.
                    To fork and implement yours visit <a href="https://github.com/vigneshdotdev/portfolio" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>GitHub 🐙</a>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
