import React from 'react';

export default function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '1rem',
        background: '#282c34',
        color: 'white',
        zIndex: 1000,
      }}
    >
      <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>My React Projects</span>
      <span style={{ marginLeft: '2rem' }}>Home</span>
      <span style={{ marginLeft: '1rem' }}>About</span>
      <span style={{ marginLeft: '1rem' }}>Contact</span>
    </nav>
  );
}