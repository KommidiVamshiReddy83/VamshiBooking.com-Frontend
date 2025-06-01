import React, { useState, useEffect } from 'react';

const suggestions = ["Hyderabad", "ITC Kohinoor"];

function useTypewriter(words: string[], speed = 120, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (forward && subIndex === words[index].length) {
      setTimeout(() => setForward(false), pause);
      return;
    }
    if (!forward && subIndex === 0) {
      setForward(true);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, forward ? speed : 40);
    return () => clearTimeout(timeout);
  }, [subIndex, forward, index, words, speed, pause]);

  return words[index].substring(0, subIndex);
}

const HomeHero: React.FC = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const animatedPlaceholder = useTypewriter(suggestions);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${location} from ${checkIn} to ${checkOut}`);
  };

  return (
    <section className="bg-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Find your perfect stay</h1>
        <p className="text-gray-600 mb-8">Enter your destination and dates to see available hotels, guest houses, and apartments.</p>
        <form
          onSubmit={handleSearch}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-4 items-center justify-center"
        >
          <input
            type="text"
            placeholder={animatedPlaceholder}
            className="border border-gray-300 rounded px-4 py-2 w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={location}
            onChange={e => setLocation(e.target.value)}
            required
          />
          <input
            type="date"
            className="border border-gray-300 rounded px-4 py-2 w-full md:w-40 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={checkIn}
            onChange={e => setCheckIn(e.target.value)}
            required
          />
          <input
            type="date"
            className="border border-gray-300 rounded px-4 py-2 w-full md:w-40 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={checkOut}
            onChange={e => setCheckOut(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-700 text-white font-semibold px-6 py-2 rounded hover:bg-blue-800 transition-colors w-full md:w-auto"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default HomeHero;