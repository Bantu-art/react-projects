import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 'auto', // Pushes footer to the bottom in a flex column layout
        padding: '1rem',
        background: '#222',
        color: '#fff',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <span>© 2025 My React Projects</span>
      <span style={{ marginLeft: '2rem' }}>
        <a href="#" style={{ color: '#61dafb', textDecoration: 'none', marginRight: '1rem' }}>Privacy</a>
        <a href="#" style={{ color: '#61dafb', textDecoration: 'none', marginRight: '1rem' }}>Terms</a>
        <a href="#" style={{ color: '#61dafb', textDecoration: 'none' }}>Contact</a>
      </span>
    </footer>
  );
}