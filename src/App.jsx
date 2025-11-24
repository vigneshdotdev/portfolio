import { useState, useEffect } from 'react'
import { config } from './data/config'
import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MouseFollower from './components/MouseFollower'

function App() {
    useEffect(() => {
        document.title = config.meta.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', config.meta.description);
        }
    }, []);

    return (
        <div className="app">
            <MouseFollower />
            <Header />
            <main>
                <Hero />
                <Story />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
