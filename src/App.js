import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from './login';
import Home from './home';

const history = createBrowserHistory({ basename: '/op' });
function App() {
  return (
    <Router history={history} basename="/op">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;
