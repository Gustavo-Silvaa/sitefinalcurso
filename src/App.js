import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Css/Style.css";

import Header from "./component/Header";
import Nav from "./component/Nav";
import Aside from "./component/Aside";
import Footer from "./component/Footer";

import Home from "./Pages/Home";
import Comment from "./Pages/Comment";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>

      <div id="container">

        <Header />

        <Nav />

        <Aside />

        <Footer />

        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Comment" element={<Comment />}>

          </Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;