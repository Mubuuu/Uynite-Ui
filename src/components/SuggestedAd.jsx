import React from 'react'

function SuggestedAd() {
  return (
    <div>
        <div className='w-3/6 bg-white mt-4 rounded-2xl'>
        <div className='flex mx-auto justify-between p-3'>
            <h1 className='font-bold'>Suggested Ads</h1>
            <button className='text-textgreen font-bold'>View All</button>
        </div>
        <div className="flex p-3 gap-3">
            <img className='w-52 h-32' src="/images/event1.jpg" alt="" />
            <img className='w-52 h-32' src="/images/event2.jpg" alt="" />
        </div>
        </div>
    </div>
  )
}

export default SuggestedAd