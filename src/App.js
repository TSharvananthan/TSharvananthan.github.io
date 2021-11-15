import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route,  Link } from "react-router-dom";

import PortfolioApp from "./portfolio/Portfolio.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PortfolioApp />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
