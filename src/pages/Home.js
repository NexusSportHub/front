import React from 'react';
import nexusLogo from './nexus-logo.jpg';
import './css/Home.css';

export default function Home() {
    return (
        <div className="center-container">
            <h1 className="center-text">Welcome to Nexus Sport Hub</h1>
            <img src={nexusLogo} alt="Nexus Logo" className="center-image" />
        </div>
    );
}
