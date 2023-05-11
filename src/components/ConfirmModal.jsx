import React from "react";

function ConfirmModal() {
  return (
    <div className="w-screen min-h-screen absolute bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white w-1/4 rounded-xl">
        <div className="items-center">
        <h1 className="font-bold p-5 text-center">Choose How You want to share this Invitation</h1>
        </div>
        <hr />
        <div className="flex justify-between p-5">
            <h1>Want Post Even on Home Screen</h1>
            <div className="relative w-[40px] h-[20px] border border-textgreen rounded-md">
                <div className="absolute w-[10px] h-[10px] bg-textgreen rounded-full right-1 top-1"></div>
            </div>
        </div>
        <div className="flex justify-between p-5">
            <h1>Want Post Even on Home Screen</h1>
            <div className="relative w-[40px] h-[20px] border border-textgreen rounded-md">
                <div className="absolute w-[10px] h-[10px] bg-textgreen rounded-full right-1 top-1"></div>
            </div>
        </div>
        <div className="flex justify-center p-3">
            <button className="bg-textgreen text-white p-2 rounded-md w-28">Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
