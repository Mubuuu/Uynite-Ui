import React from "react";
import SidebarTab from "./SidebarTab";

function Sidebar() {
  const tabArr = [
    { img: "/images/reunion.png", title: "Re-Union" },
    { img: "/images/birthday.png", title: "Birthday" },
    { img: "/images/marriage.png", title: "Marriage" },
    { img: "/images/anniversary.png", title: "Anniversary" },
    { img: "/images/babyshower.png", title: "Baby-Showers" },
    { img: "/images/others.png", title: "Others" },
  ];
  return (
    <div className="bg-tabcolor mt-16">
      <div>
        <h1 className="text-center font-bold p-2 text-xl">
          Create <span className="text-textgreen">Event</span>
        </h1>
      </div>

      {tabArr.map((item) => (
        <div className="gap-y-8">
          <SidebarTab img={item.img} title={item.title} />
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
