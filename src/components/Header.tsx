import { CassetteTape as LetterCase } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="logo-container">
              <LetterCase size={32} className="logo-icon" />
            </div>
            <div>
              <h1 className="site-title">Tarif's Approach to Tech Giant Deaths</h1>
              <p className="site-tagline">How Tech Giants of today become companies of yesterday</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}