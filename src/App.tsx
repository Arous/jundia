import React from 'react';

import './App.css'
import { AppProvider } from '@/providers/app';
import Navbar from './components/navbar/Navigation';
import MainRoutes from '@/routes/MainRoutes'
import ResponsiveNavbar from '@/components/navbar/ResponsiveNavbar';


const App: React.FC = () => {
  return (
    <AppProvider>
      <ResponsiveNavbar />
    </AppProvider>
  )
}
export default App;
