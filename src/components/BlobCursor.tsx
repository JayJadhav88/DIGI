import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BlobCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-primary-purple/30 backdrop-blur-sm"
      style={{
        width: 40,
        height: 40,
      }}
      animate={{
        x: position.x - 20,
        y: position.y - 20,
        scale: isPointer ? 1.5 : 1,
        opacity: isPointer ? 0.5 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        mass: 0.5,
      }}
    />
  );
};

export default BlobCursor;
