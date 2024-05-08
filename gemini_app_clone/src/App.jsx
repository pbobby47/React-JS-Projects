import React from "react";

import SideBar from "./components/SideBar";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <div className="app-container">
        <SideBar />
        <Main />
      </div>
    </>
  );
};

export default App;
