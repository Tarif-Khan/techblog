import { CassetteTape as LetterCase } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-400 w-12 h-12 rounded-lg flex items-center justify-center">
              <LetterCase size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Tarif's Approach to Tech Giant Deaths</h1>
              <p className="text-gray-400 mt-1">How Tech Giants of today become companies of yesterday</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}