/// import React from "react";

// Importa SOLO uno a la vez:
{/*
import LabRbButtons from "./lab/LabRbButtons";
import LabRbAlert from "./lab/LabRbAlert";
import LabRbCard from "./lab/LabRbCard";
import LabRbForm from "./lab/LabRbForm";
import LabRbTable from "./lab/LabRbTable";

import HomeRB from "./pages/HomeRB";
import AboutRB from "./pages/AboutRB";

import RBNavbar from "./components/rb/RBNavbar";
import RBFooter from "./components/rb/RBFooter";
import RBCardGrid from "./components/rb/RBCardGrid";
import RBNewsletter from "./components/rb/RBNewsletter";
import RBCarousel from "./components/rb/RBCarousel";
import RBHero from "./components/rb/RBHero";

export default function App() {
  return (
    <>
      {/*
      <LabRbButtons />
      <LabRbAlert />
      <LabRbCard />
      <LabRbForm />
      <LabRbTable />
      <HomeRB />
      <AboutRB />
      <RBNavbar />
      <RBFooter />
      <RBCardGrid />
      <RBNewsletter />
      <RBCarousel />
      <RBHero />
      </>
    );
}
    */}

    
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RBNavbar from "./components/rb/RBNavbar";
import RBFooter from "./components/rb/RBFooter";
import HomeRB from "./pages/HomeRB";
import AboutRB from "./pages/AboutRB";

export default function App() {
  return (
    <BrowserRouter>
      <RBNavbar />

      <Routes>
        <Route path="/" element={<HomeRB />} />
        <Route path="/about" element={<AboutRB />} />
      </Routes>

      <RBFooter />
    </BrowserRouter>
  );
}