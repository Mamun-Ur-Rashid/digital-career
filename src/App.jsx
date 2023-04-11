import React from 'react';
import Header from './component/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;