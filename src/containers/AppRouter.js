import React from 'react'
import {
    BrowserRouter,
    Routes ,
    Route
} from "react-router-dom";
import Character from "../components/Character";
import Header from "../components/Header";
import Episode from "./Episode";


function AppRouter() {
  return (
    
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/"  element={<Character/>} />
        <Route path="Episode" element={<Episode />} />
    </Routes>
</BrowserRouter>
  );
}

export default AppRouter;
