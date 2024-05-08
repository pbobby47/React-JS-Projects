import React, { useState } from "react";
import { assets } from "../assets/Assests";

console.log(assets);

const SideBar = () => {
    let [expand, setExpand] = useState(true);
    
    let handleExpand = () => {
        setExpand(!expand);
    }

  return (
    <>
      <div id="sidebar-component">
        <div className="top" onClick={handleExpand}>
          <img src={assets.menu_icon} alt="" />
        </div>

        <div className="newchat">
          <img src={assets.plus_icon} alt="" />
          {expand ? <p>New chat</p> : null}
        </div>

        <div className="recents">
          {expand ? (
            <>
              <p className="heading">Recents</p>
              <div className="bars">
                <img src={assets.message_icon} alt="" />
                <p>what is React Js?</p>
              </div>
            </>
          ) : null}
        </div>

        <div className="bottom">
          <div className="bars">
            <img src={assets.question_icon} alt="" />
            {expand ? <p>Help</p> : null}
          </div>
          <div className="bars">
            <img src={assets.history_icon} alt="" />
            {expand ? <p>Activity</p> : null}
          </div>
          <div className="bars">
            <img src={assets.setting_icon} alt="" />
            {expand ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
