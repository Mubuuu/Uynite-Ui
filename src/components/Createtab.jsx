import React from "react";

function Createtab() {
  return (
    <div className="">
      <div className="flex bg-white mt-3 items-center rounded border-gray-800 border py-2 ">
      <button className="w-1/5">
        <div className="flex items-center px-3">
          <img className="w-10 h-8" src="/images/plus button.PNG" alt="" />
          <h1 className="font-bold text-textgreen">Create Event</h1>
        </div>
      </button>
      <h1 className="font-bold text-textgreen w-4/5 text-center">Your Events</h1>
    </div>
    </div>
  );
}

export default Createtab;
