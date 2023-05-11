import React from 'react'

function Navbar() {
  return (
    <div className='bg-white'>
        <div className="flex p-2">
            <div className="w-1/3">
            <img className='w-34 h-12' src="/images/Uynite.png" alt="" />
            </div>
            <div className="w-1/3 flex justify-between">
            <img className='w-34 h-12' src="/images/roots.png" alt="" />
            <img className='w-34 h-12' src="/images/knicks.png" alt="" />
            <img className='w-34 h-12' src="/images/reals.png" alt="" />
            <img className='w-34 h-12' src="/images/U-Meet.png" alt="" />
            </div>
            <div className="w-1/3 flex justify-end">
            <img className='w-34 h-12' src="/images/chat.png" alt="" />
            <img className='w-34 h-12' src="/images/friends.png" alt="" />
            <img className='w-34 h-12' src="/images/notifications.png" alt="" />
            <img className='w-34 h-12' src="/images/menu.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar