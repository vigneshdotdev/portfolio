import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MouseFollower = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasMouseSupport, setHasMouseSupport] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has fine pointer support (mouse)
    const checkMouseSupport = () => {
      const hasPointer = window.matchMedia('(pointer: fine)').matches;
      setHasMouseSupport(hasPointer);
    };

    checkMouseSupport();

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);

      const target = e.target;
      setIsPointer(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('btn') ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      );
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    if (hasMouseSupport) {
      window.addEventListener('mousemove', moveCursor);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [hasMouseSupport]);

  if (!hasMouseSupport || !isVisible) return null;

  return (
    <>
      {/* Main Dot - Follows instantly */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-primary)',
          pointerEvents: 'none',
          zIndex: 10002,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: 'difference'
        }}
      />

      {/* Trailing Ring - Follows with spring physics */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: springX,
          y: springY,
          width: isPointer ? '40px' : '24px',
          height: isPointer ? '40px' : '24px',
          borderRadius: '50%',
          border: '1.5px solid var(--accent-primary)',
          pointerEvents: 'none',
          zIndex: 10001,
          translateX: '-50%',
          translateY: '-50%',
          opacity: 0.6,
          mixBlendMode: 'difference'
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />
    </>
  );
};

export default MouseFollower;
