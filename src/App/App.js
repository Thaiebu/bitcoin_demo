import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from '../HomePage/HomePage';
import { history } from '../_helpers/history';
import './App.css';


function App() {
  return (
    <div className="App">
            <Router history={history} >
              <Routes>
                  <Route exact path="/" element={<HomePage/>} />
                  <Route path='*' element={<HomePage/>} />
              </Routes>
          </Router>
    </div>
  );
}

export default App;
