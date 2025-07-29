// src/components/Layout.js
import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
