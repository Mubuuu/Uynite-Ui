import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import EventCard from '../components/EventCard'
import Createtab from '../components/Createtab'

function Event() {
  return (
    <>
    <Navbar />
    <div className="flex ">
      <div className='w-1/3 px-3'>

    <Sidebar />
      </div>
    <div className='w-full'>
      <Createtab />
      <EventCard />
    </div>
    </div>
    </>
  )
}

export default Event