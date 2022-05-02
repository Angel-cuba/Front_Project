import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from '../pages/CountryDetails';
import Home from '../pages/Home';

const MyRoutes = () => (
  <Routes>
    <Route path="" element={<Home />} />
    <Route path="/country/:id" element={<CountryDetails />} />
  </Routes>
);

export default MyRoutes;
