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
import Shows from "@/pages/Shows";
import Photo from "@/pages/Photo";

import CircusOlympic from "@/pages/shows/CircusOlympic/CircusOlympic";
import Butterfly from "@/pages/shows/Butterfly/Butterfly";
import Wave from "@/pages/shows/Wave/Wave";
import Rainbow from "@/pages/shows/Rainbow/Rainbow";
import CircusClassic from "@/pages/shows/CircusClassic/CircusClassic";
import Show from "@/components/Show/Show";

export function MainRoutes () {
  return (
    <div className="container-fuild">
      <div className="container-fuild">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="photo" element={<Photo />} />

          <Route path="shows" element={<Shows />}>
            {/* <Route path="butterfly" element={<Show />} /> */}
          </Route>
          <Route path="/shows/circus_olympics" element={<CircusOlympic />} />
          <Route path="/shows/butterfly" element={<Butterfly />} />
          <Route path="/shows/dwave" element={<Wave />} />
          <Route path="/shows/rainbow_show" element={<Rainbow />} />
          <Route path="/shows/circus_classic" element={<CircusClassic />} />

          {/* <Route path="/test" element={<CircusOlympic />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default MainRoutes ;