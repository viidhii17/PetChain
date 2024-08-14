import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { DisplayCampaigns , CustomButton} from '../components';
import { useStateContext } from '../context'
import Navbar from '../shared/navbar/Navbar'
import Footer from '../shared/footer/Footer';

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

  const {connect, address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div>
    <Navbar></Navbar>
    <div >
    <div className="flex flex-row justify-end mt-20 mr-6">
    <CustomButton 
      btnType="button"
      title={address ? 'Create a campaign' : 'Connect Metamask'}
      styles={address ? 'bg-[#1dc071]' : 'bg-orange-500'}
      
      handleClick={() => {
        if(address) navigate('create-campaign')
        else connect()
      }}
    /></div>
    </div>
    
    <div className="m-6 flex-1 flex justify-center items-center">
        <div className="w-full max-w-7xl">
          <DisplayCampaigns 
            title="All Campaigns"
            isLoading={isLoading}
            campaigns={campaigns}
          />
        </div>
      </div>
      <Footer/>
    </div>
   
  )
}

export default Main;