import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Createtab from '../components/Createtab'
import EventCard from '../components/EventCard'
import CongratulationsCard from '../components/CongratulationsCard'
import SuggestedAd from '../components/SuggestedAd'

function Congratulations() {
  return (
    <>
    <Navbar />
    <div className="flex ">
      <div className='w-1/3 px-3'>

    <Sidebar />
      </div>
    <div className='w-full'>
      <Createtab />
      <CongratulationsCard />
      <SuggestedAd />
    </div>
    </div>
    </>
  )
}

export default Congratulations