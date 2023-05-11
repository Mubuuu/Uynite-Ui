import React from "react";

function EventCard() {
  return (
    <div className="w-2/5 bg-white mt-4 rounded">
      <div className="p-4">
        <div className="flex items-center">
        <h1 className="w-6 h-6 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
          </svg>
        </h1>
        <h1 className="font-bold text-center w-full">Event Title</h1>
        </div>
        <div className="justify-center py-2">
          <img className="w-full h-80" src="/images/get together.PNG" alt="" />
        </div>
        <div>
          <div className="flex">
            <h1 className="w-2/5">Hosted By </h1>
            <p>:</p>
            <h1 className="w-3/5 pl-3 font-bold">Venkata Manohar</h1>
          </div>

          <div className="flex">
            <h1 className="w-2/5">Mobile Number</h1>
            <p>:</p>
            <h1 className="w-3/5 pl-3 font-bold">+1 1234567890</h1>
          </div>

          <div className="flex">
            <h1 className="w-2/5">Food Availability </h1>
            <p>:</p>
            <h1 className="w-3/5 pl-3 font-bold">Yes</h1>
          </div>

          <div className="flex">
            <h1 className="w-2/5">Event Live Stream</h1>
            <p>:</p>
            <h1 className="w-3/5 pl-3 font-bold">Yes</h1>
          </div>
          <div className="flex">
            <h1 className="w-2/5">Location</h1>
            <p>:</p>
            <h1 className="w-3/5 pl-3 font-bold">1234 Address ave, city,state</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
