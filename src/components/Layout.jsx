import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/layout.css';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="site-header">
        <nav className="site-nav">
          <div className="flex justify-between items-center">
            <a href="/" className="site-logo">Tarif's Tech Analysis</a>
            <div className="site-tagline">How Tech Giants of today become companies of yesterday</div>
          </div>
        </nav>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="footer-content">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Tarif's Approach to Tech Giant Deaths. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;