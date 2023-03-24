import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@/App.css";
//import RouterLinks from './Component/RouterLinks';
// import Signup from "./Component/Signup";
// import Myaccount from "./Component/Myaccount";
// import Home from "./Component/Home";
// import LeftSide from "./Component/LeftSide/LeftSide";
// import Contact from "./Component/Contact";
// import Practice from "./Component/Practice";
import "bootstrap/dist/css/bootstrap.css";
// import "react-notifications/lib/notifications.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import { NotificationContainer } from "react-notifications";
//import Post from './Component/Container';
//import gird from './@material-ui/core/gird'

import About from "@/pages/About";
import Show from "@/pages/Show";

export function App() {
  return (
    <div className="container-fuild">
      <div className="container-fuild">
        {/* <Header /> */}
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Show" element={<Show />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;