import React from "react";
import FriendsList from "./FriendsList";

function ChooseFriendsModal() {
  return (
    <div className="w-screen min-h-screen absolute bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white w-3/5 rounded-xl">
        <div className="flex p-4 gap-3">
          <button className="bg-textgreen text-white px-2 rounded-md w-24">
            Friends
          </button>
          <button className="bg-whilte text-textgreen border border-textgreen px-2 rounded-md w-24">
            Relatives
          </button>
          <button className="bg-whilte text-textgreen border border-textgreen px-2 rounded-md w-24">
            Classmates
          </button>
          <button className="bg-whilte text-textgreen border border-textgreen px-2 rounded-md w-24">
            Classmates
          </button>
          <button className="bg-whilte text-textgreen border border-textgreen px-2 rounded-md w-24">
            Classmates
          </button>
          <button className="bg-whilte text-textgreen border border-textgreen px-2 rounded-md w-24">
            Classmates
          </button>
          <button className="bg-whilte text-textgreen border border-textgreen px-2 rounded-md w-24">
            Classmates
          </button>
        </div>
        <hr />
        <div className="p-4">
          <input
            type="text"
            className="outline-none w-full text-black bg-gray-300 p-1 rounded"
            placeholder="search"
          />
        </div>
        <div className="p-4 gap-3">
          <input type="checkbox" className="mr-4" placeholder="search" />
          <label htmlFor="">Select all</label>
        </div>
        <FriendsList />
        <FriendsList />
        <FriendsList />
        <div className="min-h-[100px]">
          <hr />
          <div className="p-2 flex w-full ">
            <img className="w-16 h-16" src="/images/icon person.PNG" alt="" />
            <div className="flex flex-col w-full gap-2">
              <button className="h-9 bg-textgreen rounded-2xl text-white">Add Guest</button>
              <button className="h-9 border border-textgreen rounded-2xl">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseFriendsModal;
