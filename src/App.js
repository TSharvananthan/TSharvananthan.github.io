import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route,  Link } from "react-router-dom";

import Portfolio from "./portfolio/Portfolio.js";
import Home from "./home/Home.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
