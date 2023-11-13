import React, { Fragment } from "react";
import { createRoot } from 'react-dom/client';

import List from "./containers/List";
import NavbarMain from "./components/Navbar";
import Footer from "./components/Footer/footer";

import "bootswatch/dist/lux/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Info from "./components/Footer/info";
import Ayuda from "./components/Footer/ayuda";
import Detail from "./components/Detail";
import ContacUs from "./components/Footer/ContacUs";

const App = () => {
  return (
      <BrowserRouter>
          <NavbarMain/>
          <Routes className="bg-dark">
                <Route path="/" element={<List/>}/>
                <Route path="/:resultado/:num" element={<List/>}/>
                <Route path="/info" element={<Info/>}/>
                <Route path="/ayuda" element={<Ayuda/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
                <Route path="/contacUs" element={<ContacUs/>}/>
                <Route path="*" element={<Navigate replace to="/"/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>)