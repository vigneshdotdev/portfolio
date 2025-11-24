import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackendVisualization = () => {
    const [requests, setRequests] = useState([]);
    const [circuitState, setCircuitState] = useState({
        global: 'closed', // closed, open
        shopA: 'closed',
        shopB: 'closed',
        counterA1: 'closed',
        counterA2: 'closed',
        counterB1: 'closed'
    });

    // Simulation Loop
    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now() + Math.random();
            const type = Math.random() > 0.7 ? 'heavy' : 'normal'; // 30% heavy requests
            const source = Math.random() > 0.5 ? 'shopA' : 'shopB';
            const counter = source === 'shopA'
                ? (Math.random() > 0.5 ? 'counterA1' : 'counterA2')
                : 'counterB1';

            // "Noisy Neighbor" Logic: Shop A, Counter A1 sends TOO MANY heavy requests
            const isNoisy = source === 'shopA' && counter === 'counterA1' && Math.random() > 0.2;

            const newRequest = {
                id,
                type: isNoisy ? 'heavy' : type,
                source,
                counter,
                status: 'pending', // pending, processing, success, blocked
                progress: 0
            };

            setRequests(prev => [...prev.slice(-15), newRequest]); // Keep last 15
        }, 800);

        return () => clearInterval(interval);
    }, []);

    // Circuit Breaker Logic
    useEffect(() => {
        // Check for "overload" from Counter A1
        const recentA1 = requests.filter(r => r.counter === 'counterA1' && r.type === 'heavy').length;

        if (recentA1 > 3 && circuitState.counterA1 === 'closed') {
            setCircuitState(prev => ({ ...prev, counterA1: 'open' }));
            setTimeout(() => setCircuitState(prev => ({ ...prev, counterA1: 'closed' })), 3000); // Reset after 3s
        }
    }, [requests, circuitState.counterA1]);

    return (
        <div className="glass-card" style={{
            padding: '2rem',
            margin: '2rem 0',
            overflow: 'hidden',
            background: 'rgba(10, 10, 10, 0.6)'
        }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-primary)' }}>
                Multi-Level Circuit Breaker Simulation
            </h3>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                gap: '1rem',
                alignItems: 'center',
                minHeight: '300px'
            }}>
                {/* 1. Clients (POS) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <ClientNode name="Shop A" counters={['A1', 'A2']} />
                    <ClientNode name="Shop B" counters={['B1']} />
                </div>

                {/* 2. Circuit Breakers */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Circuit Breakers</div>

                    {/* Shop Level Breakers */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
                        <Breaker status={circuitState.shopA} label="Shop A CB" />
                        <Breaker status={circuitState.shopB} label="Shop B CB" />
                    </div>
                </div>

                {/* 3. Global Breaker & Queue */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <Breaker status={circuitState.global} label="Global CB" isGlobal />
                </div>

                {/* 4. Backend */}
                <div style={{
                    padding: '1rem',
                    border: '2px solid var(--accent-primary)',
                    borderRadius: '1rem',
                    textAlign: 'center',
                    background: 'rgba(56, 189, 248, 0.1)'
                }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-primary)' }}>Core API</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Redis + DB</div>
                </div>
            </div>

            {/* Request Particles */}
            <AnimatePresence>
                {requests.map(req => (
                    <RequestParticle
                        key={req.id}
                        req={req}
                        circuitState={circuitState}
                    />
                ))}
            </AnimatePresence>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', justifyContent: 'center', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#4dff4d' }}></div> Normal Req
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff4d4d' }}></div> Heavy/Noisy Req
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', border: '2px solid #ff4d4d' }}></div> Circuit Open (Blocked)
                </div>
            </div>
        </div>
    );
};

const ClientNode = ({ name, counters }) => (
    <div style={{
        padding: '1rem',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '0.5rem',
        border: '1px solid var(--glass-border)'
    }}>
        <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{name}</div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
            {counters.map(c => (
                <div key={c} style={{
                    padding: '0.3rem',
                    background: 'var(--bg-primary)',
                    fontSize: '0.7rem',
                    borderRadius: '0.3rem',
                    border: c === 'A1' ? '1px solid #ff4d4d' : '1px solid var(--glass-border)' // Highlight noisy one
                }}>
                    POS {c}
                </div>
            ))}
        </div>
    </div>
);

const Breaker = ({ status, label, isGlobal }) => (
    <motion.div
        animate={{
            borderColor: status === 'open' ? '#ff4d4d' : 'var(--accent-primary)',
            backgroundColor: status === 'open' ? 'rgba(255, 77, 77, 0.1)' : 'rgba(56, 189, 248, 0.1)'
        }}
        style={{
            padding: '0.5rem',
            border: '2px solid',
            borderRadius: '0.5rem',
            width: '100%',
            textAlign: 'center',
            fontSize: '0.8rem',
            color: 'var(--text-primary)',
            position: 'relative'
        }}
    >
        {label}
        <div style={{ fontSize: '0.7rem', color: status === 'open' ? '#ff4d4d' : '#4dff4d' }}>
            {status.toUpperCase()}
        </div>
    </motion.div>
);

const RequestParticle = ({ req, circuitState }) => {
    // Determine if blocked
    const isBlocked =
        (req.counter === 'counterA1' && circuitState.counterA1 === 'open') ||
        (req.source === 'shopA' && circuitState.shopA === 'open') ||
        circuitState.global === 'open';

    // Calculate Y positions based on source (approximate for demo)
    const startY = req.source === 'shopA' ? 50 : 150;

    return (
        <motion.div
            initial={{ x: 50, y: startY, opacity: 0 }}
            animate={isBlocked ?
                { x: 150, opacity: [1, 1, 0], scale: 1.5 } : // Blocked at breaker
                { x: [50, 200, 400, 600], opacity: [1, 1, 1, 0] } // Success flow
            }
            transition={{ duration: isBlocked ? 1 : 3, ease: "linear" }}
            style={{
                position: 'absolute',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: req.type === 'heavy' ? '#ff4d4d' : '#4dff4d',
                boxShadow: `0 0 10px ${req.type === 'heavy' ? '#ff4d4d' : '#4dff4d'}`,
                zIndex: 10,
                pointerEvents: 'none'
            }}
        >
            {isBlocked && <div style={{
                position: 'absolute',
                top: -15,
                left: -5,
                fontSize: '10px',
                color: '#ff4d4d',
                fontWeight: 'bold'
            }}>BLOCKED</div>}
        </motion.div>
    );
};

export default BackendVisualization;
