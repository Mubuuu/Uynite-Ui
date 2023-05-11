import React from 'react'

function SidebarTab({img, title}) {
  return (
    <div className="py-1">
      <div className="rounded-xl bg-bggreen border-2 border-textgreen">
        <div className="flex  items-center ">
          <img className="w-20 h-16" src={img} alt="" />
          <h1 className="w-full text-center font-bold text-textgreen">{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default SidebarTab