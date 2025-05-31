import React from 'react';

const destinations = [
  {
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Goa, India',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80',
  },
];

const WeekendDestinations: React.FC = () => (
  <section className="py-12 px-4 bg-blue-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">Weekend Destinations</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {destinations.map((dest, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">{dest.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WeekendDestinations;