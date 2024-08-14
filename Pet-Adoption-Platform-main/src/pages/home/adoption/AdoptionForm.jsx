// src/components/AdoptionForm.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { animals } from '../../../data/animals';
import Alert from './Alert';
import Navbar from '../../../shared/navbar/Navbar';
import Footer from '../../../shared/footer/Footer';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const AdoptionForm = () => {
  const { id } = useParams();
  const animal = animals.find((a) => a.id === parseInt(id));
  const [adopterName, setAdopterName] = useState('');
  const [adopterContact, setAdopterContact] = useState('');
  const [adopterStory, setAdopterStory] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');

  const form = useRef();

  const handleAdopt = async () => {
    try {
      // Simulate adoption process
      if (animal) {
        animal.adoptedBy = { adopterName, adopterContact,adopterStory };
        setTransactionStatus(`You have successfully adopted ${animal.name}!`);
      } else {
        setTransactionStatus('Animal not found. Please try again.');
      }
    } catch (error) {
      setTransactionStatus('Adoption failed. Please try again.');
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vtvda2d', 'template_nfj5vbu', form.current, 'ZE2-N94T6hzshzyDf')
      .then((result) => {
          console.log(result.text);
          toast.success('Send Email Successfully', {
            position: toast.POSITION.RIGHT_TOP,
            autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", 
          });
      }, (error) => {
          console.log(error.text);
      });
  };

  // const closeAlert = () => {
  //   setTransactionStatus('');
  // };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col md:flex-row p-4 gap-6 my-9">
        <div className="flex-1 flex flex-col justify-between m-6">
          <div className="flex-3 mb-4">
            <img
              src={animal.imageUrl}
              alt={animal.name}
              className="w-full h-full object-cover rounded-lg"
              style={{ height: '400px' }} 
            />
          </div>
          <div className="flex-1 font-serif ">
            <h2 className="text-5xl text-black font-bold mb-2">{animal.name}</h2>
          </div>
          <div className="flex-1">
            <p className="text-black mb-4 p-2 text-lg border-t-2">{animal.story}</p>
          </div>
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-4xl text-black font-serif font-bold mb-7">Adopt {animal.name}</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block text-grey-100 mb-2">Name</label>
              <input
                type="text"
                name='from_name'
                value={adopterName}
                onChange={(e) => setAdopterName(e.target.value)}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-grey-100 mb-2">Email</label>
              <input
                type='email' name='from_email'
                value={adopterContact}
                onChange={(e) => setAdopterContact(e.target.value)}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-grey-100 mb-2">Why do you want to adopt <span className='text-yellow-500 text-bold text-lg'>{animal.name} </span> ?</label>
              <div><textarea name='message' required  className="textarea textarea-bordered w-full" placeholder="Write Your Message"></textarea></div>
            </div>

            <div className="p-6 ">
   <input type='submit' className='w-4/12 bgg cursor-pointer text-white font-bold bg-[#FFC000]  rounded-full py-3' value='Send'/>
   </div>
          </form>
        </div>
        {transactionStatus && (
          <Alert message={transactionStatus} animal={animal} onClose={closeAlert} />
        )}
      </div>
      
          <ToastContainer/>
        
      <Footer></Footer>
    </div>
  );
};

export default AdoptionForm;
