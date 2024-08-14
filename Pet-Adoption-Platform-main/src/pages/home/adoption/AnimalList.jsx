// src/components/AnimalList.jsx
import React, { useState } from 'react';
import { animals } from '../../../data/animals';
import AnimalCard from './AnimalCard';
import Navbar from "../../../shared/navbar/Navbar";
import InfiniteScroll from 'react-infinite-scroll-component';
import Footer from '../../../shared/footer/Footer';

const AnimalList = () => {
  const [animalList] = useState(animals);
  const handleScroll = () => {
    setItemsToShow(prevItems => prevItems + 10);
  };

  return (
    <div><Navbar></Navbar>
     <div>
            <p className="text-5xl bg-yellow-600 text-white flex justify-center w-9/12 mx-auto border-y-2 mt-20 mb-4 py-7">Help them find their fur-ever Home!</p>
            <p className='flex justify-center text-bold text-2xl mb-8 text-slate-500 '>Animals available for Adoption :</p>
        </div>
   
       <div className='px-10 mx-20'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {animalList.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AnimalList;
