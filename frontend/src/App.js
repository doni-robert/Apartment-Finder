import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApartmentList from './components/ApartmentList';
import ApartmentDetail from './components/ApartmentDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ApartmentList />} />
          <Route path="/apartments/:id" element={<ApartmentDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;