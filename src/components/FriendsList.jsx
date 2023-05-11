import React from "react";

function FriendsList() {
  return (
    <div>
      <div className="flex p-1 items-center justify-between">
        <div className="flex w-1/5 items-center justify-between">
          <img className="w-20 h-20" src="/images/profile.PNG" alt="" />
          <h1>Anil</h1>
        </div>
        <img src="/images/tick1.PNG" alt="" />
      </div>
      <hr />
    </div>
  );
}

export default FriendsList;
