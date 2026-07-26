/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          600: '#6366F1',
          700: '#4F46E5',
        },
        slate: {
          50: '#F8FAFC',
          400: '#94A3B8',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        rose: {
          500: '#F43F5E',
        },
      },
    },
  },
  plugins: [],
}