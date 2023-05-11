import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Createtab from "../components/Createtab";
import ChooseFriendsModal from "../components/ChooseFriendsModal";

function ChooseFriends() {
  return (
    <>
     <div className="z-10 relative">
            <ChooseFriendsModal />
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
  );
}

export default ChooseFriends;
