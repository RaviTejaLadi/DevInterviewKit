/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    fontSize: {
      '3xs': ['0.6rem', '1rem'],
      '2xs': ['0.7rem', '1rem'],
      xs: ['0.75rem', '1.1rem'],
      sm: ['0.8rem', '1.25rem'],
      md: ['0.85rem', '1.3rem'],
      lg: ['1.1rem', '1.6rem'],
      xl: ['1.2rem', '1.75rem'],
      '2xl': ['1.45rem', '2rem'],
      '3xl': ['1.825rem', '2.25rem'],
      '4xl': ['2.2rem', '2.5rem'],
      '5xl': ['2.5rem', '2.75rem'],
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        neon: {
          400: '#6ee7b7',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        glow: '0 0 8px 2px rgba(110, 231, 183, 0.6)',
        retro: '2px 2px 0px 1px rgba(251, 191, 36, 0.8)',
        futuristic: '0 0 12px 4px rgba(110, 231, 183, 0.3)',
      },
      animation: {
        flip: 'flip 2s infinite',
        wiggle: 'wiggle 0.5s ease-in-out',
      },
      keyframes: {
        flip: {
          '0%': { transform: 'perspective(400px) rotateY(0)' },
          '50%': { transform: 'perspective(400px) rotateY(180deg)' },
          '100%': { transform: 'perspective(400px) rotateY(360deg)' },
        },
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
