// src/components/Alert.jsx
import React from 'react';

const Alert = ({ message, animal, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 box-border ">
      <div className="bg-blue-50 p-6 rounded shadow-lg max-w-sm mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 mx-16 text-blue-600">Success!</h2>
        {animal && (
          <img
            src={animal.imageUrl}
            alt={animal.name}
            className="w-32 h-32 object-cover rounded-full mx-auto mb-12"
          />
        )}
        <p className="mb-10 text-xl text-black text-bold">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white py-3 px-10 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Alert;
