// src/components/AnimalCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AnimalCard = ({ animal }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <img src={animal.imageUrl} alt={animal.name} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-xl font-bold mb-2">{animal.name}</h3>
      <p className="text-gray-700">Breed: {animal.breed}</p>
      <p className="text-gray-700">Age: {animal.age} years old</p>
      <Link to={`/adopt/${animal.id}`} className="block bg-blue-500 text-white text-center mt-4 py-2 rounded">
        Adopt
      </Link>
    </div>
  );
};

export default AnimalCard;
