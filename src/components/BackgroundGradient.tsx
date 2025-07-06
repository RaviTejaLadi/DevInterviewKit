import { cn } from '@/lib/utils';
import React, { useState, useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  direction: number;
  opacity: number;
  color: 'blue' | 'green' | 'purple' | 'pink' | 'indigo';
  shape: 'circle' | 'square' | 'triangle';
}

interface MousePosition {
  x: number;
  y: number;
}

interface BackgroundGradientProps {
  isDarkMode?: boolean;
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({ isDarkMode = false }) => {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number>();

  // Generate initial particles
  useEffect(() => {
    const generateParticles = (): void => {
      const newParticles: Particle[] = [];
      const colors: Particle['color'][] = ['blue', 'green', 'purple', 'pink', 'indigo'];
      const shapes: Particle['shape'][] = ['circle', 'square', 'triangle'];

      for (let i = 0; i < 25; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 2,
          speed: Math.random() * 2 + 0.5,
          direction: Math.random() * Math.PI * 2,
          opacity: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          shape: shapes[Math.floor(Math.random() * shapes.length)],
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate particles
  useEffect(() => {
    const animate = (): void => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newX = particle.x + Math.cos(particle.direction) * particle.speed * 0.1;
          let newY = particle.y + Math.sin(particle.direction) * particle.speed * 0.1;

          // Bounce off edges
          if (newX < 0 || newX > 100) particle.direction = Math.PI - particle.direction;
          if (newY < 0 || newY > 100) particle.direction = -particle.direction;

          // Keep particles in bounds
          newX = Math.max(0, Math.min(100, newX));
          newY = Math.max(0, Math.min(100, newY));

          return { ...particle, x: newX, y: newY };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const getShapeElement = (particle: Particle): JSX.Element => {
    const baseClasses = `absolute transition-all duration-1000 animate-pulse`;
    const colorClasses: Record<Particle['color'], string> = isDarkMode
      ? {
          blue: 'bg-blue-400',
          green: 'bg-emerald-400',
          purple: 'bg-purple-400',
          pink: 'bg-pink-400',
          indigo: 'bg-indigo-400',
        }
      : {
          blue: 'bg-blue-300',
          green: 'bg-emerald-300',
          purple: 'bg-purple-300',
          pink: 'bg-pink-300',
          indigo: 'bg-indigo-300',
        };

    const style: React.CSSProperties = {
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      opacity: particle.opacity,
      transform: `translate(-50%, -50%) scale(${1 + Math.sin(Date.now() * 0.001 + particle.id) * 0.3})`,
      filter: 'blur(0.5px)',
      animation: `float-${particle.id} ${3 + particle.id * 0.2}s ease-in-out infinite alternate`,
    };

    if (particle.shape === 'circle') {
      return (
        <div
          key={particle.id}
          className={cn(baseClasses, colorClasses[particle.color], 'rounded-full')}
          style={style}
        />
      );
    } else if (particle.shape === 'square') {
      return (
        <div
          key={particle.id}
          className={cn(baseClasses, colorClasses[particle.color], 'rounded-sm rotate-45')}
          style={style}
        />
      );
    } else {
      return (
        <div
          key={particle.id}
          className={cn(baseClasses, colorClasses[particle.color])}
          style={{
            ...style,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
        />
      );
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        {/* Primary gradient orb */}
        <div
          className={cn(
            'absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-1000',
            isDarkMode ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gradient-to-r from-blue-300 to-cyan-300'
          )}
          style={{
            left: `${20 + mousePos.x * 0.1}%`,
            top: `${10 + mousePos.y * 0.1}%`,
            transform: 'translate(-50%, -50%)',
            animation: 'float-orb-1 20s ease-in-out infinite alternate',
          }}
        />

        {/* Secondary gradient orb */}
        <div
          className={cn(
            'absolute w-80 h-80 rounded-full opacity-25 blur-3xl transition-all duration-1000',
            isDarkMode ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-purple-300 to-pink-300'
          )}
          style={{
            right: `${15 + mousePos.x * 0.05}%`,
            top: `${60 + mousePos.y * 0.08}%`,
            transform: 'translate(50%, -50%)',
            animation: 'float-orb-2 25s ease-in-out infinite alternate',
          }}
        />

        {/* Tertiary gradient orb */}
        <div
          className={cn(
            'absolute w-72 h-72 rounded-full opacity-15 blur-3xl transition-all duration-1000',
            isDarkMode
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
              : 'bg-gradient-to-r from-emerald-300 to-teal-300'
          )}
          style={{
            left: `${70 - mousePos.x * 0.08}%`,
            bottom: `${20 + mousePos.y * 0.06}%`,
            transform: 'translate(-50%, 50%)',
            animation: 'float-orb-3 30s ease-in-out infinite alternate',
          }}
        />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">{particles.map((particle) => getShapeElement(particle))}</div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${
              isDarkMode ? '#3b82f6' : '#93c5fd'
            } 2px, transparent 2px), radial-gradient(circle at 75% 75%, ${
              isDarkMode ? '#10b981' : '#86efac'
            } 2px, transparent 2px)`,
            backgroundSize: '50px 50px',
            animation: 'pattern-drift 40s linear infinite',
          }}
        />
      </div>

      {/* Mouse follower effect */}
      <div
        className={cn(
          'absolute w-32 h-32 rounded-full pointer-events-none opacity-10 blur-2xl transition-all duration-300',
          isDarkMode
            ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
            : 'bg-gradient-to-r from-yellow-300 to-orange-300'
        )}
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* CSS Keyframes */}
      <style>{`
        ${particles
          .map(
            (particle) => `
          @keyframes float-${particle.id} {
            0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
            100% { transform: translate(-50%, -50%) scale(1.2) rotate(360deg); }
          }
        `
          )
          .join('')}
      `}</style>
    </div>
  );
};

export default BackgroundGradient;
