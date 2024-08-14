import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';
import { thirdweb } from '../assets';

const CampaignDetails = () => {
  
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);

    setDonators(data);
  }

  useEffect(() => {
    if(contract) fetchDonators();
  }, [contract, address])

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount); 

    navigate('/campaign')
    setIsLoading(false);
  }
  const goBack = () => { navigate(-1);};

  return (
    <div>
      <Navbar/>
      <div className='mt-16 flex justify-end pr-3 '><button onClick={goBack} className='shadow-yellow-100 shadow-md hover:bg-yellow-100 text-yellow-600 '> Go Back </button></div>
      <div className='flex justify-center '>
      
    <div className=' w-8/12 my-3 bg[#c8c8c6] rounded-lg p-6 border-2 border-gray-200 shadow-lg'> 
      {isLoading && <Loader />}

      <div className="w-full flex md:flex-row flex-col mt-6 gap-[30px]  p-7">
         
        <div className="flex-1 flex-col">
        <div> <h2 className="font-serif font-semibold  text-[32px] text-black break-all">{state.title}</h2> </div> 
          <img src={state.image} alt="campaign" className="w-full h-[410px] object-cover rounded-xl"/>
          <div className="relative w-full h-[8px] mt-6 rounded-full bg-[#3a3a43] ">
            <div className="absolute h-full bg-[#4acd8d]" style={{ width: `${calculateBarPercentage(state.target, state.amountCollected)}%`, maxWidth: '100%'}}>
            </div>
          </div>
        </div>

        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox title={`Raised of ${state.target}`} value={state.amountCollected} />
          <CountBox title="Total Backers" value={donators.length} />
        </div>
      </div>

      <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            <h4 className="font-epilogue font-bold text-[18px] text-black uppercase">Creator</h4>

            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[black] cursor-pointer">
                <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain"/>
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[14px] text-bold  text-black break-all">{state.owner}</h4>
                <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">Campaigns</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-bold text-[18px] text-black uppercase">Story</h4>

              <div className="mt-[20px]">
                <p className="font-serif font-normal text-[16px] text-[black] mr-5 leading-[26px] text-justify">{state.description}</p>
              </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-bold text-black uppercase">Donators</h4>

              <div className="mt-[20px] flex flex-col gap-4 ">
                {donators.length > 0 ? donators.map((item, index) => (
                  <div key={`${item.donator}-${index}`} className="flex justify-between items-center gap-4">
                    <p className="font-epilogue font-normal text-[16px] text-[black] leading-[26px] break-ll">{index + 1}. {item.donator}</p>
                    <p className="font-epilogue font-normal text-[16px] text-[black] leading-[26px] break-ll">{item.donation}</p>
                  </div>
                )) : (
                  <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">No donators yet. Be the first one!</p>
                )}
              </div>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="font-epilogue font-bold text-[18px] text-black uppercase">Fund</h4>   

          <div className="mt-[20px] flex flex-col p-4 bg-[#9593d2] rounded-[10px]">
            <p className="font-epilogue font-medium text-[20px] leading-[30px] text-center text-[white]">
              Fund the campaign
            </p>
            <div className="mt-[30px]">
              <input 
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <div className="my-[20px] p-4 bg-[#d6d5ee] rounded-[10px]">
                <h4 className="font-epilogue font-bold text-[15px] leading-[22px] text-black">Back it because you believe in it.</h4>
                <p className="mt-[20px] font-epilogue font-normal leading-[24px] text-[#808191]"> Your contribution will make a meaningful difference in their lives.</p>
              </div>

              <CustomButton 
                btnType="button"
                title="Fund Campaign"
                styles="w-full bg-[#6679e4]"
                handleClick={handleDonate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default CampaignDetails