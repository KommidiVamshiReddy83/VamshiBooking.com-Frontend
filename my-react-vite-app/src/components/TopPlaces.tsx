import React from 'react';

const places = [
  {
    name: 'The Grand Palace Hotel',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Seaside Resort',
    location: 'Malibu, USA',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Mountain View Inn',
    location: 'Aspen, USA',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'City Center Suites',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
  },
];

const TopPlaces: React.FC = () => (
  <section className="py-12 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">Top Places</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {places.map((place, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">{place.name}</h3>
              <p className="text-gray-500 text-sm">{place.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TopPlaces;