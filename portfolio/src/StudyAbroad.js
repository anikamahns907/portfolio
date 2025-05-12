import React from 'react';
import './index.css';

const StudyAbroad = () => {
  return (
    <div className="mainDiv" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 200px)' }}>
      <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Space Grotesk, sans-serif' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#0070f3', fontFamily: 'Space Grotesk, sans-serif' }}>Study Abroad</h1>
        <div style={{ 
          display: 'inline-block', 
          padding: '15px 30px', 
          backgroundColor: '#f5f5f5', 
          borderRadius: '8px',
          marginBottom: '20px',
          fontFamily: 'Space Grotesk, sans-serif'
        }}>
          <i className="fas fa-hard-hat" style={{ fontSize: '2rem', color: '#0070f3', marginBottom: '10px' }}></i>
          <p style={{ fontSize: '1.2rem', color: '#666', margin: '10px 0', fontFamily: 'Space Grotesk, sans-serif' }}>This page is under construction</p>
          <p style={{ fontSize: '1rem', color: '#888', fontFamily: 'Space Grotesk, sans-serif' }}>Check back soon for updates!</p>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroad; 