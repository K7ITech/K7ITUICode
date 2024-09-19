import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./Components/Pages/LandingPage";
import Aboutus from "./Components/Pages/Aboutus";
import Industries from "./Components/Pages/Industries";
import OurLeadership from "./Components/Pages/OurLeadership";
import OurLeadershipInside from "./Components/Pages/OurLeadershipInside";
import Services from "./Components/Pages/Services";
import Career from "./Components/Pages/Career";
import Mobile from "./Components/Pages/Mobile/Mobile";
import MobileAboutUs from "./Components/Pages/Mobile/MobileAboutUs";
import MobileIndustries from "./Components/Pages/Mobile/MobileIndustries";
import MobileServices from "./Components/Pages/Mobile/MobileServices";
import MobileOurLeadership from "./Components/Pages/Mobile/MobileOurLeadership";
import MobileLeadershipInside from "./Components/Pages/Mobile/MobileLeadershipInside";
import MobileCareer from "./Components/Pages/Mobile/MobileCareer";
import TrainingPlacements from "./Components/Pages/TrainingPlacements";
import MobileContactUs from "./Components/Pages/Mobile/MobileContactUs";
import MobileTrainingPlacements from "./Components/Pages/Mobile/MobileTrainingPlacements";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            
            <Route path="/" exact={true} element={<LandingPage />} />
            <Route path="/Aboutus" exact={true} element={<Aboutus />} />
            <Route path="/Industries" exact={true} element={<Industries />} />
            <Route path="/OurLeadership" exact={true} element={<OurLeadership />} />
            <Route path="/OurLeadershipInside" exact={true} element={<OurLeadershipInside />} />
            <Route path="/Services" exact={true} element={<Services />} />
            <Route path="/TrainingPlacements" exact={true} element={<TrainingPlacements />} />
            <Route path="/Career" exact={true} element={<Career />} />
            <Route path="/Mobile" exact={true} element={<Mobile />} />
            <Route path="/MobileAboutUs" exact={true} element={<MobileAboutUs />} />
            <Route path="/MobileIndustries" exact={true} element={<MobileIndustries />} />
            <Route path="/MobileServices" exact={true} element={<MobileServices />} />
            <Route path="/MobileOurLeadership" exact={true} element={<MobileOurLeadership />} />
            <Route path="/MobileLeadershipInside" exact={true} element={<MobileLeadershipInside />} />
            <Route path="/MobileCareer" exact={true} element={<MobileCareer />} />
            <Route path="/MobileContactUs" exact={true} element={<MobileContactUs />} />
            <Route path="/MobileTrainingPlacements" exact={true} element={<MobileTrainingPlacements />} />
          </Routes>
          </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
