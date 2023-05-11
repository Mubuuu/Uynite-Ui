import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Createtab from '../components/Createtab'
import ConfirmModal from '../components/ConfirmModal'

function Confirm() {
  return (
    <>
     <div className="z-10 relative">
            <ConfirmModal />
          </div>
      <Navbar />
      <div className="flex ">
        <div className="w-1/3 px-3">
         
          <Sidebar />
        </div>
        <div className="w-full">
          <Createtab />
        </div>
      </div>
    </>
  )
}

export default Confirm