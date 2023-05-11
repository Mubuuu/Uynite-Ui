import React from "react";

function CongratulationsCard() {
  return (
    <div>
      <div className="w-3/6 bg-white rounded-lg mt-3">
        <div className="flex p-4 items-center justify-center">
          <div className=" text-center ">
            <h1 className="font-bold">Success</h1>
            <h1>Congratulations</h1>
          <img src="/images/congratulations.PNG" alt="" />
          <h1 className=" ">You're all set! You can manage your Invite by visiting my events</h1>
          <button className="bg-textgreen w-56 h-10 rounded-3xl text-white">view Invitation</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CongratulationsCard;
